# git 
远端维护一个存储库，每个人从远端拉取代码
![alt](/git.png)



## [对比svn](https://zhuanlan.zhihu.com/p/48148269)

git 是分布式的，而svn是集中式的

svn 严重依赖于服务器端 挂了就啥都没了
而git可以从另外的客户端获取所以代码

## git config


git 配置分为全局配置和本地配置

即命令行输入用带上 --global

或者在全局配置文件中修改.gitconfig文件

```bash
git config --global user.name "your-username"
git config --global user.email "your-email-address"
```

### [更多配置点这里](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-%E9%85%8D%E7%BD%AE-Git)


## 分支的概念

A->B->D (main)
A->C (master)

git checkout <分支名字> 切换分支


[git merge ](./%E5%91%BD%E4%BB%A4/merge.md)<分支名字>  将此分支合并在当前分支
