---
title: Codedescription
sidebar: Docs
showTitle: true
hideAnchor: false
---
# 代码说明

按照上一章节进行仿真结果自动呈现的设置后，模型中添加如下代码：

```
annotation (__MWorks(ResultViewerManager(resultViewers = {
    ResultViewer(name = "auto_example1", executeTrigger = executeTrigger.None, commands = {
    CreatePlot(id = 1, position = [20, 20, 600, 400], y = ["x", "y"], x_display_unit = "s", legends = ["x", "y"], legend_layout = 1), 
    CreatePlot(id = 2, position = [635, 23, 600, 400], x = "x", y = ["x", "y"], legends = ["x", "y"], legend_layout = 1)}), 
    ResultViewer(name = "auto_example2", executeTrigger = executeTrigger.SimulationStarted, commands = {
    CreatePlot(id = 3, position = [20, 20, 600, 400], y = ["x", "y"], x_display_unit = "s", legends = ["x", "y"], legend_layout = 1)}), 
    ResultViewer(name = "auto_example3", executeTrigger = executeTrigger.SimulationFinished, commands = {
    CreatePlot(id = 4, position = [635, 23, 600, 400], x = "x", y = ["x", "y"], legends = ["x", "y"], legend_layout = 1)})})));
```

代码各部分含义如下：

1. ResultViewerManager(/* 结果查看器内容*/)

   定义结果查看管理器

2. resultViewers = {/* 结果查看组内容*/}

   定义结果查看组内容，可定义多个结果查看组ResultViewer() ，在仿真实例上呈现所有可用的结果查看组，每个结果查看组可以被用户反复执行。

3. ResultViewer (/* 单个结果查看组内容*/)

   定义单个结果查看组内容，在指定时间自动执行Python 命令。

4. name = "/* 结果查看组名称*/"

   定义结果查看组名称；名称可自定义设置，缺省名默认为commands 的命令内容，仿真后显示在仿真浏览器：


5. executeTrigger = /*python 命令执行节点*/

   定义Python 命令执行的时间：
   -  executeTrigger = executeTrigger.None ：不执行命令
   -  executeTrigger = executeTrigger. PreSimulation ：仿真前执行命令
   -  executeTrigger = executeTrigger.PostSimulation ：仿真后执行命令

   缺省默认为仿真前执行命令。

6. commands = /*python 命令*/

   定义自动执行Python 命令；