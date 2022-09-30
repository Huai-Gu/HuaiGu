# attrs/listeners

## 一、$attrs介绍
+ 当项目中有多层组件传参可以使用$attrs，可以使代码更加美观，更加简洁，维护代码的时候更方便。
+ 了解：如果给组件传递的数据，组件不使用props接收，那么这些数据将作为组件的HTML元素的特性，这些特性绑定在组件的HTML根元素上
+ <strong style="color:red">inheritAttrs: false</strong>的含义是不希望本组件的根元素继承父组件的attribute，同时父组件传过来的属性（没有被子组件的props接收的属性），也不会显示在子组件的dom元素上，但是在组件里可以通过其$attrs可以获取到没有使用的注册属性, ``inheritAttrs: false``是不会影响 style 和 class 的绑定

### 使用场景:  A 组件与 C 组件之间的通信： （跨多级的组件嵌套关系）
![alt](/abc%E9%80%8F%E4%BC%A0.png)



## 二、$listeners介绍

#### $listeners属性，它是一个对象，里面包含了作用在这个组件上的所有监听器，你就可以配合 v-on="$listeners" 将所有的事件监听器指向这个组件的某个特定的子元素。（相当于子组件继承父组件的事件）

## 三、attrs和listeners的使用场景

:::tip
  $attrs/$listeners一般用于对组件的二次封装，实现功能扩展
:::

### 需求：对element-ui的button组件实现增加鼠标悬停提示

HintButton为el-button的二次封装
```vue
<template>
  <div>
    <h2>自定义带Hover提示的按钮</h2>
    <!-- 二次封装的HintButton按钮的时候，把el-button需要的数据传递过去 -->
    <!-- title为鼠标悬停提示内容 -->
     <HintButton type="success" icon="el-icon-plus" title="我是中国人" @click="handler"/>
  </div>
</template>

<script type="text/ecmascript-6">
import HintButton from './HintButton';
export default {
  components:{
     HintButton 
  },
  methods: {
    handler() {
       alert('弹弹弹');
    },
  },
}
</script>
```

HintButton组件
```vue
<template>
  <div>
     <a :title="$attrs.title">
      <!-- 注意此处不可使用简写，必须使用全称 -->
        <el-button v-bind="$attrs" v-on="$listeners">添加</el-button>
     </a>
  </div>
</template>

<script>
export default {
  // props接收了的属性，this.$attrs属性是获取不到的
  props:['type'],
  mounted(){
    //this.$attrs:可以获取到父亲传递的数据【props】
    //this.$listeners:可以获取到父亲传递的事件
    console.log(this.$attrs);
    console.log(this.$listeners);
  }
};
</script>
```

### 效果实现
![alt](/Hover.png)

### log打印
![alt](/el-title.png)


