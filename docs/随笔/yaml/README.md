# YAML

## 简介

专门用于写配置文件的语言，发音：鸭毛儿

## 特性

- 大小写敏感
- 空格缩进
- 同级缩进对齐
- 仅支持对象 数组 纯量（字符串/布尔值/整数/浮点数/Null/时间/日期）

## 语法

- 对象

```yml
name: josh
```

- 数组

```yml
-
  - cat
  - dog
  - bird
```

- 注释

```yml
# 这是注释
```

- 其他

```yml
# 双引号不会戳特殊字符转义
say: 'hello\njosh' # 输出 hello\\njosh
say: "hello\njosh" # 输出 hello\njosh
```

```yml
# | 保留换行符 > 折叠换行符（转为空格）
say: |
  hello
  josh
```

```yml
# |+ 保留文字块尾部换行 |- 删除文字块尾部换行
say: |+
  hello
  josh
```

- 引用

锚点 **&** 和别名 **\*** 用于引用

```yml
# 引用
defaults: &defaults
  baseURL: 10.1.6.90
  link: localhost

dev:
  NODE_ENV: development
  <<: *defaults

build:
  NODE_ENV: production
  <<: *defaults
```
