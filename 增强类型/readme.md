在npm中，有许多老的库都是用JavaScript写的，如果在ts中想要安全的使用这些库（使用ts的特性，类型检测等），我们需要通过特定的方式进行处理。

## 声明

#### declare 变量
通过declare关键字，声明全局的变量、方法、类、对象。

#### declare函数
使用declare关键字时，不需要编写声明的变量、函数、类的具体实现（因为变量、函数、类在其他库中已经实现了），只需要声明其类型即可

#### declare类

#### declare枚举

#### declare模块

#### declare文件

#### declare namespace
不同于声明模块，命名空间一般用来表示具有很多子属性或者方法的全局对象