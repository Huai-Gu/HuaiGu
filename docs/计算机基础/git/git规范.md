
## 代码冲突

```bash
git merge xxxx_branch 或者 git pull 时 or
git rebase xxxx_branch 或者 git pull --rebase 时 
解消方法也是修改冲突文件并删除冲突标识<<<<< ==== >>>:
git rebase –continue //继续更新到最新的base上
```




##  git分支管理


1. master 分支
命名：master
说明：主分支，永远处于稳定状态，对应当前线上版本
开发新需求需从master打新分支，开发完成合并回master发测试包，测试完成需打新的tag包，tag包申请上线发布
不允许在该分支直接提交代码；


2. develop 分支
命名：dev-{迭代版本号}
说明：主要提交代码分支
developer为分支开发目录，用于新需求开发
所有新需求需先从master主干新建一个developer分支，在分支上开发
开发完成后merge回master主干


3. feature 分支
命名：feature-{版本号}
说明：更能分支代码提交
feature分支用于临时出现的需求及功能变更开发，从develop分支新建一个feature分支，在分支上开发
开发完成后合并回 develop 分支


4. release 分支
命名：release-{版本号}
说明：发布分支，新功能合并到 develop 分支，准备发布新版本时使用的分支
当 develop 分支完成功能合并和部分 bugfix ，准备发布新版本时，切出一个 release 分支，来做发布前的准备
发布之前发现的bug 就直接在这个分支上修复，确定准备发版本就合并到 master 分支，完成发布，同时合并到 develop 分支


5. hotfix 分支
命名：hotfix-{date}
说明：紧急修复线上bug分支
当线上版本出现 bug 时，从master 分支切出一个 hotfix分支完成bug修复，然后将 hotfix合并到master和develop分支（如果此时存在release分支，则应该合并到release分支）


6. tag
采用三段式，v版本.里程碑.序号，如v1.2.1
架构升级或架构重大调整，修改第2位
新功能上线或者模块大的调整，修改第2位
bug修复上线，修改第3位




## git 提交规范

:::danger 
禁止使用 --force or -ff 提交
:::


```bash
feat:          新增feature
fix:           修复bug
docs:          仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等    
style:         仅仅修改了空格、格式缩进、标点符号等等，不改变代码逻辑
refactor:      代码重构，没有加新功能或者修复bug
test:          测试用例，包括单元测试、集成测试等            
chore:         改变构建流程、或者增加依赖库、工具等

perf:          优化相关，比如提升性能、体验
revert:        回滚到上一个版本	
```

<br/><br/>




-----------------------------------from后端gitlab开发文档规范------------------------------