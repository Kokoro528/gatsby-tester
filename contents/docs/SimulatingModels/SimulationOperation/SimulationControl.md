---
title: SimulationControl
sidebar: Docs
showTitle: true
hideAnchor: false
---
# 仿真控制

切换到**仿真**标签页，仿真控制功能按钮用于控制仿真进程的启动、暂停、停止。

![仿真控制按钮](SimulationControl.assets/仿真控制按钮.png)

- ![启动仿真](SimulationControl.assets/启动仿真.png)启动仿真

  编译当前模型生成MWorks求解器，如果成功，更新求解器并创建模型实例；最后运行求解器，生成仿真结果。

  若模型未修改，再次启动仿真，系统将运行上次生成的求解器，调用仿真设置和实例中的参数，生成新的仿真结果。

- ![暂停仿真](SimulationControl.assets/暂停仿真.png)暂停仿真
  
  暂停当前正在进行的仿真，暂停后再次点击启动仿真，系统会在暂停时刻继续向前推进仿真进度。
  
- ![停止仿真](SimulationControl.assets/停止仿真.png)停止仿真
  
  结束当前正在进行的仿真。

  