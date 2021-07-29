'use strict'

const FS = require('fs')
const PATH = require('path')
const _ = require('lodash')

const constants = {
  DIRECTORY: 'directory',
  FILE: 'file',
}

function safeReadDirSync(path) {
  let dirData = {}
  try {
    dirData = FS.readdirSync(path)
  } catch (ex) {
    if (ex.code == 'EACCES' || ex.code == 'EPERM') {
      //User does not have permissions, ignore directory
      return null
    } else throw ex
  }
  return dirData
}

/**
 * Normalizes windows style paths by replacing double backslahes with single forward slahes (unix style).
 * @param  {string} path
 * @return {string}
 */
function normalizePath(path) {
  return path.replace(/\\/g, '/')
}

/**
 * Tests if the supplied parameter is of type RegExp
 * @param  {any}  regExp
 * @return {Boolean}
 */
function isRegExp(regExp) {
  return typeof regExp === 'object' && regExp.constructor == RegExp
}

/**
 * Collects the files and folders for a directory path into an Object, subject
 * to the options supplied, and invoking optional
 * @param  {String} path
 * @param  {Object} options
 * @param  {function} onEachFile
 * @param  {function} onEachDirectory
 * @return {Object}
 */
function directoryTree(path, options, onEachFile, onEachDirectory) {
  const name = PATH.basename(path)
  path = options && options.normalizePath ? normalizePath(path) : path
  const item = { path, name }
  let stats

  try {
    stats = FS.statSync(path)
  } catch (e) {
    return null
  }

  // Skip if it matches the exclude regex
  if (options && options.exclude) {
    const excludes = isRegExp(options.exclude)
      ? [options.exclude]
      : options.exclude
    if (excludes.some(exclusion => exclusion.test(path))) {
      return null
    }
  }

  if (stats.isFile()) {
    const ext = PATH.extname(path).toLowerCase()

    // Skip if it does not match the extension regex
    if (options && options.extensions && !options.extensions.test(ext))
      return null

    item.size = stats.size // File size in bytes
    item.extension = ext
    item.type = constants.FILE

    if (options && options.attributes) {
      options.attributes.forEach(attribute => {
        item[attribute] = stats[attribute]
      })
    }

    if (onEachFile) {
      onEachFile(item, path, stats)
    }
  } else if (stats.isDirectory()) {
    let dirData = safeReadDirSync(path)
    if (dirData === null) return null

    if (options && options.attributes) {
      options.attributes.forEach(attribute => {
        item[attribute] = stats[attribute]
      })
    }
    item.children = dirData
      .map(child =>
        directoryTree(
          PATH.join(path, child),
          options,
          onEachFile,
          onEachDirectory
        )
      )
      .filter(e => !!e)
    item.size = item.children.reduce((prev, cur) => prev + cur.size, 0)
    item.type = constants.DIRECTORY
    if (onEachDirectory) {
      onEachDirectory(item, path, stats)
    }
  } else {
    return null // Or set item.size = 0 for devices, FIFO and sockets ?
  }
  return item
}
// console.log(directoryTree('./static'));

const jsonContent = []

const handleFileRead = item => {}

directoryTree(
  './contents',
  { extensions: /\.md$/ },
  (item, PATH) => {},
  (item, PATH, stats) => {
    // console.log(item)
    if (_.includes(item.name, '.assets')) {
      return
    }
    const child_entries = [],
      items = []
    const sentenceCase = _.startCase(_.camelCase(item.name))
    item.children &&
      item.children.forEach(child => {
		  if (_.includes(child.name, '.assets')) {
			  return 
		  }
        if (child.type == 'file') {
          const childPath = /[^.]+/.exec(
            child.path.substring('contents/'.length)
          )[0]
          items.push(childPath)
          // child_entries.push(_.startCase(_.camelCase(child.name.substring(0, child.name.length - 3))));
        }
        if (child.type == 'directory') {
          child_entries.push(_.startCase(_.camelCase(child.name)))
        }
      })
    const entry = {
      entry: sentenceCase,
      name: sentenceCase,
    }
    if (child_entries.length) {
      Object.assign(entry, { child_entries })
    }
    if (items.length) {
      Object.assign(entry, { items })
    }
    jsonContent.unshift(entry)
    // console.log(JSON.stringify(entry, null, '\t'));
  }
)

FS.writeFile(
  './src/sidebars/sidebars.json',
  JSON.stringify(jsonContent, null, '\t'),
  'utf8',
  function(err) {
    if (err) {
      console.log('An error occured while writing JSON Object to File.')
      return console.log(err)
    }

    console.log('JSON file has been saved.')
  }
)
module.exports = directoryTree
