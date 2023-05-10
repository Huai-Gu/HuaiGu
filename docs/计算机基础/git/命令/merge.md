## merge 
当我们想合并某一个分支时可以存在冲突


```js 
//A分支
console.log("hello world Branch A")
```
```js
//B分支
console.log("hello world Branch B")
```

在这个时候合并就会出现问题(同一行，不是同一行默认是增量提交了)

且合并会多出一个新的提交，这里和rebase是有[区别](https://zhuanlan.zhihu.com/p/57872388)的


 ## Git merge有两种主要的合并策略：fast-forward和recursive
```js
A->B-C dev
A->D->E master

```


### fast-forward

如果一个分支的提交历史是另一个分支的子集，那么Git会简单地将当前分支指向另一个分支的最新提交，这样就完成了合并操作


### recursive

在recursive合并策略中，Git会创建一个新的提交来表示合并结果，这个提交会包含两个分支的所有变更内容。