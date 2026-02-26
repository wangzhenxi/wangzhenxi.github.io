---
title: 'Shell Script'
---

# Shell Script

## 转换为可执行脚本

新建了可读写文件后，需赋予可执行权限

```javascript
touch test.sh
chmod 755 test.sh
```

## 注释

**单行注释**

```bash
# 这是一行注释
```

**多行注释**

```bash
:<< tip
这是多行注释
tip
```

## 变量

变量名需遵循以下规则：

1. 命名只能使用英文字母，数字和下划线，首个字符不能以数字开头。
2. 中间不能有空格，可以使用下划线（_）。
3. 不能使用标点符号。
4. 不能使用bash里的关键字（可用help命令查看保留关键字）。

```bash
username=josh
```

**可输入变量**

用户输入的值为变量值

```bash
read username
echo "username: $username"
```

**使用变量**

用花括号包起来是好习惯

```bash
echo hello $username
echo hello ${username}

# 花括号可识别变量边界
for skill in Ada Coffe Action Java; do
  echo "I am good at ${skill}Script"
done
```

**拼接字符串**

```bash
username=josh
say='hello ${username}'
```

**只读变量**

```bash
username=josh
readonly username
username=wong   # error
```

**删除变量**

将非只读变量的值置空

```bash
unset username
```

**获取字符串长度**

```bash
username=joshwong
first_name=${username:4:4} # 类似substr
```

**数组**

括号代表数组，空格进行分隔

```bash
users=(josh kevin linus)
echo ${users[1]}    # kevin
echo ${#users[*]}   # 返回数组长度
```

## 运算符

**算数运算符**

反引号包含expr + 表达式

```bash
echo `expr 1 + 1`
echo `expr 3 \* 3`  # 乘法要加反斜杠
```

**关系运算符**

-eq -ne -gt -lt -ge -le

```bash
if [ 1 -eq 2 ]
then
  echo 'is true'
else
  echo 'is false'
fi
```

**布尔运算符**

!取反 -o或 -a且

```bash
if [ 1 -eq 1 -a 2 -eq 2 ]
then
  echo 'true'
else
  echo 'false'
fi
```

**逻辑运算符**

||或 &&且

```bash
if [[ 1 -eq 1 && 2 -eq 2 ]]
then
  echo 'true'
else
  echo 'false'
fi
```

**字符串运算符**

= != -z长度为0 -n长度不为0

```bash
username=test
if [ -z $username ]
then
  echo 'empty'
else
  echo username: ${username}
fi
```

**文件测试运算符**

操作符 | 说明 | 举例
--- | --- | ---
-b file | 检测文件是否是块设备文件，如果是，则返回 true。 | [ -b $file ] 返回 false。
-c file | 检测文件是否是字符设备文件，如果是，则返回 true。 | [ -c $file ] 返回 false。
-d file | 检测文件是否是目录，如果是，则返回 true。 | [ -d $file ] 返回 false。
-f file | 检测文件是否是普通文件（既不是目录，也不是设备文件），如果是，则返回 true。 | [ -f $file ] 返回 true。
-g file | 检测文件是否设置了 SGID 位，如果是，则返回 true。 | [ -g $file ] 返回 false。
-k file | 检测文件是否设置了粘着位(Sticky Bit)，如果是，则返回 true。 | [ -k $file ] 返回 false。
-p file | 检测文件是否是有名管道，如果是，则返回 true。 | [ -p $file ] 返回 false。
-u file | 检测文件是否设置了 SUID 位，如果是，则返回 true。 | [ -u $file ] 返回 false。
-r file | 检测文件是否可读，如果是，则返回 true。 | [ -r $file ] 返回 true。
-w file | 检测文件是否可写，如果是，则返回 true。 | [ -w $file ] 返回 true。
-x file | 检测文件是否可执行，如果是，则返回 true。 | [ -x $file ] 返回 true。
-s file | 检测文件是否为空（文件大小是否大于0），不为空返回 true。 | [ -s $file ] 返回 true。
-e file | 检测文件（包括目录）是否存在，如果是，则返回 true。 | [ -e $file ] 返回 true。

## 函数

```bash
echoName() {
  echo "name is: $1"
}
echoName josh
```

## echo命令

**保存至文件**

将字符串保存至某文件里

```bash
echo 某项目打包时间：`date` > logs
```

## 引入shell脚本

```bash
echo 现在要引入脚本了！
. ./pack.sh
echo 执行完成！
```

## expect实现shell自动登录

```sh
expect -c "
    set timeout $timeout;
    spawn ssh $USER@$IP \"$command\";
    expect {
        *yes/no* {send -- yes\r;exp_continue;}
        *password:* {send -- $PSW\r;exp_continue;}
        eof {exit 0;}
    }
";
```

## 内网穿透

先在nginx配置端口代理，然后

```sh
ssh -R 1000:127.0.0.1:2000 root@10.1.2.3
```

