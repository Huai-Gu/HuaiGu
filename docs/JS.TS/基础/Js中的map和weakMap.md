## Map 构造函数
```js
    const map =new Map()
    map.set("huaigu",{
        name:"tomao"
    })
    console.log(map.get("huaigu"))
```
clear()	删除 Map 中的所有元素。
delete()	删除由键指定的元素。
has()	如果键存在，则返回 true。
forEach()	为每个键/值对调用回调。

## Object和Map的区别

1. Object无法使用非字符串值作为键名，但Map的键名可以是任意类型

2. 可直接遍历  
   因为Map是键值对集合，可以直接用for..of 或foreach遍历


::: tip
for in的缺陷
遍历所有可枚举属性包括原型上的属性
键值为string类型，增加了类型转换的开销
:::


```js
var arr =[1,2,3]
Array.prototype.a="3"
for(i in arr)
{
    console.log(i)
}
// 如果不想访问原型上的属性可以用 hasOwnProperty判断是不是该对象的实例属性
```

## weakMap

WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。
且weakMap 所引用的对象不计入  [垃圾回收]()


