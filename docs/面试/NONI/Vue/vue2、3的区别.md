# Vue2和Vue3的区别

## 一、响应式原理不同

Vue2 响应式原理基于 Object.defineProperty；Vue3 响应式原理基于 Proxy。

Object.defineProperty 能够直接在一个对象上定义新的属性或修改现有的属性，并返回对象；但是它无法监听对象新增、删除的元素，对于数组的API方法也无法监听到；通常需要使用遍历的方法对每个属性进行监听，若嵌套对象则需要深层监听，会有性能问题。

```js
let obj = {};
let name = 'leo';
Object.defineProperty(obj, 'name', {
  enumerable: true,   // 可枚举（是否可通过 for...in 或 Object.keys() 进行访问）
  configurable: true,   // 可配置（是否可使用 delete 删除，是否可再次设置属性）
  // value: '',   // 任意类型的值，默认undefined
  // writable: true,   // 可重写
  get() {
    return name;
  },
  set(value) {
    name = value;
  }
});

```

Proxy Proxy 是 ES6 的新特性，通过第2个参数 handler 拦截目标对象的行为。相较于 Object.defineProperty 响应能力范围更广，可以代理所有属性。

局限性：

(1)、对象/数组的新增、删除

(2)、监测 .length 修改

(3)、Map、Set、WeakMap、WeakSet 的支持

```js
const handler = {
  get: function (obj, prop) {
    return prop in obj ? obj[prop] : 37;
  },
};

const p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined
console.log("c" in p, p.c); // false, 37
```

## 二、Composition API(组合式API)

Vue2是选项式API（Options API），而Vue3除了选项式API还支持组合式API

使用选项式API会导致一个逻辑被写在一个文件的不同位置上，如果这个逻辑需要修改时，修改的地方比较多，代码的可维护性较差。而组合式API可以将同一个逻辑的内容写在一起。

## 三、生命周期

在选项式API里，Vue2和3的生命周期没有很大的区别，vue3中beforeDestroy变成了beforeUnmount；destroyed变成了unmounted。

在组合式API中，Vue3的生命周期在原来的基础上加了一个on，并且created与beforeCreate的钩子都被setup替代了（setup先于这两个钩子执行）。

## 四、多根节点

Vue2在模板里只支持单个根节点，Vue3则支持多个根节点。

## 五、新组件Suspene、Teleport

### Suspene

Suspene组件允许程序在等待异步组件加载完成前渲染内容。例如可以在拿到数据之前先渲染加载态的页面，提高用户体验。

使用上需要包含default和fallback两个命名插槽，fallback插槽显示加载状态，当加载完异步内容后显示默认插槽的内容

```js
<tempalte>
  <suspense>
    <template #default>
      <List />
    </template>
    <template #fallback>
      <div>
        Loading...
      </div>
    </template>
  </suspense>
</template>
```

### Teleport

能够将组件内的内容移动到特定的DOM位置

```JS
<teleport :to="body" :disabled="false">
    <div>需要移动的内容</div>
</teleport>
```

1. `to`为需要移动的位置，可以是选择器也可以是DOM节点；
2. `disabled`如果为`true`，内容不进行移动，`disabled`如果为`false`, 则`Teleport`包裹的元素节点会被移动到`to`的节点下。

## 六、打包优化

在Vue3中，Tree-shaking会将未使用的API从最终的捆绑包里消除，但是Vue2的全局API暴露在Vue实例上，未使用也不会被消除。Vue3在打包上比Vue2更轻量。

- Vue.nextTick
- Vue.observable （用 Vue.reactive 替换）
- Vue.version
- Vue.compile （仅全构建）
- Vue.set （仅兼容构建）
- Vue.delete （仅兼容构建）

## 七、TS支持

Vue3是基于TypeScript写的，支持TS

## 八、虚拟DOM

Vue3 的虚拟DOM上增加了 patchFlag 字段，用于判断节点为动态还是静态

```js
<div id="app">
  <h1>vue3虚拟DOM讲解</h1>
  <p>今天天气真不错</p>
  <div>{{name}}</div>
</div>
```

渲染函数：

```js
import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from vue
 
const _withScopeId = n => (_pushScopeId(scope-id),n=n(),_popScopeId(),n)
const _hoisted_1 = { id: app }
const _hoisted_2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/_createElementVNode(h1, null, vue3虚拟DOM讲解, -1 /* HOISTED */))
const _hoisted_3 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/_createElementVNode(p, null, 今天天气真不错, -1 /* HOISTED */))
 
export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock(div, _hoisted_1, [
    _hoisted_2,
    _hoisted_3,
    _createElementVNode(div, null, _toDisplayString(_ctx.name), 1 /* TEXT */)
  ]))
}

```

字段类型情况：1 代表节点为动态文本节点，那在 diff 过程中，只需比对文本对容，无需关注 class、style等。除此之外，发现所有的静态节点（HOISTED 为 -1），都保存为一个变量进行静态提升，可在重新渲染时直接引用，无需重新创建。

```js
// patchFlags 字段类型列举
export const enum PatchFlags { 
  TEXT = 1,   // 动态文本内容
  CLASS = 1 << 1,   // 动态类名
  STYLE = 1 << 2,   // 动态样式
  PROPS = 1 << 3,   // 动态属性，不包含类名和样式
  FULL_PROPS = 1 << 4,   // 具有动态 key 属性，当 key 改变，需要进行完整的 diff 比较
  HYDRATE_EVENTS = 1 << 5,   // 带有监听事件的节点
  STABLE_FRAGMENT = 1 << 6,   // 不会改变子节点顺序的 fragment
  KEYED_FRAGMENT = 1 << 7,   // 带有 key 属性的 fragment 或部分子节点
  UNKEYED_FRAGMENT = 1 << 8,   // 子节点没有 key 的fragment
  NEED_PATCH = 1 << 9,   // 只会进行非 props 的比较
  DYNAMIC_SLOTS = 1 << 10,   // 动态的插槽
  HOISTED = -1,   // 静态节点，diff阶段忽略其子节点
  BAIL = -2   // 代表 diff 应该结束
}
```

## 九、事件缓存

Vue3 的`cacheHandler`可在第一次渲染后缓存我们的事件。相比于 Vue2 无需每次渲染都传递一个新函数。

```js
<div id="app">
  <h1>vue3事件缓存讲解</h1>
  <p>今天天气真不错</p>
  <div>{{name}}</div>
  <span onCLick=() => {}><span>
</div>
```

渲染函数

```js
import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from vue
 
const _withScopeId = n => (_pushScopeId(scope-id),n=n(),_popScopeId(),n)
const _hoisted_1 = { id: app }
const _hoisted_2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/_createElementVNode(h1, null, vue3事件缓存讲解, -1 /* HOISTED */))
const _hoisted_3 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/_createElementVNode(p, null, 今天天气真不错, -1 /* HOISTED */))
const _hoisted_4 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/_createElementVNode(span, { onCLick: () => {} }, [
  /*#__PURE__*/_createElementVNode(span)
], -1 /* HOISTED */))
 
export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock(div, _hoisted_1, [
    _hoisted_2,
    _hoisted_3,
    _createElementVNode(div, null, _toDisplayString(_ctx.name), 1 /* TEXT */),
    _hoisted_4
  ]))
}
```

观察以上渲染函数，你会发现 click 事件节点为静态节点（HOISTED 为 -1），即不需要每次重新渲染。

## 十、Diff算法优化

patchFlag区分静态节点、动态节点类型，减少了比对，优化了Diff

```js
function patchChildren(n1, n2, container, parentAnchor, parentComponent, parentSuspense, isSVG, optimized) {
  // 获取新老孩子节点
  const c1 = n1 && n1.children
  const c2 = n2.children
  const prevShapeFlag = n1 ? n1.shapeFlag : 0
  const { patchFlag, shapeFlag } = n2
  
  // 处理 patchFlag 大于 0 
  if(patchFlag > 0) {
    if(patchFlag && PatchFlags.KEYED_FRAGMENT) {
      // 存在 key
      patchKeyedChildren()
      return
    } els if(patchFlag && PatchFlags.UNKEYED_FRAGMENT) {
      // 不存在 key
      patchUnkeyedChildren()
      return
    }
  }
  
  // 匹配是文本节点（静态）：移除老节点，设置文本节点
  if(shapeFlag && ShapeFlags.TEXT_CHILDREN) {
    if (prevShapeFlag & ShapeFlags.ARRAY_CHILDREN) {
      unmountChildren(c1 as VNode[], parentComponent, parentSuspense)
    }
    if (c2 !== c1) {
      hostSetElementText(container, c2 as string)
    }
  } else {
    // 匹配新老 Vnode 是数组，则全量比较；否则移除当前所有的节点
    if (prevShapeFlag & ShapeFlags.ARRAY_CHILDREN) {
      if (shapeFlag & ShapeFlags.ARRAY_CHILDREN) {
        patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense,...)
      } else {
        unmountChildren(c1 as VNode[], parentComponent, parentSuspense, true)
      }
    } else {
      
      if(prevShapeFlag & ShapeFlags.TEXT_CHILDREN) {
        hostSetElementText(container, '')
      } 
      if (shapeFlag & ShapeFlags.ARRAY_CHILDREN) {
        mountChildren(c2 as VNodeArrayChildren, container,anchor,parentComponent,...)
      }
    }
  }
}
```

patchUnkeyedChildren 源码

```js
function patchUnkeyedChildren(c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, optimized) {
  c1 = c1 || EMPTY_ARR
  c2 = c2 || EMPTY_ARR
  const oldLength = c1.length
  const newLength = c2.length
  const commonLength = Math.min(oldLength, newLength)
  let i
  for(i = 0; i < commonLength; i++) {
    // 如果新 Vnode 已经挂载，则直接 clone 一份，否则新建一个节点
    const nextChild = (c2[i] = optimized ? cloneIfMounted(c2[i] as Vnode)) : normalizeVnode(c2[i])
    patch()
  }
  if(oldLength > newLength) {
    // 移除多余的节点
    unmountedChildren()
  } else {
    // 创建新的节点
    mountChildren()
  }
 
}
```
