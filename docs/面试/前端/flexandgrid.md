# flex 
    Webkit 内核的浏览器，必须加上-webkit前缀。

::: tip
flex 的核心的概念就是 容器 和 轴。容器包括外层的 父容器 和内层的 子容器，轴包括 主轴 和 交叉轴
:::


 ## 设置子容器沿主轴排列：justify-content

```js
flex-start：起始端对齐
flex-end：末尾段对齐
center：居中对齐
space-around：子容器沿主轴均匀分布
space-between：子容器沿主轴均匀分布，位于首尾两端的子容器与父容器相切
```

## 设置子容器如何沿交叉轴排列：align-items

```js
stretch：子容器沿交叉轴方向的尺寸拉伸至与父容器一致。
baseline：基线对齐，这里的 baseline 默认是指首行文字，即 first baseline，所有子容器向基线对齐，交叉轴起点到元素基线距离最大的子容器将会与交叉轴起始端相切以确定基线。
center：居中对齐
flex-end：末尾段对齐
flex-start：起始端对齐

```

单独设置子容器如何沿交叉轴排列：align-self


## flex-grow属性 flex-shrink
flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大



# grid 

