module.exports = {
  pathPrefix: `${__dirname}`,
  siteMetadata: {
    title: 'Gatsby Markdown Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `menuItems`,
        path: `${__dirname}/src/menuItems`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sidebars`,
        path: `${__dirname}/src/sidebars`,
      },
    },
    'gatsby-transformer-sharp',
    // 'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
        // Set to false to allow builds to continue on image errors
        // failOnError: false,
        // // deprecated options and their defaults:
        // base64Width: 20,
        // forceBase64Format: `png`, // valid formats: png,jpg,webp
        // useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        // stripMetadata: false,
        // defaultQuality: 50,
      },
    
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-markdown',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-katex`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-plugin-sharp`,
            options: {
              // Defaults used for gatsbyImageData and StaticImage
              defaults: {
                formats: [`auto`, `webp`],
                placeholder: `dominantColor`,
                quality: 50,
                breakpoints: [750, 1080, 1366, 1920],
                backgroundColor: `transparent`,
                tracedSVGOptions: {},
                blurredOptions: {},
                jpgOptions: {},
                pngOptions: {},
                webpOptions: {},
                avifOptions: {},
              },
              // Set to false to allow builds to continue on image errors
              // failOnError: false,
              // // deprecated options and their defaults:
              // base64Width: 20,
              // forceBase64Format: `png`, // valid formats: png,jpg,webp
              // useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
              // stripMetadata: false,
              // defaultQuality: 50,
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: 'post-toc-anchor',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
