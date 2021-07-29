# 文本设置模型保护级别注解

以模型设置保护级别为“Access.packageText ”为例，Modelica 文本如下所示。

```
package ExampleLib
  annotation ( Protection(access = Access.packageText));
  end ExampleLib;
```

也就是说，若模型的保护级别设置为Access.xxxx ，则在模型中生成对应的annotation 语句：

```
  annotation( Protection( access = Access.xxxx ));
```

