## new操作符的实现原理

### new操作符的定义

#### 使用示例（对象类型和对象实例）

new操作符可以用来创建一个用户定义的**对象类型的实例**或**具有构造函数的内置对象的实例**。（来自MDN的定义）

简而言之：**new可以创建对象实例**

使用场景：

```js
function newTest(arguments1,arguments2) {	//构造一个函数newTest
    this.arguments1 = arguments1;
    this.arguments2 = arguments2;
}

const test = new newTest('demo1','demo2')	//创建一个给定了构造函数newTest的对象实例test

console.log(test.arguments1);	//'demo1'
console.log(test.arguments2);	//'demo2'

```

### 示例2（对象属性为其他对象）

```js
function Person(name, age, sex) {
   this.name = name;
   this.age = age;
   this.sex = sex;
}

var rand = new Person("Rand McNally", 33, "M");
var ken = new Person("Ken Jones", 39, "M");

function Car(make, model, year, owner) {
   this.make = make;
   this.model = model;
   this.year = year;
   this.owner = owner;
}

var car1 = new Car("Eagle", "Talon TSi", 1993, rand);	//在owner中传入的为对象
var car2 = new Car("Nissan", "300ZX", 1992, ken);

car2.owner.name	//'Ken Jones'
```



### 原理阐述

#### new关键字进行的基本操作

1、生成一个空白的对象

2、新对象添加`__proto__`属性，把属性链接到原型

3、构造函数的`this`的上下文绑定到新对象上

4、构造函数返回的是对象，那么最终返回构造函数执行的结果；否则返回新对象

#### 手写new

```js
function myNew(fn,...args) {
    const obj = {};	 //1、生成空白的对象
    obj.__proto__ = fn.prototype;	//2、新对象添加`__proto__`属性，把属性链接到原型
    const result = fn.apply(obj,args);	//3、把构造函数fn的this绑定到新对象obj上
    return result instanceof Object ? result : obj;	//4、如果构造函数返回的是对象，则使用构造函数执行的结果。否则，返回新对象
}

function newTest(arguments1,arguments2) {	
    this.arguments1 = arguments1;
    this.arguments2 = arguments2;
}

const test = myNew(newTest,'demo1','demo2')	//使用myNew来创建新对象实例

console.log(test.arguments1);	//'demo1'
console.log(test.arguments2);	//'demo2'
```

