import os
import tkinter as tk
from tkinter import filedialog
import shutil

#获得选择好的文件夹
folder_path = filedialog.askdirectory()
#定义输出文件夹根目录
folder_path_output = folder_path +'_output'
print("选择路径为：{}".format(folder_path))

#遍历选择的文件夹
for dirpath,dirnames,filenames in os.walk(folder_path):
    print("filenames", filenames)
    for filename in filenames:
        #如果文件格式为.md
        if os.path.splitext(filename)[1] == '.md':
            #拼接文件绝对路径
            path_file = dirpath +'/'+ filename
            #获取无后缀的文件名称
            filename_no_md = filename.replace('.md','')
            #使用列表形式定义需要插入的内容
            list_insert = ['---','title: '+filename_no_md,'sidebar: Docs','showTitle: true','hideAnchor: false','---']
            #将列表拼接成字符串，加上换行符
            insert_str = '\n'.join(list_insert)
            #读取当前文件内容，保存为列表
            with open(path_file, "r",encoding = "utf-8") as f:
                data = f.readlines()
                data_str = ''.join(data)
            #若当前文件已添加抬头内容，则不重复添加
            if data[0] != '---\n':
                data_str = insert_str +'\n'+ data_str
            else:
                data_str = data_str
            #生成输出路径，并创建文件夹
            path_file_out = path_file.replace(folder_path,folder_path_output)
            path_dir_out = path_file_out.replace(filename,'')
            if not os.path.exists(path_dir_out):
                os.makedirs(path_dir_out)
            #写入并保存
            with open(path_file_out, "w+", encoding="utf-8") as f:
                f.write(data_str)
        else:
            
            path_file = os.path.join(dirpath, filename)
            print("path_file is {}", path_file)
            path_file_out = path_file.replace(folder_path,folder_path_output)
            path_dir_out = path_file_out.replace(filename,'')
            if not os.path.exists(path_dir_out):
                os.makedirs(path_dir_out)
            #写入并保存
            # with open(path_file_out, "w+", encoding="utf-8") as f:
            #     f.write(data_str)
            shutil.copyfile(path_file,  path_file_out )