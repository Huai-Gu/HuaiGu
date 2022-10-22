## 关于 new 操作符

```js
function realnew () {
  let obj = {}
  let Con = Array.prototype.shift.call(arguments)
  console.log(Con)
  obj.__proto__ = Con.prototype
  // 绑定this
  Con.apply(obj, arguments)
  return obj
}
let zhangsan = realnew(Person, 'zhangsan', 19)
zhangsan.say()
```

## bind,call,apply 的区别

bind:obj.function.bind(obj) 将函数中的 this 指向 obj

```js
Function.prototype.MyBind = function (context) {
  if (typeof this !== 'function') {
    throw TypeError('函数调用错误')
  }
  //获取参数
  const args = [...arguments].slice(1)
  fn = this
  return fn.apply(
    this instanceof Fn ? new fn(...arguments) : context,
    args.concat(...arguments)
  )
}
let obj = {
  name: 'z',
  say: function () {
    console.log(this)
  }
}
let obj2 = {
  name: '2222'
}
this.fn = obj.say.bind(obj2)
this.fn() // 模拟react 中的bind
// 三者都可以改变函数的this对象指向
```

apply:接收一个数组 第一个参数为 null 或者 undefined 默认指向 window

call: 同样第一个参数为 this 的指向 临时改变 this 指向一次

```js
Function.prototype.mycall = function (context) {
// 获取传送进来的对象 context
var context = context || window
// 为 context 定义一个属性 fn 方法，赋值为 this,改变 this 指向，当前 this 指向
context.fn = this
// 定义一个数组，获取传递进来的参数
var args = []
for (var i = 1, len = arguments.length; i < len; i++) {
args.push('arguments[' + i + ']')
// 重点：这块使用字符串拼接后并 push 进数组，
// 当前 args = ['arguments[0]','arguments[1]']
// 因为如果直接 push 进数组，则 args = ['jxd',18],上下文未定义会报错
}
// 因此这儿使用 eval 函数来执行，因为当执行函数作为函数参数的时候
// eval 会调用 toString()方法,将['arguments[0]','arguments[1]']转为
// 'arguments[0]','arguments[1]'
eval('context.fn(' + args +')
// 执行完后删除 fn 属性，保持函数的清洁
delete context.fn

}
var foo = {
value:1
}
function bar(name,age) {
console.log(name + '今年' + age)
}
// 调用
bar.call2(foo,'jxd',18)

```

        三者的区别是apply接受一个数组，而call接受一个参数列表
        bind是永久改变this的指向 bind可以多次传入

        bind的实现

三者第一个参数都是 this 要指向的对象，如果如果没有这个参数或参数为 undefined 或 null，则默认指向全局 window
三者都可以传参，但是 apply 是数组，而 call 是参数列表，且 apply 和 call 是一次性传入参数，而 bind 可以分为多次传入
bind 是返回绑定 this 之后的函数，apply、call 则是立即执行
