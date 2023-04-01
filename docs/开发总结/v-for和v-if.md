## v-for v-if

今天有个憨憨用了v-for 和v-if 出现bug了,特此记录一下 

## v-for 
首先我们要对v-for 有一定的了解
```js
v-for="(item,index) in DataList"
// 遍历数组值
```

。。。。。。补充明天再说



## v-if

与 v-else  v-else-if 连用



# 事故地点

```js

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <title>布局切换</title>
  <script type="text/javascript" src="./js/vue.js"></script>
  <link rel="stylesheet" type="text/css" href="./css/index.css" />
  <script src="./js/axios.min.js" type="text/javascript" charset="utf-8"></script>
</head>

<body>
  <div id="app" v-cloak>
    <!-- TODO：请在下面实现需求 -->
    <div class="bar">
      <a class="grid-icon active"></a>
      <a class="list-icon"></a>
    </div>
    <!--grid 示例代码，动态渲染时可删除-->
    <ul class="grid" v-for="item in goodsList" v-if="isShow===true">
      <li>
        {{item}}
        <a href="#/3814" target="_blank"> <img src="./images/1.png" /></a>
      </li>
    </ul>
    <ul class="list"  v-for="item in goodsList" v-else>
      <li>
        {{goodsList.length}}
        <a href="#/3814" target="_blank"> <img src="./images/1.png" /></a>
        <p>从零吃透 Vue.js 框架</p>
      </li>
    </ul>
  </div>
</body>

</html>
<script type="text/javascript">
  var vm = new Vue({
    el: "#app",
    data: {
      goodsList: [
        {
          "title": "从零吃透 Vue.js 框架",
          "url": "#/3814",
          "image": {
            "large": "./images/1.png",
            "small": "./images/1.png"
          }
        },
        {
          "title": "初中级前端工程师面试宝典",
          "url": "#/4452",
          "image": {
            "large": "./images/2.png",
            "small": "./images/2.png"
          }
        }
      ]
      ,
      isShow:false
    },
    mounted() {
      // TODO：补全代码实现需求
    },
  });
</script>

```



这样在切换的时候会多次渲染goodlist 

原因也很简单

在第一次渲染的时候是正常渲染 v-for 在组件挂载的时候

但是在v-if 执行后会重新渲染但是没有之前的DOM节点 又通过v-for 渲染了一次

第二次渲染可能在update 时（没测试过先这样明天再来）

至于为什么没有销毁大概是没有指令销毁吧 、
