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
  context[key] = this;

  // 获取参数并执行函数
  let args = Array.from(arguments).slice(1);
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