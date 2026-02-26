---
title: 'Linux'
---

# Linux

## 文件目录结构及用途

/sys 系统文件
/boot 启动文件
/dev 设备 终端、网卡、内存、CPU、磁盘、光驱等
/lib 库文件
/etc 服务配置文件，如用户账号密码（/etc/passwd）、用户组、网卡配置
/media 音频设备
/mnt 即mount，挂载点，挂载磁盘、光驱等
/proc 进程管理，数字即进程id
/run 运行时文件
/usr 应用程序配置、模板文件、库文件
/root 超级管理员的家目录
/sbin 超级权限拥有的特殊权限
/home 每个用户自己的目录
/bin 可执行文件，普通用户的权限
/srv 存放对外的数据
/opt 应用程序目录
/var 日志文件等，系统日志，应用日志
/tmp 临时缓存目录，程序运行时缓存文件

## 指令

### 文件目录管理

#### 查看

- cd
- pwd
- ls
- cat
- more： 空格下一页 b上一页
- tree 查看文件树
- head -n file 查看文件前n行
- tail -n file 查看文件后n行

#### 操作

- touch
- mkdir
- vim
- cp
- mv
- vim

### vim

#### 指令

- i 开始编辑
- o 下一行开始编辑
- yy 复制行
- p 粘贴
- nyy 复制多行（如：复制两行 2yy）
- u 撤销
- dd 删除单行
- dG 删除当前行到末行
- dgg 删除当前行到首行
- G 光标切换到末行
- gg 光标切换到首航

#### 组合键

- ctrl + v 批量选择

#### 冒号指令

- :set nu 显示行号
- :set nonu 显示行号
- :n 光标到n行（如 :6 到第六行）
- :%s/abc/def/g 将abc替换为def

- /abc 查找abc，n往下找，N网上找

### 权限管理

#### 权限查看

**d rwx r-x r-x：**

- 第一位： d为目录 -为文件
- 第一部分： 用户权限
- 第二部分： 组权限
- 第三部分： 其他人权限

**授权：**

- r： 读，模式数4
- w： 写，模式数2
- x： 执行，模式数1

#### 授权

##### 集体授权

- chmod 777 1.txt 任何人都可读写执行删除操作

##### 单独授权

- chmod u+x 1.txt 给用户赋予执行权限
- chmod g+x 1.txt 给用户组赋予执行权限
- chmod o+x 1.txt 给其他人赋予执行权限
- chmod u-x 1.txt 撤销用户的执行权限

##### 递归授权

- chmod 777 a -R 将a目录及目录下所有文件集体授权

#### 文件归属

- chown [用户名]:[用户组] [文件名] 更改文件所属用户和组
- chown :[用户组] [文件名] 更改文件所属组

## 用户管理

## 用户登录

[root@myserver~]#: 用户名称@主机名称（可用hostname查看）

- **~** 代表宿主目录，即用户的家目录
- **#** 代表超级管理员用户
- **$** 代表普通用户

## 用户信息

### id

```bash
# 指令： id
uid=0(root) gid=0(root) groups=0(root)
```

- uid 用户的id
- gid 用户所属的组id
- groups 创建用户时自动生成的与用户同名的组

### 指令

- whoami： 返回的是用户的名称

## 创建用户

useradd 课指定用户名称、home目录、用户组、gid等

**josh:x:1000:1000::/home/josh:/bin/bash：**

- 用户名:密码:用户id:组id::宿主目录:shell
- /bin/bash 是默认分配给用户使用的
- /sbin/nologin 去禁止用户登录，如： useradd josh -s /sbin/nologin 创建用户并禁止登录

## 删除用户

userdel [name]

## 切换用户

- su [用户名]： 切换到用户
- exit： 退出当前用户
- su - [name]： 切换用户并切换到对应环境变量

## 修改用户属性

usermod

- usermod josh -L 锁定账号，禁止登录，-U解锁

## 磁盘管理

### 指令

- fdisk： 磁盘分区
- mkfs： 磁盘格式化
-mount： 挂载磁盘，将/dev目录下的磁盘，挂载到指定目录，如： mount /dev/sdb1 /data/sdb1
- unmount： 卸载磁盘
- df： 磁盘查看 -h 带单位

## 安装包

### 工具

- rpm
- yum

#### rpm

适用于安装不依赖其他软件的单一软件

- rpm -qa： 获取已安装的包列表
- rpm -ivh xxx.rpm： 安装xxx.rpm
- rpm -e xxx： 卸载xxx
- rpm -Uvh xxx.rpm： 更新xxx.rpm

#### yum

适用于安装带依赖的软件

- /etc/yum.repos.d yum源
- yum remove [包名]
- yum install [包名] -y
- yum update [包名]
- yum repolist 仓库列表
- yum clean all 清空源缓存

```bash
[base] # 源名称
name=CentOS-$releasever - Base # 仓库描述
mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=os&infra=$infra # 源地址 源地址内要有/repodata/repomd.xml
#baseurl=http://mirror.centos.org/centos/$releasever/os/$basearch/
gpgcheck=1 # 证书验证
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7
```

#### dnf

比yum新的安装工具

- dnf list installed 列出已安装包
- dnf check-update 检查更新
- dnf repolist all 查看源
- dnf search 查找包
- dnf install 安装包
- dnf reinstall 重装包
- dnf download 下载包
- dnf remove 卸载包
- dnf clean all 清除缓存

## 文件处理

### 归档

- tar cf xxx.tar file1 file2 创建归档
- tar xf xxx.tar -C /root/dist 创建归档
- tar zxf xxx.tar.gz -C /root/dist 解压归档

## 下载文件

- wget 下载链接文件

## 网络管理

- IP： 全球唯一的机器标识
- DNS： 域名服务，解析域名为ip
- Gateway： 路由器网关
- ipv4： 网络地址为4 * 8 = 32位
- 子网掩码： 255.255.255.0简写为/24，192.168.123.1/24 意味着该32位的ip可分配的地址为32 - 24 = 8 位，即最大可分配256个IP地址
- NAT： 虚拟机通过宿主机IP进行数据传输
- 桥接： 虚拟机与宿主机共享一个局域网，获取与宿主机相同网段的IP地址

### 网卡操作

- /etc/sysconfig/network-scripts 网卡配置文件
- /etc/sysconfig/network-scripts/ifcfg-eth0 即eth0的网卡配置文件
- ifconfig 查看网卡信息
- ip addr 查看网卡信息
- systemctl restart network 重启网卡
- nmcli connection reload 重启网卡
- nmcli connection up xxx 启动某网卡
- ifdown xxx 断开xxx网卡
- ifup xxx 连上xxx网卡

```bash
DEVICE=lo
IPADDR=127.0.0.1 # IP地址
NETMASK=255.0.0.0 # 子网掩码
NETWORK=127.0.0.0
BROADCAST=127.255.255.255
BOOTPROTO="none" # none static静态 dhcp 动态
UUID="xxxxxxx" # 网卡UUID
ONBOOT=yes # 开机自动打开网卡
NAME=loopback # 网卡名称
```

### 查看端口进程

- lsof -i:port

## VNC远程连接

- dnf install tigervnc-server tigervnc-server-module -y 安装VNC服务
- vncpassword 修改vnc密码
- systemctl deamon-reload 重新加载服务
- systemctl start vncserver 启动vnc服务

## SSH

- systemctl status sshd 查看ssh状态
