## useRef

useRef 更改引用后不会引发重新渲染

```jsx
const ref = useRef(0);
console.log(ref);
return (
  <>
    <h1>{ref.current}</h1>
    <button onClick={() => ref.current++}></button>
  </>
);
// 不会渲染 但是修改后的hmr会更新上一次的结果
```

## 使用 ref 操作 DOM

```jsx
  <div ref={refd}>
  </div>
  <button onClick={()=>console.log(refd.current)}></button>
```

## 初始化 ref

```jsx
function Video() {
  const playerRef = useRef(null);
  if (playerRef.current === null) {
    playerRef.current = new VideoPlayer();
  }
}
```

## 当想获得组件的引用时


[react](https://react.dev/reference/react/useRef#i-cant-get-a-ref-to-a-custom-component)
