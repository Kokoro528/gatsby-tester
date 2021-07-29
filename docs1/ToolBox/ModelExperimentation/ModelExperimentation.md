# 模型试验

很多情况下，有必要使用不同的参数集来运行仿真模型，通过参数变化对输出变量的影响来观察物理系统的行为，进而深入理解系统的内部机理。

MWorks.Sysplorer模型试验工具以一种方便有效的方式支持用户进行这种参数研究，提供参数选择与赋值界面建立参数集，并且自动调用求解器得到批次结果。

模型试验工具具有以下特点：

1. 提供均匀、非均匀、随机分布等参数变化方式，模拟不同的使用场景。

2. 支持查看变量的时变曲线以及其他多种形式的特性曲线。

3. 随着参数变化自动调用求解器，输出不同参数对应的结果。

4.  根据需要生成2D曲线、3D曲面、直方图等。

<img src="ModelExperimentation.assets/image001-1600681784508.png" alt="模型试验" style="zoom: 50%;" />

| 主题                                                         | 说明                                 |
| ------------------------------------------------------------ | ------------------------------------ |
| **[使用前准备](#/forthExample/ModelExperimentation/Preparation)** | 使用模型试验功能前需要进行的准备工作 |
| **[添加输入和输出集](#/forthExample/ModelExperimentation/AddIOSets)** | 为当前模型试验添加输入集和输出集     |
| **[批量仿真](#/forthExample/ModelExperimentation/BatchSimulation)** | 对同一模型进行批量仿真               |
| **[试验设计](#/forthExample/ModelExperimentation/TestDesign)** | 模型按照设计的参数进行仿真           |
| **[蒙特卡洛分析](#/forthExample/ModelExperimentation/MonteCarloAnalysis)** | 对模型进行蒙特卡洛分析               |
| **[保存试验](#/forthExample/ModelExperimentation/SaveTest)** | 将当前的试验保存                     |

