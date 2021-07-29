---
title: Conversion
sidebar: Docs
showTitle: true
hideAnchor: false
---
# 3D软件外部文件转换为MWorks可识别格式的方法

本节根据各个三维软件自身特点，给出相应的转换方法。

用到的3D软件、格式转换工具及MWorks可识别图形文件格式的简单说明。

| **3D软件**      | **安装版本** | **自有文件格式**         | **公用文件格式**          |
| --------------- | ------------ | ------------------------ | ------------------------- |
| Autodesk  3Dmax | 2013         | .max/.chr                | .stl/.igs/.stp/.step/.obj |
| Pro/ENGINEER    | 5.0          | .prt                     |                           |
| UG              | 8.0          | .prt                     |                           |
| CATIA           | P3  V5R20    | .CATPart/.CATProduct     |                           |
| SolidWork       | 2009  SP0.0  | .sldprt/. sldasm/.slddrw |                           |
| Adams           | 2013         | .shl                     |                           |

格式转换工具主要有HOOPS、TransMagic及3D-Tool，可根据需要下载最新版本。

| **转换工具** | **网址**                                             |
| ------------ | ---------------------------------------------------- |
| HOOPS        | https://www.techsoft3d.com/products/hoops/visualize/ |
| TransMagic   | http://www.transmagic.com/                           |
| 3D-Tool      | http://www.3d-tool-usa.com/                          |

 ### SolidWorks

将SolidWorks中模型文件另存为.hsf格式即可，转换后的模型导入MWorks.Sysplorer后系统显示未发生变化。

![image-20201223150748049](Conversion.assets/image-20201223150748049.png)

- 转换前

  ![image-20201223150812111](Conversion.assets/image-20201223150812111.png)

- 转换后

  ![image-20201223150824451](Conversion.assets/image-20201223150824451.png)

### Pro/E

Pro/E的图形文件自有格式为.prt，结合转换工具和三维软件SolidWorks的文件格式转换，转换前后无差异。

![image-20201223150912367](Conversion.assets/image-20201223150912367.png)

- 转换前

  ![image-20201223150936326](Conversion.assets/image-20201223150936326.png)

- 转换后

  ![image-20201223150943129](Conversion.assets/image-20201223150943129.png)

### CATIA

CATIA的图形文件自有格式为.CATPart，结合转换工具和三维软件Solidworks的文件格式转换，转换前后无差异。

![image-20201223151057524](Conversion.assets/image-20201223151057524.png)

- 转换前

  ![image-20201223151121307](Conversion.assets/image-20201223151121307.png)

- 转换后

  ![image-20201223151113014](Conversion.assets/image-20201223151113014.png)

### UG

UG的图形文件自有格式为.prt，结合转换工具的文件格式转换，转换前后无差异。

![image-20201223151305393](Conversion.assets/image-20201223151305393.png)

- 转换前

  ![image-20201223151330409](Conversion.assets/image-20201223151330409.png)

- 转换后

  ![image-20201223151336797](Conversion.assets/image-20201223151336797.png)

### 3Dmax

3Dmax中模型文件转换为MWorks可识别格式，转换后模型无变化。

![image-20201223151417336](Conversion.assets/image-20201223151417336.png)

  - 转换前

    ![image-20201223151654883](Conversion.assets/image-20201223151654883.png)

- 转换后

  ![image-20201223151701691](Conversion.assets/image-20201223151701691.png)

### Adams

  将Adams中模型直接导出为.shl格式即可，转换后的模型颜色丢失，导入MWorks后显示系统的默认颜色。

![image-20201223151742659](Conversion.assets/image-20201223151742659.png)

  - 转换前

    ![image-20201223151802969](Conversion.assets/image-20201223151802969.png)

- 转换后

  ![image-20201223151811840](Conversion.assets/image-20201223151811840.png)

### 非stl格式

1. Pro/E

   Pro/E通过公有文件格式结合转换工具TransMagic转换为MWorks支持的.hsf/hmf格式。转换后模型的曲面颜色改变。

   *注：Pro/E转换为.iv格式后经HOOPS转换为.hsf后倒入MWorks中，模型比例发生改变，其他均未变化*

   ![image-20201223152453703](Conversion.assets/image-20201223152453703.png)

   

   - 转化前

     ![image-20201223152643997](Conversion.assets/image-20201223152643997.png)

   - 装换后
   
     ![image-20201223152651958](Conversion.assets/image-20201223152651958.png)
     

2. CATIA

   CATIA通过公有文件格式结合转换工具TransMagic转换为MWorks支持的.hsf/hmf格式；转换后模型的曲面颜色改变。

   ![image-20201223152916093](Conversion.assets/image-20201223152916093.png)

   

   - 转化前

     ![image-20201223152922159](Conversion.assets/image-20201223152922159.png)

   - 装换后

     ![image-20201223152927797](Conversion.assets/image-20201223152927797.png)
   
2. UG

   UG通过公有文件格式结合转换工具TransMagic转换为MWorks支持的.hsf/hmf格式；转换后模型颜色改变。

   ![image-20201223153023524](Conversion.assets/image-20201223153023524.png)

   

   - 转化前

     ![image-20201223153030125](Conversion.assets/image-20201223153030125.png)

   - 装换后

     ![image-20201223153036205](Conversion.assets/image-20201223153036205.png)
   
2. 3Dmax

   3Dmax通过公有文件格式结合转换工具TransMagic转换为MWorks支持的.hsf/hmf格式；转换后模型颜色改变，失去透明度，曲面的光泽度变差。

   ![image-20201223153106200](Conversion.assets/image-20201223153106200.png)

   

   - 转化前

     ![image-20201223153111842](Conversion.assets/image-20201223153111842.png)

   - 装换后

     <img src="Conversion.assets/image-20201223153144927.png" alt="image-20201223153144927" style="zoom:75%;" />

### stl格式

5种三维软件可另存为或导出MWorks支持的.stl格式，转换后模型颜色丢失，曲面不光滑，某些情况下失去透明度，分辨率变低。

![image-20201223152320029](Conversion.assets/image-20201223152320029.png)

以3Dmax为例：

  - 转换前

    ![image-20201223152353313](Conversion.assets/image-20201223152353313.png)

- 转换后

  ![image-20201223152358949](Conversion.assets/image-20201223152358949.png)