---
title: 'Go语言圣经'
---

# Go语言圣经

## 编码知识

- 1byte = 8bits 1个字节等于8个位
- 1个字 = 32bits(在32位操作系统下) 或者 64bits(在64位操作系统下)
- ASCII编码： 使用1个byte存储一个字符，英文字符集
- GB2312编码： 由2个字节组成，第一个字节存储区码，第二个字节存储位码，两者结合对应某一个字符
- unicode编码： 各国有自己的字符集后，为了实现跨语言、跨平台的文本转换和处理需求，ISO国际标准化组织提出了Unicode的新标准，涵盖了世界上所有的文字和符号字符，Unicode编码方案为字符集中的每一个字符指定了统一且唯一的二进制编码
- utf8编码： 是一种变长编码方案，用1～6个字节标识一个字符

### 数据类型

- int8、int16、int32: 类型后面带的是bit，所以int8占用1个字节，以此类推

### UTF8编码规则

- 如果只有1个字节，最高位为0。
- 如果有n个字节，第一个字节的前n位为1，其余字节以10开头。

#### 示例

> ?代表可用于表达编码的位数

- 0 ~ 2^8 - 1 : 0??????? 占用1个字节 可表达最高127的数字
- 2^8 ~ 2^12 - 1 : 110????? 10?????? 占用2个字节 可表达最高2047的数字
- 2^12 - 2^16 - 1 : 1110???? 10?????? 10?????? 可表达最高65535的数字

#### 引申

string字符串：

GO语言中的字符串是会记录存储的字符的字节长度，当修改变量指定位置的值时，会修改变量存储字节长度，所以变量值是只读的，不可修改，如需修改，可直接把变量重新赋值。

## 计算机基础

- CPU通过地址总线向内存获取数据： 32位地址总线可寻址 2^32 -1 的地址
- 内存通过数据总线向CPU提供数据： 32位数据总线每次可返回4个字节的数据
- 机器字长： 内存每次向CPU所提供的数据字节数
- 内存寻址： 并行地从内存8个芯片上同时寻找同一个地址的数据，所以地址需为内存芯片数的倍数
- 内存对齐： 编译器将各种类型的数据放到相应合适的位置，并占用相应字节数，比如类型大小为4个字节的，内存位置需取n%4=0的位置
- 对齐边界 = 数据所占字节数 与 机器字长 间取最小值
- 最大对齐边界 = 机器字长

### 引申

struct结构体：

- 结构体对齐边界 = 所有成员中最大的对齐边界
- 类型大小 = 按顺序取元素内存位置之和，值需等于结构体对齐边界的整数倍

## 哈希表

通过多个buckets存储键值对

### 实现逻辑

- 通过hash函数将key处理一下，得到一个哈希值
- key的存储地址，通过哈希值进行取模法或与运算的方式得到
- 新的key如果存储地址被占用，通过比对key是否相等
- 如果不相等（哈希冲突），可通过开放地址法，遍历该地址之后的桶，直到key相等，或者桶不存在，得到存储地址；或者通过拉链法，在地址后新建一个桶，通过链表的方式遍历
- 哈希冲突会影响哈希表读写效率，所以需适时进行哈希表的扩容
- 哈希表扩容时，可通过渐进式扩容的方式，在哈希表读写时，完成一部分键值的迁移，直到全部迁移完成，旧桶不再使用，该方式可防止迁移造成的瞬时抖动。

## 并发模型

> DO NOT COMMUNICATE BY SHARING MEMORY; INSTEAD, SHARE MEMORY BY COMMUNICATING.
“不要以共享内存的方式来通信，相反，要通过通信来共享内存。”

CSP（communicating sequential processes）并发模型

### 概念

- 线程： thread，有时候被称为轻量级进程（Lightweight Process, LWP），是程序执行流的最小单元。
- 协程： coroutine，又称微线程与子例程（或者称为函数）一样，也是一种程序组件。一种协作任务控制机制，在最简单的意义上，协程不是并发的。
- Goroutine： 最基础的执行单元，是支持并发的。每个go程序至少有一个goroutine，程序启动时，它会自动创建
- channel： 是go语言中各个并发结构体（goroutine）之前的通信机制。通俗地讲，就是各个`goroutine`间的通信管道，类似linux中的管道。传和取时，必阻塞，直到其他`goroutine`传或者取为止

### 实现

通过`goroutine`和`channel`实现

### 参考

[Go goroutine理解](https://segmentfault.com/a/1190000018150987)







### TODO

- 指针
- 寄存器
- 类型接收器
- 指针接收器
- 值接收器

| 平台 | 指针宽度和寄存器宽度 |
| --- | --- |
| 32位的平台 | 4byte |
| 64位的平台 | 8byte |

## 数据类型

### slice切片

类似数组的概念，切片当前已开辟的内存，存储的元素数据是可安全读写的，开辟内存的方式可以是append或者修改声明的切片容量长度

#### 切片内存扩容

##### 1. 预估容量

- 扩容前容量 oldCap
- 当前所需容量 cap
- 预计扩容容量 newCap

```go
if oldCap * 2 < cap {
    newCap = cap
} else {
    if oldCap < 1024 {
        newCap = oldCap * 2
    } else {
        newCap = oldCap * 1.25
    }
}
```

##### 2. 分配内存

内存分为： 8 16 32 64 128 256...

- 预计占用内存 = 一个元素所占字节数 * 预计扩容容量
- 实际占用内存 = 根据 预计占用内存 以就近原则往大值分配

##### 3. 获得容量

实际分配容量 = 实际占用内存 / 一个元素所占用字节数

### interface接口

由2个字组成，1个指向方法，1个指向数值




## TODO

- defer先定义后执行

```go
package main

import "fmt"

func f(n string) {
	fmt.Println(n)
}

func main() {
	defer f("3")
	defer f("2")
	f("1")
}

// 打印： 1 2 3
```

- recover只能捕获到父级异常

```go
func main() {
    defer (func() {
        if err := recover(); err != nil {
            fmt.Println("catch")
            fmt.Println(err)
        }
    })()
    panic("error")
    // 打印： catch error
}
```

- 通过channel生产和消费，如果不生产或不消费，就会一直阻塞进程

```go
func main() {
	messages := make(chan string)
	go func() {
		messages <- "test" // 生产
	}()
	message := <-messages // 消费
	fmt.Println(message)

}
```

- 生产channel位置必须是在协程里

```go
func main() {
	// fail
	messages := make(chan string)
	messages <- "test" // 缺少一个父级goroutine接收 抛出异常
	message := <-messages
	fmt.Println(message)
	// success
	messages := make(chan string)
	go func() {
		messages <- "test" // 等待父级goroutine接收
	}()
	message := <-messages // 接收
	fmt.Println(message)
}
```

- 设置channel数量

```go
func main() {
	messages := make(chan string, 2) // 设置数量
	go func() {
		messages <- "test" // 生产
		messages <- "test2" // 生产
	}()
	message := <-messages // 消费
	fmt.Println(message)
	message = <-messages // 消费
	fmt.Println(message)
}
```

- 计数器

```go
func main() {
	waiter := &sync.WaitGroup{}
	waiter.Add(1) // 设定计数器
	go func() {
		defer waiter.Done() // 计数器 - 1
		fmt.Println("wait")
	}()
	waiter.Wait() // 等待计数器为0
	fmt.Println("end")
}
```

- 定义接收器和发送器

```go
func reciver(messages chan<- string, message string) { // 接收器
	messages <- message
}
func poster(messages <-chan string, message chan<- string) { // 发送器
	msg := <-messages
	message <- msg
}

func main() {
	messages := make(chan string, 1)
	reciver(messages, "test")
	messages2 := make(chan string, 1)
	poster(messages, messages2)
	close(messages2) // 关闭后不可生产消息
	for msg := range messages2 {
		fmt.Println(msg)
	}
}
```

- 超时处理

```go
func main() {
	c1 := make(chan string, 1)
	go func() {
		time.Sleep(time.Second * 2) // 2s
		c1 <- "res"
	}()
	select {
	case msg := <-c1:
		fmt.Println(msg)
	case <-time.After(time.Second * 1): // 1s
		fmt.Println("timeout")
	}
}
```

















