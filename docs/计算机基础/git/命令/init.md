# git init

当我们使用 git init 命令会生成一个[.git](https://zhuanlan.zhihu.com/p/53967527)文件夹

.git 文件夹目录结构
目录生成工具********treer
```js
├─COMMIT_EDITMSG
├─config //保存配置
├─description // 对仓库的描述
├─FETCH_HEAD
├─HEAD
├─index
├─ORIG_HEAD
├─packed-refs
├─sourcetreeconfig.json
├─refs //git的引用
|  ├─tags
|  ├─remotes
|  |    ├─origin
|  |    |   ├─gh-pages
|  |    |   ├─HEAD
|  |    |   └master
|  ├─heads // 所有本地分支
|  |   └master //head 指向当前分支的顶端
├─objects  //存储每次提交的快照文件 即通过哈希算法生成hash为当前git的快照
|    ├─pack
|    |  ├─pack-0009a9acd81781029266629fbf07bf4ecdc93096.idx
|    |  ├─pack-0009a9acd81781029266629fbf07bf4ecdc93096.pack
|    |  ├─pack-99bf73b275d9b147a926e21a31b8e957b4dd7fc9.idx
|    |  ├─pack-99bf73b275d9b147a926e21a31b8e957b4dd7fc9.pack
|    |  ├─pack-d6352c5d0d64954123cb4e62a1b43034975044ea.idx
|    |  ├─pack-d6352c5d0d64954123cb4e62a1b43034975044ea.pack
|    |  ├─pack-fa073027caedc80df2fccde65ee2a2d294bd0f10.idx
|    |  └pack-fa073027caedc80df2fccde65ee2a2d294bd0f10.pack
|    ├─info
|    ├─ff
|    | └707f993074045b13602359860f8d369777c997
|    ├─fa
|    | └aa4d36a6145270614809d3c5d4a6ac62d9377d
|    ├─f8
|    | └3bfc7be09534978dd1dd9447555276d0a58c12
|    ├─f0
|    | └83fc0c74fa600ef52a9bb923da3bf7cce97d34
|    ├─db
|    | └22833e22794dfbde4ad7ff35b99839b14d6303
|    ├─d4
|    | └e0a74d6492b65b1e11526902136a74e18db130
|    ├─cf
|    | └03486ff542d0056f1e20499da8a8729af0151a
|    ├─cd
|    | └b66c094a30ca60deb0b8e2997bd2708bff44a5
|    ├─cb
|    | ├─32ba53a17202e2ee38be0319977d02212811cf
|    | └b13eef4dd9dfbd0f1684d458baf0ea638a77e5
|    ├─c9
|    | └37873e7c7860247e74974a7d49e015a9dfe828
|    ├─a7
|    | └03dcb274c78a3e284378deec736ac7c26c527e
|    ├─a6
|    | └4a60c82b82d0b627701e686955d35c6b04595c
|    ├─95
|    | └f07aefd28f7e68e28a46f58ed4c16be08e36db
|    ├─94
|    | └9d012303e0a0906623ea29e5b4291aef5e2e84
|    ├─92
|    | └c63bca368f55f65af6975d19a1f7da1902692a
|    ├─90
|    | └5301a6e728b7b11aac5932fe880f4411507c9e
|    ├─85
|    | └a050741c4b2def5ad0493b378b4fdf0f4e4854
|    ├─84
|    | └a7c8deca26e3e57062d07d57c47a3dd0bde4d0
|    ├─7b
|    | └f6fd4a84140993f1fd28d519964453d6fe03ab
|    ├─6e
|    | └db7c161042927a07d4065ec54c9ddce558c00a
|    ├─65
|    | └60ab82327750e940c6ea28501b60850df78d3e
|    ├─63
|    | └7ff3ba696ba6c0170b14020fdd21771ea9605a
|    ├─4f
|    | └289ac97a091c36bf1df8dbb1db779a05eef1a5
|    ├─4a
|    | └2757647a5f27da394a35cd447eabce2539e865
|    ├─49
|    | └80eeda43c43c9adbe50fce8097bc2c2712035b
|    ├─46
|    | └21e38cd452d350bd2e4c0c6805084fff8e5eca
|    ├─45
|    | └8c204b574e30c3195d5c5d0e43f83a54670413
|    ├─3a
|    | └088fe3737372ed452aa8dc83a5e123039f27bc
|    ├─39
|    | └218297e41e22e49671e59fabe6c0a122e3e9ec
|    ├─35
|    | └b4db695839c52ede88f0b2bb9960c747682ae1
|    ├─26
|    | ├─819476e60bc8499898123b4c43f3f396ba7a0e
|    | └b6aa72f8b79ff105f0938ccda083b695382e6b
|    ├─23
|    | └09fcfc67a8cb06cda0a59d588d78786ae52d75
|    ├─21
|    | └04d3e5a5ff31980fed7f6ae54f191ae5fba47d
|    ├─1b
|    | └6ba716fe94b54daa7ae7f97a37241d4fca4751
|    ├─0e
|    | └907b06ca3f71e9db35ef5ec89a2c287292d2a0
|    ├─0b
|    | └5148b37367db50a105b882d6ee8de633173cce
|    ├─05
|    | └11430068f012a07f47ffbd6a54f171c4e3279b
├─logs //每次提交的日志文件
|  ├─HEAD
|  ├─refs
|  |  ├─remotes
|  |  |    ├─origin
|  |  |    |   ├─gh-pages
|  |  |    |   ├─HEAD
|  |  |    |   └master
|  |  ├─heads
|  |  |   └master
├─info // gitignore信息
|  └exclude
├─hooks   //当git到某个时机触发的钩子，可以提交前进行提交等等...（如Eslint不通过不允许push）
|   ├─applypatch-msg.sample
|   ├─commit-msg.sample
|   ├─fsmonitor-watchman.sample
|   ├─post-update.sample
|   ├─pre-applypatch.sample
|   ├─pre-commit.sample
|   ├─pre-merge-commit.sample
|   ├─pre-push.sample
|   ├─pre-rebase.sample
|   ├─pre-receive.sample
|   ├─prepare-commit-msg.sample
|   ├─push-to-checkout.sample
|   └update.sample
```
