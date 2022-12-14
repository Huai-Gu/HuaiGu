# props/$emit
### 1.1props配置项

1. 功能：让组件接收外部传过来的数据
2. 传递数据：```<Demo name="xxx"/>```
3. 接收数据：
    + 第一种方式（只接收）：```props:['name'] ```
    +  第二种方式（限制类型）：```props:{name:String}```
    + 第三种方式（限制类型、限制必要性、指定默认值）：
```js
props:{
	name:{
	type:String, //类型
	required:true, //必要性
	default:'老王' //默认值, 注意required和default互斥
	}
}
```


> 备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。





### 1.2关于props的注意

**一.场景需求**
父组件通过props向子组件传数组时默认值一直不合适，此处必须是工厂方法

**二.错误情况：**
Object/Array类型不能直接定义空对象或空数组，必须使用 工厂函数 return 回一个默认值。



```js
props:{
  projectTypes: {
    type: Array,
    default: []
  }
}
//或者
props:{
  projectTypes: {
    type: Object,
    default: {}
  }
}
```

**三解决方案：**

```js
// 数组方案2
 // 方案1
    props: {
		projectTypes: {
			type: Array,
			default:()=>[]
		}
	}
    // 方案2
    props: {
		projectTypes: {
			type: Array,
			default:function(){
				return [];
			}
		}
	},

// 对象 同理
  // 方案1
    props: {
		projectTypes: {
			type: Object,
			default:()=> {}
		}
	}
    // 方案2
    props: {
		projectTypes: {
			type: Object,
			default:function() {
				return {};
			}
		}
	},
```


## 2.组件自定义事件
1. 一种组件间通信的方式，适用于：<strong style="color:red">子组件 ===> 父组件</strong>
2. 使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（<span style="color:red">事件的回调在A中</span>）。
3. 两种在父组件中绑定自定义事件（test）：
    + 第一种方式，在父组件中：```<Demo @test="test"/>```  或 ```<Demo v-on:test="test"/>```
      ```js
      methods:{
        test(子组件数据){
          事件回调
        }
      }
      ```
    + 第二种方式（<strong style="color:red">不建议</strong>），在父组件中：
      ```js
      <Demo ref="demo"/>

      methods:{
        test(){}
      }
      mounted(){
        注意！！！回调要么配置在methods中，要么用箭头函数,否则this指向会出问题！
         this.$refs.demo.$on('test',this.test)
      }
      ``` 
4. 子组件触发自定义事件：```this.$emit('test',传给父组件的数据)```	  
5. 解绑自定义事件```this.$off('test')```
6. 组件上也可以绑定原生DOM事件，需要使用```native```修饰符。

