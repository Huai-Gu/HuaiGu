## Iterator
目的 : 为不同的数据集合提供了相同的访问机制


Q: 为哪些数据集合呢
A: Array Map Object Set


## 手写 Iteration

```js
function myIteration(arr){
    let index = 0
    return {
        next:function(){
            return  index<arr.length?
            {value:arr[index++],done:false}:
            {value:undefined,done:true}
        }
    }
}
let  test=myIteration([1,2])
console.log(test.next()) //{ "value": 1, "done": false }
console.log(test.next()) //{ "value": 2, "done": false }
console.log(test.next()) //{ "value": undefined, "done": true }

```

## 将对象为可迭代的


```js
let obj={
    'name':'zyh',
    'age':'18',
    'sex':'男'
  }
   obj={
    data:['name:zyh','age:18', 'sex:男'],
    [Symbol.iterator]:function(){
      const self=this
        let index=0;
        return {
            next:function(){
              if (index < self.data.length) {
                return {
                  value: self.data[index++],
                  done: false
                };
          }
              return { value: undefined, done: true };
            }
        }
    }
  }

```

[关于Symbol可以点击这里](./Symbol.md)


