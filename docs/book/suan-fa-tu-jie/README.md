---
title: '算法图解'
---

# 算法图解

## 名词解析

## 复杂度

- 时间复杂度： 大O表示，表示执行算法所需的计算工作量
- 空间复杂度： 占用存储空间大小的度量

### 二分法
 
 大小数相加 / 2取值，比如1 ~ 128 = log128 = 7，至少7次找到目标值
 
 ### 大O表示法
 
 即算法所需执行次数，如：O(7)
 
 ### 递归
 
 每个递归函数都会由基线条件和递归条件两部分组成。
 
 - 基线条件： 用于跳出循环
 - 递归条件： 用于调用自身
 
### 调用栈

内存中用于存储多个函数的变量的栈，函数的操作都会对调用栈进行出栈入栈操作。栈是后进先出（LIFO）的规则。

- 入栈、压入： 函数调用开始
- 出栈、弹出： 函数调用结束

### 散列表

将键转换为数组的索引，数组对应的索引存放值，实现键值的映射，即高级语言的对象的实现原理。最佳的场景是散列的的值均匀分布，运算时间是O(1)，最糟的场景是散列的值堆积在一个索引里，运算时间是O(n)。

 ### 快速排序 D&C算法
 
 根据基准比对大小将数组拆成 左、中、右 三个数组，数组分别递归调用该函数，得出最终排序。调用栈栈长最多为O(n)，最佳情况是O(logn)，所以算法运行时间最佳情况是 O(n * logn)，最差情况是O(n * n)
 
 ### 队列
 
 一种先进先出（FIFO）的规则。
 
 ### 拓扑顺序
 
 后者依赖前者的顺序关系
 
 ### 狄克斯特拉算法
 
 适用于有向无环图，不走回头路，以深度优先的方式得出最少权重路线
 
 ### 贪婪算法
 
 常用近似算法，获得最优解的近似解。
 
 ### NP完全问题
 
 NP的英文全称是Non-deterministic Polynomial Complete的问题，即多项式复杂程度的非确定性问题。旅行商最短路线问题也是如此。需计算所有可能的解，从中得出最优解，复杂度为O(n!)
 
 ### 动态规划
 
 将问题拆解成多个子问题，根据子问题的解，得出初始问题的解。解题的思路是先画好M * N的场景图，根据场景规律，写出条件判断等式。
 

|  | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| 3 | 0 | 1 | 2 | 1 | 2 | 3 | 2 |
| 4 | 0 | 1 | 2 | 1 | 1 | 2 | 2 |

 ```js
// 找出最少硬币的找零方式
function find(money, coins) {
    const T = []
    for(let i = 0; i < coins.length; i ++) {
        const coin = coins[i]
        T[i] = []
        for( let j = 0; j <= money; j ++) {
            if (j === 0) {
                T[i][j] = 0
                continue
            }
            if (i === 0) {
                T[i][j] = Math.floor(j/coin)
                continue
            }
            if (j < coin) {
                T[i][j] = T[i - 1][j]
                continue
            }
            const val1 = T[i][j-coin] + 1
            const val2 = T[i - 1][j]
            T[i][j] = Math.min(val1, val2)
        }
    }
    return T[coins.length - 1][money]
}

const n = find(6, [1,3,4])
```
 
 ```js
// 找出背包最大价值

function find(bag, things) {
    const T = []

    const count = bag / 50
    for (let i = 0; i < things.length; i ++) {
        const thing = things[i]
        T[i] = {}
        for (let j = 0; j <= count; j ++) {
            const currentBag = j * 50
            if (j === 0) {
                T[i][currentBag] = 0
                continue
            }
            if (i === 0) {
                T[i][currentBag] = currentBag >= thing ? thing : 0
                continue
            }
            if (currentBag < thing) {
                T[i][currentBag] = T[i - 1][currentBag]
                continue
            }
            T[i][currentBag] = Math.max(T[i][currentBag - thing] + thing, T[i - 1][currentBag])
        }
    }

    return T
}

var n = find(350, [150, 200, 300])
```
 
 ### K最近邻算法
 
 毕达哥拉斯公式：根号下((x1-x2)^2+(y1-y2)^2)
 
 K最近邻（k-nearest neighbours，KNN），挑选物品合适的特征进行计算，当公式算出的值越小，代表两者特征越接近。KNN算法的成败取决于能否挑选合适的特征。
 
 ### OCR
 
 光学字符识别（optical character recoognition），识别出被拍摄物的信息

### 并行算法

用于解决负载均衡的问题

### 分布式算法

通过多机执行任务，得出最终结果。基于映射函数和归并函数两个理念完成。

### 布隆过滤器和HyperLogLog

一种概率型算法

### SHA算法

安全散列算法（secure hash algorithm，SHA），函数结果均匀分布，运算时间为O(1)

### Diffie-Hellman 密钥交换

一种对称型加密

 ## 算法运行时间
 
 算法速度并非时间，而是操作数的增速。
 
 常见大O运行时间：
 
 O(logn)，对数时间，如：二分查找法，从中间找起
 O(n)，线性时间，如：简单查找，从头找起
 O(n * logn) 如： 快速排序法
 O(n^2) 如：选择排序法，按某列排序时，多次遍历数组
 O(n!) n的阶乘，如： 旅行商的要去n个地方，线路有n!种可能 
 
 ## 数据结构对算法运行速度的影响

特点：

- 数组在内存中只有一个地址
- 链表在内存中有n个地址

| | 数组 | 链表 |
| --- | --- | --- |
| 访问方式 | 支持随机访问 | 支持顺序访问 |
| 读取 | O(1) | O(n) |
| 写入 | O(n) | O(1) |
