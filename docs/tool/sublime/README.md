---
title: 'sublime'
---

# sublime

## 插件

#### Terminal

在pci下安装terminal，在package setting - user setting下进行终端配置，在package setting - key bindings下进行快捷键配置
```javascript
{
  // window下终端路径
  "terminal": "C:\\MyAPP\\cmder\\Cmder.exe",
  //  window下终端参数
  "parameters": ["/START", "%CWD%"]
}
```

#### 在Terminal下打开sublime

在环境变量中添加sublime的目录

```text
$ subl .        // 打开当前目录
$ subl file     // 打开某文件
$ subl x.js     // 打开x.js文件
```

## 快捷键

### 选择类

| 快捷键 | 描述 |
| --- | --- |
| Ctrl+D | 选中相同的文本。 |
| Alt+F3 | 选中择全部的相同文本。 |
| Ctrl+L | 选中整行 |
| Ctrl+Shift+L | 选中多行行尾。 |
| Ctrl+Shift+M | 选择括号内的内容。 |
| Ctrl+M | 移至括号内结束或开始的位置。 |
| Ctrl+Enter | 在下一行插入新行。 |
| Ctrl+Shift+Enter | 在上一行插入新行。 |
| Ctrl+Shift+[ | 折叠代码。 |
| Ctrl+Shift+] | 展开代码。 |
| Ctrl+K+0 | 展开所有折叠代码。 |
| Ctrl+← | 向左单位移动光标。 |
| Ctrl+→ | 向右单位移动光标。 |
| shift+↑ | 向上选中多行。 |
| shift+↓ | 向下选中多行。 |
| Shift+← | 向左选中文本。 |
| Shift+→ | 向右选中文本。 |
| Ctrl+Shift+← | 向左单位性地选中文本。 |
| Ctrl+Shift+→ | 向右单位性地选中文本。 |
| Ctrl+Shift+↑ | 将光标所在行和上一行代码互换。 |
| Ctrl+Shift+↓ | 将光标所在行和下一行代码互换。 |
| Ctrl+Alt+↑ | 向上添加可同时编辑多行的光标。 |
| Ctrl+Alt+↓ | 向下添加可同时编辑多行的光标。 |

### 编辑类

| 快捷键 | 描述 |
| --- | --- |
| Ctrl+J | 合并多行代码为一行。 |
| Ctrl+Shift+D | 复制光标所在整行，插入到下一行。 |
| Tab | 向右缩进。 |
| Shift+Tab | 向左缩进。 |
| Ctrl+K+K | 从光标处开始删除代码至行尾。 |
| Ctrl+Shift+K | 删除整行。 |
| Ctrl+/ | 注释单行。 |
| Ctrl+Shift+/ | 注释多行。 |
| Ctrl+K+U | 转换大写。 |
| Ctrl+K+L | 转换小写。 |
| Ctrl+Z | 撤销。 |
| Ctrl+Y | 恢复撤销。 |
| Ctrl+F2 | 设置书签 |
| Ctrl+T | 左右字母互换。 |
| F6 | 单词检测拼写 |

### 搜索类

| 快捷键 | 描述 |
| --- | --- |
| Ctrl+F | 打开底部搜索框，查找关键字。 |
| Ctrl+shift+F | 在文件夹内查找。 |
| Ctrl+P | 1、在搜索框快速搜索文件。<br>2、输入@和关键字，查找文件中函数名。<br>3、输入：和数字，跳转到文件中该行代码。<br>4、输入#和关键字，查找变量名。 |
| Ctrl+G | 自动带:，输入数字跳转到该行代码 |
| Ctrl+R | 自动带@，输入关键字查找文件中的函数名。 |
| Ctrl+： | 自动带#，输入关键字查找文件中的变量名、属性名等。 |
| Ctrl+Shift+P | 打开命令框。 |
| Esc | 退出光标多行选择，退出搜索框，命令框等。 |

### 显示类

| 快捷键 | 描述 |
| --- | --- |
| Ctrl+Tab | 按文件浏览过的顺序，切换当前窗口的标签页。 |
| Ctrl+PageDown | 向左切换当前窗口的标签页。 |
| Ctrl+PageUp | 向右切换当前窗口的标签页。 |
| Alt+Shift+1 | 窗口分屏，恢复默认1屏（非小键盘的数字） |
| Alt+Shift+2 | 左右分屏-2列 |
| Alt+Shift+3 | 左右分屏-3列 |
| Alt+Shift+4 | 左右分屏-4列 |
| Alt+Shift+5 | 等分4屏 |
| Alt+Shift+8 | 垂直分屏-2屏 |
| Alt+Shift+9 | 垂直分屏-3屏 |
| Ctrl+K+B | 开启/关闭侧边栏。 |
| F11 | 全屏模式 |
| Shift+F11 | 免打扰模式 |
