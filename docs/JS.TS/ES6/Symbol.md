## 关于Symbol
在对象上设置Symbol
1. 使用 []

2. 使用Object.defineProperty

```js
let mySymbol = Symbol();
Object.defineProperty(a, mySymbol, { value: 'Hello!' });
```

:::warning
不能使用点运算符访问
```js
    Object.defineProperty(a, mySymbol, { value: 'Hello!' });
    a.mySymbol // 报错
```
:::


[那么点运算符和[]有什么区别呢？](./运算符)



而我们要写的Iterator则是内置的Symbol值
对象的Symbol.iterator属性，指向该对象的默认遍历器方法。
```js
const myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
[...myIterable] // [1, 2, 3]

```


