## 变量提升
```js
foo();  // foo2
var foo = function() {
    console.log('foo1');
}

foo();  // foo1，foo重新赋值

function foo() {
    console.log('foo2');
}

foo(); // foo1
```


### 执行栈

```js

var a = {n: 1};
var b = a;
a.x = a = {n: 2};

a.x 	// 这时 a.x 的值是多少
b.x 	// 这时 b.x 的值是多少

// undefined {n:2}
```

连等操作符执行顺序从过至左

1. a={n:2}

2. 赋值给a.x 但没有该x属性，所以在原对象上加上该属性，该即b指向的对象
