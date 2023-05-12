## git设置两个ssh密钥
分为公司邮箱和个人邮箱 在ssh设置两个私钥并指定地址和私钥
```bash
ssh-keygen -t rsa -C "123456@qq.com"
```
新建密钥并命名  假如为 gitlab_hyperchain_rsa_id  (记得将公钥放进gitlab或者其他git平台)



在C:\Users\ziyuhang\.ssh\中新建config文件并配置

如下
```md
# 配置github.com
Host github.com                 
    HostName github.com
    IdentityFile C:\\Users\\ziyuhang\\.ssh\\id_rsa_github
    PreferredAuthentications publickey
    User YuhangZi

# 配置hyperchain.cn
Host hyperchain.cn
    HostName git.hyperchain.cn
    IdentityFile C:\\Users\\ziyuhang\\.ssh\\id_rsa_two
    PreferredAuthentications publickey
    User YuhangZi
```

### well have a try 



## 后续---

还出现问题是要去program files 文件夹去配置 ssh_config
```bash
Host *
    IdentityFile ~/.ssh/id_rsa_two
    HostkeyAlgorithms +ssh-rsa
    PubkeyAcceptedAlgorithms +ssh-rsa
```