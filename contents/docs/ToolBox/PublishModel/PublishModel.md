---
title: PublishModel
sidebar: Docs
showTitle: true
hideAnchor: false
---
# 模型发布

使用MWorks.Sysplorer 开发的仿真模型和模型库以开放语言规范Modelica 进行描述，并采用.mo 的文本格式进行存储。MWorks.Sysplorer 提供多种可视化的形式支持进行模型细节浏览，例如组件视图、Modelica 模型文本等，然而，Modelica 模型库作为一种具有知识产权的工业软件，在开发过程中要耗费大量的资源，其中涵盖丰富的专业相关的知识与经验，甚至涉及开发者独有的且不希望公开的核心数据。

MWorks.Sysplorer 模型发布支持对Modelica 模型库进行有效的保护，在允许正常使用的同时隐藏必要的模型细节。

MWorks.Sysplorer 采用支持多种粒度、多种层次的模型保护级别，对模型使用、代码浏览、代码复制等显示和操作场景进行必要的控制。模型保护级别由模型库开发者指定，MWorks.Sysplorer 确保外部用户不能对其进行非法访问或篡改。

| 主题                                                         | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **[界面设置模型保护级别](#/forthExample/PublishModel/InterfaceSetEncryptLevel)** | 通过界面设置模型保护级别                                     |
| **[文本设置模型保护级别注解](#/forthExample/PublishModel/EncryptLevelAnnotation)** | 通过文本注解设置模型保护级别                                 |
| **[模型加密规则](#/forthExample/PublishModel/ModelEncryptRules)** | 模型的保护级别由自身设置确定，但需要满足约束，约束以模型文件为单位 |
| **[示例演示](#/forthExample/PublishModel/Samples)**          | 以一个简单的示例，说明如何正确发布加密模型并使用             |

