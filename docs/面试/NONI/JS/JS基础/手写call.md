### **call()**

call()能够改变this指向，执行当前的函数。调用call的函数挂载到传入的第一个参数上，再通过该参数对象来调用‘调用call的函数’，并且能够得到传入其他参数后执行得到的结果。

例如：Fn.call(context, a,b)，函数Fn挂载到context对象上，通过context对象调用函数Fn，并且能够得到传入参数a,b后执行得到的结果

### **手写**
```js
Function.prototype.myCall = function (context) {
  if (context === null || context === undefined) {
    context = window;
  }

  // 将 context 转换为对象
  let type = typeof context;
  switch (type) {
    case "string":
      context = new String(context);
      break;
    case "boolean":
      context = new Boolean(context);
      break;
    case "number":
      context = new Number(context);
      break;
  }

  // 生成唯一的属性名，避免与已有属性冲突
  let key = Date.now().toString(36);
  //为context创建一个临时属性，指向调用它的函数
  context[key] = this;

  // 获取参数并执行函数
  let args = Array.from(arguments).slice(1);
  //模拟在指定上下文中调用函数，并获取函数执行的结果。
  let result = context[key](...args);

  // 删除临时属性
  delete context[key];

  return result;
};

var obj = {
  name: "lucky",
  fn: function () {
    console.log("hello");
  },
};

function fn1(a, b) {
  console.log(this, a + b);
  return "123";
}

console.log(fn1.call(obj, 1, 2));

fn1.myCall(obj, 1, 2);
fn1.myCall(null, 1, 2);
fn1.myCall(undefined, 1, 2);
fn1.myCall(1, 1, 2);
fn1.myCall("str", 1, 2);
fn1.myCall(true, 1, 2);
 
```

### **简单版本**

```js
Function.prototype.myCall = function(context){
  context.fn = this
  context.fn();
  delete context.fn
}

```