# flex 
    Webkit 内核的浏览器，必须加上-webkit前缀。

::: tip
flex 的核心的概念就是 容器 和 轴。容器包括外层的 父容器 和内层的 子容器，轴包括 主轴 和 交叉轴
:::


 ## 设置子容器沿主轴排列：justify-content

```css
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

可使用gap 或者 margin 调整间距
# grid 

```css
div {
  display: grid;
}
div {
  display: inline-grid;
}
```

::: warning 
注意，设为网格布局以后，容器子元素（项目）的float、display: inline-block、display: table-cell、vertical-align和column-*等设置都将失效。
:::

```css

.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}
// repeat 

.container {
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(3, 33.33%);
}
```

#### auto-fill 

有时，单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充。

#### fr 关键字

为了方便表示比例关系，网格布局提供了fr关键字（fraction 的缩写，意为"片段"）。如果两列的宽度分别为1fr和2fr，就表示后者是前者的两倍。


###### 间隔 
grid-row-gap属性设置行与行的间隔（行间距），grid-column-gap属性设置列与列的间隔（列间距）。