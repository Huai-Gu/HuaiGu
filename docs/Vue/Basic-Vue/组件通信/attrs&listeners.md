# attrs/listeners

## 一、$attrs的使用
+ 当项目中有多层组件传参可以使用$attrs，可以使代码更加美观，更加简洁，维护代码的时候更方便。
+ 了解：如果给组件传递的数据，组件不使用props接收，那么这些数据将作为组件的HTML元素的特性，这些特性绑定在组件的HTML根元素上
+ <strong style="color:red">inheritAttrs: false</strong>的含义是不希望本组件的根元素继承父组件的attribute，同时父组件传过来的属性（没有被子组件的props接收的属性），也不会显示在子组件的dom元素上，但是在组件里可以通过其$attrs可以获取到没有使用的注册属性, ``inheritAttrs: false``是不会影响 style 和 class 的绑定

### 使用场景:  A 组件与 C 组件之间的通信： （跨多级的组件嵌套关系）
![alt](/abc%E9%80%8F%E4%BC%A0.png)

### 请看案例

1. 父组件（father.vue），给子组件关联数据
```vue
<template>
  <div>
    <!-- 父亲组件 -->
    <son :fatherData="fatherData"></son>
  </div>
</template> 

<script>
import son from './son.vue'
export default {
  components: { son },
  data() {
    return {
      fatherData:{name:"我是爸爸"}
    }
  },
}
```
2. 儿子组件（Child.vue），中间层，作为父组件和孙子组件的传递中介，在儿子组件中给孙子组件添加v-bind="$attrs"，这样孙子组件才能接收到数据

```vue
<template>
  <div>
    <!-- 儿子组件 -->
    <grandson v-bind="$attrs" />
  </div>
</template>

<script>
import grandson from "./grandSon.vue"
export default {
  components: { grandson },
  // 继承所有父组件的内容
  inheritAttrs: true,
}
</script>
```

3. 孙子组件（grandson），在孙子组件中一定要使用props接收从父组件传递过来的数据
```vue
<template>
  <div>
    孙子组件接受父亲的数据：
    {{fatherData.name}}
  </div>
</template>

<script>
export default {
  // 不想继承所有父组件的内容,同时也不在组件根元素dom上显示属性
  inheritAttrs: false,
  // 在本组件中需要接收从父组件传递过来的数据，注意props里的参数名称不能改变，必须和父组件传递过来的是一样的
  props: {
    fatherData: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
};
</script>
```

### 运行结果：
![alt](/attrs.png)

### 总结
如果给子组件传递的数据，子组件不使用props接收，那么这些数据将作为子组件的特性，这些特性绑定在组件的HTML根元素上，在vue2.40版本之后，可以通过inheritAttrs = false 来控制这些特性是否显示在dom元素上 


## 二、$listeners

#### $listeners属性，它是一个对象，里面包含了作用在这个组件上的所有监听器，你就可以配合 v-on="$listeners" 将所有的事件监听器指向这个组件的某个特定的子元素。（相当于子组件继承父组件的事件）

#### 话不多说，请看案例

```vue
<template>
  <div>
    <!-- 父亲组件 -->
    <!-- 此处监听了两个事件，可以在son组件或者grandson组件中直接触发 -->
    <son  @method1="method1"  @method2="method2"></son>
  </div>
</template> 

<script>
import son from './son.vue'
export default {
  components: { son },
  methods:{
    method1(msg1){
      console.log(`${msg1} is running`);
    },
    method2(msg2){
      console.log(`${msg2} is running`);
    },
  }
}
</script>
```

```vue
<template>
  <div>
    <!-- 儿子组件 -->
    <!-- 使用 v-on 给孙子组件绑定了$listeners 属性 -->
    <grandson  v-on="$listeners"/>
  </div>
</template>

<script>
import grandson from "./grandSon.vue"
export default {
  components: { grandson },
  mounted() {
    this.$emit("method1","son组件");
  },
}
</script>
```


```vue
<script>
// grandson孙子组件
export default {
  mounted() {
    this.$emit("method2","grandson组件");
  },
};
</script>
```

### 结论:通过$listeners，我们可以实现从孙子组件把事件传到父子组件，不需要通过emit逐层传递
效果截图：![alt](/$listeners.png)

