### promise

Promise 构造函数需要传的参数就是一个 executor 构造器函数。executor 里需要传 resolve 和 reject 函数，用于改变 Promise 实例的状态

```js
const promise = new Promise(executor)
// 需要传入构造器函数
//定义状态
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function Promise (executor) {
  const that = this
  this.status = PENDING
  this.data = undefined
  this.callbacks = []

  function resolve (value) {
    if (that.status !== PENDING) return
    // 不可再次更改
    that.status = FULFILLED
    that.data = value

    if (that.callbacks.length > 0) {
      // 推入异步微任务执行
      queueMicrotask(() => {
        that.callbacks.forEach(cb => cb.onResolve(that.data))
      })
    }
  }
  function reject (reason) {
    if (that.status !== PENDING) return
    that.status = REJECTED
    that.data = reason
    if (that.callbacks.length > 0) {
      queueMicrotask(() => {
        that.callbacks.forEach(cb => cb.onResolve(that.data))
      })
    }
  }
  // executor里面需要传入resolve和reject函数
  executor(resolve, reject)
}
```

### promise.then

返回值: 一个 promise 对象
且该方法应该添加到 promise 的原型上

```js
Promise.prototype.then = function (onResolve, onReject) {
  // 参数为成功的回调函数和失败的回调函数
  // 对传入的参数类型进行判断
  onResolve = typeof onResolve === 'function' ? onResolve : value => value
  onReject =
    typeof onReject === 'function'
      ? onReject
      : reason => {
          throw { reason }
        }
  const that = this
  return new Promise((resolve, reject) => {
    // 防止返回的不是promise的对象
    function handle (callback) {
      //1.若回调函数执行抛出异常则捕获异常
      try {
        const res = callback(that.data) //接收成功回调的返回值
        //判断返回值类型并处理
        if (res instanceof Promise) {
          //3.根据res的状态决定return的Promise状态
          res.then(resolve, reject)
        } else {
          //2.非Promise返回值直接返回
          resolve(res)
        }
      } catch (error) {
        reject(error)
      }
    }
    if (that.status === PENDING) {
      that.callbacks.push({
        onResolve (value) {
          handle(onResolve)
        },
        onReject (reason) {
          handle(onReject)
        }
      })
    } else if (that.status === FULFILLED) {
      // 直接推入微任务队列执行即可
      queueMicrotask(() => {
        handle(onResolve)
      })
    } else {
      queueMicrotask(() => {
        handle(onReject)
      })
    }
  })
}
```
