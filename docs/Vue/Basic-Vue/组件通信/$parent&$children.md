

# $parent/$children 与 ref
 

 ### 在DOM元素或组件上使用refs属性可以迅速进行dom定位，详细使用请见官网
:::danger
$refs 只会在组件渲染完成之后生效，并且它们不是响应式的。这仅作为一个用于直接操作子组件的“逃生舱”——你应该避免在模板或计算属性中访问 $refs。
:::

 ## 再此重点介绍$parent/$children的使用
 1. 使用this.$refs.paramsName能更快的获取操作子组件属性值或函数

> 使用$children[i].paramsName 来获取某个子组件的属性值或函数，$children返回的是一个子组件数组
```html
<template>
    <div class="parent">
        <Childone></Childone>
        <Childtwo></Childtwo>
        <p style="color:blue;">{{msgFromChild}}</p>
        <button @click="getChildMsg()">使用$children来获取子组件的数据</button>
    </div>
</template>
 
<script>
import Childone from './childone'
import Childtwo from './childtwo'
export default {
    components:{Childone,Childtwo},
    data(){
        return {
            msgFromChild:'',
        }
    },
    methods:{
        getChildMsg(){
            this.msgFromChild=this.$children[1].child2Msg;
        },
    }
}
```

>子组件怎么获取修改父组件的数据内容？这需要使用$parent
```html
<!-- parentone.vue -->
<template>
    <div class="parent">
        <Childone></Childone>
    </div>
</template>
 
<script>
import Childone from './childone'
export default {
    components:{
        Childone
    },
    data(){
        return {
            parentMsg:'这是父组件的数据',
        }
    }
}
```

```html
<!-- childone.vue -->

<template>
    <div class="child">
        <p style="color:red;">{{msgFromParent}}</p>
        <button @click="getParentMsg()">点击使用$refs获取父组件的数据</button>
    </div>
</template>
 
<script>
export default {
    data(){
        return {
            msgFromParent:''
        }
    },
    methods:{
        getParentMsg(){
            this.$parent.parentMsg="子组件中可以修改父组件的内容，这是通过子组件修改所得"
            this.msgFromParent=this.$parent.parentMsg;
        }
    }
}
```