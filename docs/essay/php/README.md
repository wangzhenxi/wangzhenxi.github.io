---
title: 'PHP'
---

# PHP

## 特性

- 弱类型语言

## 语法

### 文档

PHP 脚本<?php 开始，以 ?> 

```php
<?php
    echo 'hello josh'
?> 
```

### 变量

#### 规范

- 变量以 $ 符号开始，后面跟着变量的名称
- 变量名必须以字母或者下划线字符开始
- 变量名只能包含字母、数字以及下划线（A-z、0-9 和 _ ）
- 变量名不能包含空格
- 变量名是区分大小写的（$y 和 $Y 是两个不同的变量）
- 变量在赋值时声明

#### 数据类型

- String（字符串）
- Integer（整型）
- Float（浮点型）
- Boolean（布尔型）
- Array（数组）
- Object（对象）
- NULL（空值）

```php
$x = 1.23;
$y = 2;
$z = '345';
$x1 = array(1,2,'3');
$x2 = true;
class Animal {
    var $name;
    function __construct($name="josh") {
        $this->name = $name;
    }
}
$x3 = null;
$cat = new Animal('joshwang');
echo var_dump($x);
echo var_dump($y);
echo var_dump($z);
echo var_dump($x1);
echo var_dump($x2);
echo var_dump($cat);
echo var_dump($x3);
```

#### 作用域

使用全局变量：

```php
$x = 1;
$y = 2;
function test() {
    global $x; // 通过global关键字声明
    $y = $GLOBALS['y']; // 通过$GLOBALS访问
    $z = $x + $y;
    echo $z;
}
test();
```

使用换行符：

```php
echo PHP_EOL;
```

Static作用域： 当一个函数完成时，它的所有变量通常都会被删除。有时候希望某个局部变量不要被删除，需在第一次声明变量时使用 static 关键字

```php
function myTest()
{
    static $x=0;
    echo $x;
    $x++;
    echo PHP_EOL;    // 换行符
}
 
myTest();
myTest();
myTest();
```

参数作用域： 通过函数入参方式传入

```php
function test($x) {
    echo $x;
}
test(123);
```

#### 超级全局变量

```php
$GLOBALS // 全局变量
$_SERVER // 服务器和执行环境信息
$_REQUEST // 获取请求体参数
$_POST
$_GET
$_FILES
$_ENV
$_COOKIE
$_SESSION
```

##### $_SERVER

| 元素/代码 | 描述 |
| --- | --- |
| $_SERVER['PHP_SELF'] | 当前执行脚本的文件名，与 document root 有关。例如，在地址为 http://example.com/test.php/foo.bar 的脚本中使用 $_SERVER['PHP_SELF'] 将得到 /test.php/foo.bar。__FILE__ 常量包含当前(例如包含)文件的完整路径和文件名。 从 PHP 4.3.0 版本开始，如果 PHP 以命令行模式运行，这个变量将包含脚本名。之前的版本该变量不可用。 |
| $_SERVER['GATEWAY_INTERFACE'] | 服务器使用的 CGI 规范的版本；例如，"CGI/1.1"。 |
| $_SERVER['SERVER_ADDR'] | 当前运行脚本所在的服务器的 IP 地址。 |
| $_SERVER['SERVER_NAME'] | 当前运行脚本所在的服务器的主机名。如果脚本运行于虚拟主机中，该名称是由那个虚拟主机所设置的值决定。(如: www.runoob.com) |
| $_SERVER['SERVER_SOFTWARE'] | 服务器标识字符串，在响应请求时的头信息中给出。 (如：Apache/2.2.24) |
| $_SERVER['SERVER_PROTOCOL'] | 请求页面时通信协议的名称和版本。例如，"HTTP/1.0"。 |
| $_SERVER['REQUEST_METHOD'] | 访问页面使用的请求方法；例如，"GET", "HEAD"，"POST"，"PUT"。 |
| $_SERVER['REQUEST_TIME'] | 请求开始时的时间戳。从 PHP 5.1.0 起可用。 (如：1377687496) |
| $_SERVER['QUERY_STRING'] | query string（查询字符串），如果有的话，通过它进行页面访问。 |
| $_SERVER['HTTP_ACCEPT'] | 当前请求头中 Accept: 项的内容，如果存在的话。 |
| $_SERVER['HTTP_ACCEPT_CHARSET'] | 当前请求头中 Accept-Charset: 项的内容，如果存在的话。例如："iso-8859-1,*,utf-8"。 |
| $_SERVER['HTTP_HOST'] | 当前请求头中 Host: 项的内容，如果存在的话。 |
| $_SERVER['HTTP_REFERER'] | 引导用户代理到当前页的前一页的地址（如果存在）。由 user agent 设置决定。并不是所有的用户代理都会设置该项，有的还提供了修改 HTTP_REFERER 的功能。简言之，该值并不可信。) |
| $_SERVER['HTTPS'] | 如果脚本是通过 HTTPS 协议被访问，则被设为一个非空的值。 |
| $_SERVER['REMOTE_ADDR'] | 浏览当前页面的用户的 IP 地址。 |
| $_SERVER['REMOTE_HOST'] | 浏览当前页面的用户的主机名。DNS 反向解析不依赖于用户的 REMOTE_ADDR。 |
| $_SERVER['REMOTE_PORT'] | 用户机器上连接到 Web 服务器所使用的端口号。 |
| $_SERVER['SCRIPT_FILENAME'] | 当前执行脚本的绝对路径。 |
| $_SERVER['SERVER_ADMIN'] | 该值指明了 Apache 服务器配置文件中的 SERVER_ADMIN 参数。如果脚本运行在一个虚拟主机上，则该值是那个虚拟主机的值。(如：someone@runoob.com) |
| $_SERVER['SERVER_PORT'] | Web 服务器使用的端口。默认值为 "80"。如果使用 SSL 安全连接，则这个值为用户设置的 HTTP 端口。 |
| $_SERVER['SERVER_SIGNATURE'] | 包含了服务器版本和虚拟主机名的字符串。 |
| $_SERVER['PATH_TRANSLATED'] | 当前脚本所在文件系统（非文档根目录）的基本路径。这是在服务器进行虚拟到真实路径的映像后的结果。 |
| $_SERVER['SCRIPT_NAME'] | 包含当前脚本的路径。这在页面需要指向自己时非常有用。__FILE__ 常量包含当前脚本(例如包含文件)的完整路径和文件名。 |
| $_SERVER['SCRIPT_URI'] | URI 用来指定要访问的页面。例如 "/index.html"。 |

#### 魔术常量

- `__LINE__`： 文件中的当前行号
- `__FILE__`： 文件的完整路径和文件名
- `__DIR__`： 文件所在的目录
- `__FUNCTION__`： 函数名称
- `__CLASS__`： 类的名称
- `__TRAIT__`： 另一种类，类似vue的mixins
- `__METHOD__`： 类的方法名
- `__NAMESPACE__`： 当前命名空间名称

trait示例：

```php
class Base {
    public function sayHello() {
        echo 'Hello ';
    }
}
 
trait SayWorld {
    public function sayHello() {
        parent::sayHello();
        echo 'World!';
    }
}
 
class MyHelloWorld extends Base {
    use SayWorld;
}
 
$o = new MyHelloWorld();
$o->sayHello();
```

### 常量

常量的定义是全局的

```php
// bool define ( string $name , mixed $value [, bool $case_insensitive = false ] )
define("hello", "josh", true); // 设置大小写不敏感
echo hello;
echo Hello;
```

### 运算符

> 大多数同js运算符，以下将描述不同之处

点运算符，将字符串连接在一起

```php
$txt1="Hello world!";
$txt2="What a nice day!";
echo $txt1 . " " . $txt2;
```

组合比较符，又称太空船操作符，语法格式如下：

$c = $a <=> $b;

解析如下：

- 如果 $a > $b, 则 $c 的值为 1。
- 如果 $a == $b, 则 $c 的值为 0。
- 如果 $a < $b, 则 $c 的值为 -1。

```php
$a = 1;
$b = 2;
echo $a<=>$b; // 1
```

箭头运算符，用于访问非静态属性

```php
echo obj->attr;
```

### 操作符

- `::`： 用于访问静态成员，类常量，还可以用于覆盖类中的属性和方法

### 条件语句

```php
if ($a > 0) {
    ...
} elseif($a < 0) { // 和js不同之处
    ...
} else {
    ...
}
```

### 内置函数

#### 日志方法

echo / print

- echo： 可以输出一个或多个字符串
- print： 只允许输出一个字符串，返回值总为 1

```php
echo 1,2,3;
$x = print 1;
echo $x;
```

### 文件方法

dirname： 获取当前文件的目录

```php
dirname(__DIR__);
```

#### 字符串方法

strlen： 获取字符串长度

```php
echo strlen('asd'); // 3
```

strpos： 获取字符所在位置索引

```php
$x = strpos('asd', 'zxc');
echo var_dump($x); // false
$y = strpos('asd', 'a');
echo var_dump($y); // 0
```

#### 数组方法

count： 返回数组长度

```php
$x = array(1,2,3);
echo count($x);
```

foreach： 数组遍历，返回属性名和属性值

```php
$arr = array("a" => 4,"b" => 5,"c" => 6);
foreach($arr as $key=>$value) {
    echo $key;
    echo $value;
    echo PHP_EOL;
}
```

排序：

- sort()： 对数组进行升序排列
- rsort()： 对数组进行降序排列
- asort()： 根据关联数组的值，对数组进行升序排列
- ksort()： 根据关联数组的键，对数组进行升序排列
- arsort()： 根据关联数组的值，对数组进行降序排列
- krsort()： 根据关联数组的键，对数组进行降序排列

## 命名空间

### 概念

- 子命名空间： 与目录和文件的关系很像，如： A\B\C
- 完全限定名称： 可用于访问命名空间，任意全局类、函数或常量

### 特点

- 如果一个文件中包含命名空间，它必须在其它所有代码之前声明命名空间。
- 可以在同一个文件中定义不同的命名空间代码

### 用法

```php
// test.php
<?php
namespace MyProject\subnamespace;
const CONNECT_OK = "const ok";
function test() {
    echo "test";
}
class Test {
    static function say() {
        echo "say it";
    }
}
?>

// index.php
<?php
namespace MyProject;
include 'test.php';
echo "start";
echo PHP_EOL;
const test = 123;
echo test; // 非限定名称
echo PHP_EOL;
subnamespace\test(); // 限定名称， 指定下一级命名空间
echo PHP_EOL;
echo subnamespace\CONNECT_OK;
echo PHP_EOL;
echo \MyProject\subnamespace\Test::say(); // 完全限定名称，指定完整命名空间
echo PHP_EOL;
?>

```

使用`use`操作符实现别名

```php
<?php
namespace MyProject;
include 'util/test.php';

use \MyProject\subnamespace as sub, \MyProject\subnamespace\Test;
echo sub\CONNECT_OK;
echo PHP_EOL;
$test = new Test();
$test::say();
echo PHP_EOL;
?>
```

### 面向对象

同Typescript

- final： 如果父类中的方法被声明为 final，则子类无法覆盖该方法。如果一个类被声明为 final，则不能被继承。
- parent: 通过该保留字访问父类


