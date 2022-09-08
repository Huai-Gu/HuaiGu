# provide/inject

## 使用前言
在父子组件传递数据时，通常使用的是 props 和 emit。当父传子时，使用的是 props，如果是父组件传孙组件时，就需要先传给子组件，子组件再传给孙组件，如果多个子组件或多个孙组件使用时，就需要传很多次，会很麻烦。

像这种情况，可以使用 provide 和 inject 解决这种问题，不论组件嵌套多深，父组件都可以为所有子组件或孙组件提供数据，父组件使用 provide 提供数据，子组件或孙组件 inject 注入数据。

<h2 style="color:red">注意：provide 和 inject 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的 property 还是可响应的。</h2>

## 基本知识
provide ：一个对象或返回一个对象的函数

inject ：一个字符串数组，或 一个对象，对象的 [key] 是本地的绑定名

## 一、Vue2 的 provide / inject 使用
1. 用provide ：是一个对象，里面是属性和值。如：
```js
provide:{
  info:"值"
}
```

2. 如果 provide 需要使用 data 内的数据时，这样写就会报错。访问组件实例 property 时，需要将 provide 转换为返回对象的函数。
```js
provide(){
  return {info: this.msg}
}
```

3. inject 可以是一个字符串数组。如：
```js
inject: [ 'info' ]
```
4. inject也可以是一个对象，对象的 key 是本地的绑定名，value 是：在可用的注入内容中搜索用的 key (字符串或 Symbol)，或
一个对象，该对象的：
  + from property 是在可用的注入内容中搜索用的 key (字符串或 Symbol)
  + default property 是降级情况下使用的 value

>实例：
```js
// 父级组件提供 'foo'
var Provider = {
  provide: {
    foo: 'bar'
  },
  // ...
}

// 子组件注入 'foo'
var Child = {
  inject: ['foo'],
  created () {
    console.log(this.foo) // => "bar"
  }
  // ...
}
```

>利用 ES2015 Symbols、函数 provide 和对象 inject：
```js
const s = Symbol()

const Provider = {
  provide () {
    return {
      [s]: 'foo'
    }
  }
}

const Child = {
  inject: { s },
  // ...
}
```

><strong>低于Vue 2.2.1时，注入的值会在 props 和 data 初始化之后得到。</strong>

```js
const Child = {
  inject: ['foo'],
  props: {
    bar: {
      default () {
        return this.foo
      }
    }
  }
}
```

> 使用一个注入的值作为数据入口：
```js
const Child = {
  inject: ['foo'],
  data () {
    return {
      bar: this.foo
    }
  }
}
```
><strong>在 2.5.0+ 的注入可以通过设置默认值使其变成可选项：</strong>


```js
const Child = {
  inject: {
    foo: { default: 'foo' }
  }
}
```
>如果它需要从一个不同名字的 property 注入，则使用 from 来表示其源 property：
```js
const Child = {
  inject: {
    foo: {
      from: 'bar',
      default: 'foo'
    }
  }
}
```
>与 prop 的默认值类似，你需要对非原始值使用一个工厂方法：
```js
const Child = {
  inject: {
    foo: {
      from: 'bar',
      default: () => [1, 2, 3]
    }
  }
}
```