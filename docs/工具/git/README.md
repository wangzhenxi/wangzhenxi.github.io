## 简介

为什么诞生？

- 协作开发
- 代码版本管理

### 常用命令
- add [文件]
- commit [选项] [文件]
- push origin master
- pull origin master
- checkout [选项] [分支]
  + -b 创建分支
  + -d 删除分支
  + -- [文件] 将未add的文件恢复到库版本的样子,即恢复到工作区
- branch [分支] 切换分支
- merge [分支] 合并分支
- status 查看当前对文件的操作
- diff 
- reflog 版本日志列表
- reset --hard [commit_id] HEAD^ 返回上一个版本 HEAD^^2个版本 HEAD-100100个版本

## 全局设置

设置名称

```bash
git config --global user.name "xxx"
```

设置email

```bash
git config --global user.email "xxx"
```

查看设置

```bash
cat ~/.gitconfig
```

设置别名

```bash
git config --global alias.cm commit // 即$ git cm -m 'xx'
```

忽略已跟踪文件

```bash
git rm cached
```

## 使用例子

```bash
git add txt1.txt		//添加文件到暂存区
git commit -m "mes"	//添加提交信息
git status			//查看其他未添加文件列表与文件变动modified
git diff fileName.txt	//查看文件变动内容
git log				//查看文件变化日志,最近三次
git reset --hard HEAD^//退回上个版本
git cat fileName.txt	//查看文件内容
git rm fileName.txt	//删除文件
git remote add origin url	//添加远程仓库
git push -u origin master	//上传到远程仓库
git clone url			//从远程仓库克隆下来
git branch branchName	//创建分支
git checkout -b dev	//新建并切换到dev分支
git branch			//查看分支
git checkout master	//切换至master分支
git merge dev			//将dev分支合并到master内
git branch -d dev		//删除dev分支
git pull				//下载所有文件
git rm -r -f			//删除文件夹及其下所有文件
git reflog          // 打开版本日志列表
```

### 基础指令

初始化项目

```bash
git init
```

查看当前修改

```bash
git status
```

查看提交的信息

```bash
git log
```

提交文件

```bash
git commit -m 'test' // -m为提交信息
```

对比差异，与修改文件对比

```bash
git diff
```

对比差异，与暂存区的对比

```bash
git diff --staged
```

重命名,移动

```bash
git mv xx1.js xx2.js // 重命名
git mv xx1.js js // 移动文件
git mv js asset // 移动目录
```

删除文件

```bash
git rm fileName
```

撤销操作 -git amend

```bash
git commit -m "mes"
git add "xxx.js"
git commit --amend --no-edit
git log --name-status //查看提交了的文件
```

恢复删除文件

```bash
git checkout --fileName.html
```

合并分支

```bash
git merge [branchName]
```

版本回退

```bash
git reset --hard [commitId]
git push -f -u origin [branchName]
```