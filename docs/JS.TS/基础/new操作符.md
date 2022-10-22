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

apply:接收一个数组 第一个参数为 null 或者 undefined 默认指向 window

call: 同样第一个参数为 this 的指向 临时改变 this 指向一次

        三者的区别是apply接受一个数组，而call接受一个参数列表
        bind是永久改变this的指向 bind可以多次传入

        bind的实现

```js
        Function.prototype.MyBind=function(context)
        {
            if(typeof this !=="function")
            {
                throw TypeError("函数调用错误")
            }
            //获取参数
            const args = [...arguments].slice(1)
            fn=this
            return fn.apply(this instanceof Fn ? new fn(...arguments) : context,
             args.concat(...arguments));
        }
        let obj={
            name:'z',
            say:function(){
                console.log(this);
            }
        }
        let obj2={
            name:'2222',

        }
         this.fn=obj.say.bind(obj2)
         this.fn() 模拟react 中的bind
        <!-- 三者都可以改变函数的this对象指向 -->
```
三者第一个参数都是 this 要指向的对象，如果如果没有这个参数或参数为 undefined 或 null，则默认指向全局 window
三者都可以传参，但是 apply 是数组，而 call 是参数列表，且 apply 和 call 是一次性传入参数，而 bind 可以分为多次传入
bind 是返回绑定 this 之后的函数，apply、call 则是立即执行
