# 3D模型外部文件格式转换

目前，MWorks.Sysplorer仅能建立基本的三维几何元素，无法绘制细致的几何外形，但可将专业的三维软件建立的几何外形文件转换为MWorks可识别的格式，并关联到机械多体模型，从而导入MWorks中，在后处理界面的动画窗口显示出关联的几何外形，以达到逼真的仿真效果。

MWorks.Sysplorer可识别的图形文件格式：

- hsf：Hoops特有的文件类型，是二进制格式，携带面片及颜色信息。

- hmf：Hoops特有的文件类型，是字符格式，携带面片及颜色信息。

- stl：一种为快速原型制造技术服务的三维图形文件格式，携带面片信息，但不携带颜色信息。

- dxf：AutoCAD绘图交换文件，用于AutoCAD与其他软件之间进行CAD数据交换的CAD数据文件格式，是一种基于矢量的ASCII文本格式。以带标记数据的形式表示AutoCAD图形文件中包含的所有信息。目前，MWorks只支持dxf\3DFACE。

- mnf：柔性体的模态中性文件。

- shl：Adams的一种几何形状文件，外形全是由多边形(直线连接的节点组成)表示的，不携带颜色。

| 主题                                                         | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **[几何外形导入MWorks](#/forthExample/3DShapeFilesFormatConversion/Import3DShapeFiles)** | MWorks.Sysplorer中机械多体模型如何关联外界三维图形文件       |
| **[3D软件外部文件转换为MWorks可识别格式的方法](#/forthExample/3DShapeFilesFormatConversion/Conversion)** | 主流三维软件3Dmax、Pro/E、UG、CATIA、SolidWorks及Adams中图形文件转换为MWorks.Sysplorer可识别格式的最佳方法 |