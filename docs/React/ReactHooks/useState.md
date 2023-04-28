## useState

实际上就是为你的组件创建数据的状态,传入的参数为该数据的初始状态

:::warning
严格模式下 react 会 render 两次已确认组件是纯函数
:::

```js
const initNum = 0;
const [num, setNum] = useState(initNum); // 解构
```

## setNum

纯函数，且没有返回值

### 当 num 为对象时，应该去替换对象

```js
const [me, setMe] = useState({
  name: "zyh",
  age: 19,
});

return (
  <>
    <button
      onClick={(e) =>
        setMe({
          ...me, // 这里name会覆盖me里面的name 对象的扩展运算符
          age: 20,
        })
      }
    >
      changeAge
    </button>
  </>
);
```

### 初始值可以为函数也可以为值

```jsx
// Error
const [me, setMe] = useState(
  (function () {
    console.log("执行");
    return {
      name: "zyh",
      age: 19,
    };
  })()
);
console.log({ ...me, name: "ttt" });
return (
  <>
    <h1>{me.age}</h1>
    <h1>{me.name}</h1>

    <button
      onClick={(e) =>
        setMe({
          ...me,
          age: 20,
        })
      }
    >
      changeAge
    </button>
  </>
);
```

传入的应该是一个函数而不是一个函数的调用,上面是错误的
正确的应该是

```jsx
const [me, setMe] = useState(function () {
  console.log("执行");
  return {
    name: "zyh",
    age: 19,
  };
});
```

### 使用 key 重置

```jsx
import { useState } from "react";
function App() {
  const [text, setText] = useState(0);
  return (
    <>
      <Child key={text} />
      <button
        onClick={(e) => {
          setText(text + 1);
        }}
      ></button>
    </>
  );
}

function Child({ text }) {
  const [v, setV] = useState("");
  return (
    <>
      <input type="text" value={v} onChange={(e) => setV(e.target.value)} />
    </>
  );
}
```
