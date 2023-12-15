# updated、beforeUpdate钩子的一些理解

## 钩子基础

beforeUpdate触发：在页面更新渲染完成后，DOM树更新前被调用

updated触发：在页面DOM树更新后被调用。（父组件的更新钩子将在其子组件的更新钩子之后调用）

> 需要注意的是如果只是改变了DOM中的数据（data），未对页面造成任何影响，就不会触发beforeUpdate,updated方法。

## 在**updated**里改变数据会引发该回调的循环吗？

若在updated中，字段赋的值为固定值，第一次赋值会触发updated、beforeUpdate；

如果是自增这种，程序就会陷入死循环。