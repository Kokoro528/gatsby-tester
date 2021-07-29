---
title: FrequencyEstimation
sidebar: Docs
showTitle: true
showAnchor: true
---
# 频率估算

MWorks.Sysplorer 频率估算工具适用于针对一般模型（Modelica 模型、FMU 模型、黑箱模型等）进行频率特性估算，可以给出系统频率响应图并获取系统频域相关的属性，从而支持后续控制回路的设计。

频率估算工具在系统稳态工作点（Steady-State Operating Points ）处，针对待估算的模型通过一组由不同频率正弦信号构造而成的Sinestream 信号进行激励，获取系统在时域上的输出。

![频率估算流程](FrequencyEstimation.assets/image001-1600681731578.png)

针对系统输出信号进行处理，包括滤波、采样、切片等，获得系统的稳态输出信号，根据相应的算法对系统频率特性进行估算，最终估算结果可以通过典型的频率特性图（如Bode图）进行可视化呈现。

| 主题                                                         | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **[功能介绍](#/forthExample/FrequencyEstimation/Introduction)** | 频率估算功能介绍                                             |
| **[示例演示](#/forthExample/FrequencyEstimation/Samples)**   | 以示例模型Frequency_estimation为例介绍频率估算的具体使用流程 |

