
## 名词

- ACID： atomicity原子性、consistency一致性、isolation隔离性、durability耐久性，一个数据库实现可靠的数据事务需满足的性质。

## 特点

- 速度快： 使用内存存储的非关系型数据库。
- 原子性： 当命令正在读取或修改数据的时候，其他客户端不能读取或修改相同的数据。

## 数据类型

| 结构类型 | 结构存储的值 | 场景 |
| --- | --- | --- |
| STRING | 字符串、浮点数、整数 |
| LIST | 一个链表 |
| SET | 无序去重的集合 |
| HASH | 包含键值对的无序散列表 |
| ZSET | 根据分值大小排序且去重的有序映射 | 排行榜(分值越小，排行靠前) |

### 指令

#### SETRING 字符串

- GET
- SET
- DEL

| 指令 | 描述 |
| --- | --- |
| `APPEND key value` | 将值追加到字符串尾部 |
| `GETRANGE key value` | 将值追加到字符串尾部 |

#### LIST 列表

redis使用双链表表示列表

- RPUSH
- LPUSH
- LRANGE
- LINDEX 获取给定位置的元素

#### SET 集合

redis通过配置可设置集合使用整数集合表示的限制条件，超出限制则使用散列表表示。

| 指令 | 描述 |
| --- | --- |
| `SADD key item1 [item2 ...]` | 增加一个或多个元素 |
| `SMEMBERS key` | 返回集合包含的所有元素 |
| `SISMEMBER key item` | 是否在集合中 |
| `SREM key item` | 移除元素 |
| `SCARD key` | 返回集合包含元素数量 |
| `SRANDMEMBER key [count]` | 随机返回count个元素，整数不重复，负数会重复 |
| `SPOP key` | 随机移除一个元素 |
| `SMOVE source-key dest-key item` | 将item从source-key集合中移除，并移入dest-key的集合下 |
| `SDIFF key1 [key2 ...]` | 返回存在于key1，不存在于其他集合的元素(差集) |
| `SDIFFSTORE dest-key key1 [key2 ...]` | 将存在于key1，不存在于其他集合的元素，存储到dest-key去(差集) |
| `SINTER key1 [key2 ...]` | 返回同时存在于所有集合的元素(交集) |
| `SINTERSTORE dest-key key1 [key2 ...]` | 返回同时存在于所有集合的元素,存储到dest-key去(交集) |
| `SUNION key1 [key2 ...]` | 返回那些至少存在于一个集合中的元素(并集) |
| `SUNIONSTORE dest-key key1 [key2 ...]` | 返回那些至少存在于一个集合中的元素,存储到dest-key去(并集) |

#### HASH 散列

redis使用散列表表示散列

| 指令 | 描述 |
| --- | --- |
| `HSET key field1 value1 [field2 value2]` | 为散列里面的一个或多个键设置值 |
| `HGET key field` | 从散列里获取键的值 |
| `HMGET key field1 [field2]` | 从散列里获取键的值 |
| `HDEL key field1 [field2]` | 移除散列一个或多个键值对 |
| `HLEN key` | 获取散列键值对数量 |
| `HEXISTS key filed` | 检查给定键是否存在于散列中 |
| `HKEYS key` | 获取散列包含的所有键 |
| `HVALS key` | 获取散列包含的所有值 |
| `HGETALL key` | 获取散列所有键值 |
| `HINCRBY key field increment` | 给散列指定键的值加上整数increment |
| `HINCRBYFLOAT key filed increment` | 给散列指定键的值加上浮点数increment |


#### ZSET 有序集合

redis通过散列表加上跳跃表表示有序集合

| 指令 | 描述 |
| --- | --- |
| `ZADD key score member [score2 member2 ...]` | 将带有一定分值的成员添加到有序集合 |
| `ZREM key member1 [member2 ...]` | 移除成员 |
| `ZCARD key` | 返回有序集合成员数量 |
| `ZINCRBY key increment member` | 将member成员的分值加上increment |
| `ZCOUNT key min max` | 返回分值介于min和max之间的成员数量 |
| `ZSCORE key member` | 返回成员member的分值 |
| `ZRANK key member` | 分值升序排序，返回成员member在有序集合之中的排名 |
| `ZRANGE key start stop [WITHSCORES]` | 分值升序排序，返回排名介于start和stop之间的成员，如果给了WITHSCORES参数，则将成员分值一并返回 |
| `ZREVRANK key member` | 分值升序排序，返回成员member在有序集合之中的排名 |
| `ZREVRANGE key start stop [WITHSCORES]` | 分值降序排序，返回排名介于start和stop之间的成员，如果给了WITHSCORES参数，则将成员分值一并返回 |
| `ZRANGEBYSCORE key min max [WITHSCORES] [LIMIT offset count]` | 分值升序排序，返回分值介于min和max之间的成员，如果给了WITHSCORES参数，则将成员分值一并返回 |
| `ZREVRANGEBYSCORE key max min [WITHSCORES] [LIMIT offset count]` | 分值降序排序，返回分值介于max和min之间的成员，如果给了WITHSCORES参数，则将成员分值一并返回 |
| `ZREMRANGEBYSRANK key start stop` | 分值升序排序，移除排名介于start和stop之间的成员 |
| `ZREMRANGEBYSCORE key min max` | 分值升序排序，移除排名介于min和max之间的成员 |
| `ZINTERSTORE dest-key key-count key1 [key2 ...] [WEIGHTS weight1 [weight2]] [AGGREGATE SUM|MIN|MAX]` | 有序集合交集运算 |
| `ZUNIONSTORE dest-key key-count key1 [key2 ...] [WEIGHTS weight1 [weight2]] [AGGREGATE SUM|MIN|MAX]` | 有序集合并集运算 |

#### 其他命令

| 指令 | 描述 |
| --- | --- |
| `SORT key [BY pattern] [LIMIT offset count] [GET pattern] [ASC|DESC] [ALPHA] destination` | 排序 |

##### 发布与订阅

| 指令 | 描述 |
| --- | --- |
| `SUBSCRIBE channel [channel]` | 订阅给定一个或多个频道 |
| `UNSUBSCRIBE [channel... [channel2 ...]]` | 退订给定一个或多个频道，没有给定则退订所有频道 |
| `PUBLISH channel message` | 向给定频道发送消息 |
| `PSUBSCRIBE pattern1 [pattern2 ...]` | 订阅与给定模式匹配的所有频道 |
| `PUNSUBSCRIBE pattern1 [pattern2 ...]` | 退订给定模式匹配的所有坡；频道，没有给定则退订所有频道 |

##### 事务

| 指令 | 描述 |
| --- | --- |
| `MULTI` | 事务开始 |
| `EXEC` | 执行事务开始后的多个指令 |

##### 过期

| 指令 | 描述 |
| --- | --- |
| `PERSIST key` | 移除键的过期时间(s) |
| `TTL key` | 查看键距离过期剩余时间(s) |
| `EXPIRE key seconds` | 给定键在指定秒数后过期 |
| `EXPIREAT key timestamp` | 给定键在给定UNIX时间戳(s)后过期 |
| `PTTL key` | 查看键距离过期剩余时间(ms) |
| `PEXPIRE key milliseconds` | 给定键在指定毫秒数后过期 |
| `PEXPIREAT key timestamp-milliseconds` | 给定键在给定UNIX时间戳(ms)后过期 |

## 数据持久化

### 方法

- 快照: 把某一时刻所有数据写入硬盘
- AOF: append-only file，在执行命令时，将被执行的命令写入硬盘

### 指令

| 指令 | 描述 |
| --- | --- |
| BGSAVE | 创建一个快照。通过fork一个子进程，负责将快照写入硬盘，而父进程继续处理命令。缺点： 速度慢，内存占用大 |
| SAVE | 创建一个快照。在快照创建完毕前不再响应任何其他指令 。缺点：无法正常执行其他指令 |
| SHUTDOWN | 执行SAVE后关闭服务器 |
| BGREWRITEAOF | 移除AOF文件中冗余命令来重写AOF文件，从而减小AOF文件体积，工作原理同`BGSAVE` |
| INFO | 查看服务器当前状态有关信息，如内存占用量、客户端连接数、上次快照后执行的命令数量等，其中`aof_pending_bio_fsync`为0时，表示服务器将所有数据已持久化到硬盘了 |

## 实践

### 分布式锁

用于解决能够被不同客户端多个进程访问的共享内存数据结构。在数据进行`加锁`时，程序需通过获取锁来对数据进行`排他性访问`的能力，才能对数据进行操作，最后还要将锁`释放`给其他程序。

- 公平锁：按照申请锁的顺序提供锁
- 非公平锁： 不按申请锁的顺序提供锁
- 独享锁：仅允许被一个线程所持有
- 共享锁：允许多个线程持有
- 乐观锁：常用于读场景，先操作后拿锁，不等待锁释放
- 悲观锁：常用于写场景，先拿锁后操作，等待锁释放后拿锁执行，行锁表锁都是用这个
- 粗粒度锁：通过一个锁，把执行的代码块都锁定
- 细粒度锁：和粗粒度锁相对
- 带超时限制特性的锁

#### 信号量

- 计数信号量： 限定能够同时使用的资源数量。通过时间戳作为有序集合的分值的方式，统计获得锁的用户，移除超时限的用户，剩下拿到锁的用户。缺点是多个客户端时，时间较慢的客户端会偷走时间较快的客户端的信号量。
- 公平信号量： 通过自增的计数器作为有序集合的分值的方式

#### 细粒度锁

在拥有多个操作分区情况下，如果只有单一一个锁，会阻塞多个请求。为了支持更高并发，减少阻塞，需细化锁的设计

分级锁的设计：

- Top锁
- Child锁

使用规则： 在操作开始前，必须先申请得到Top锁来准备获取Child锁，在获取得到Child锁之后，可以再释放Top锁。这里的Child锁，可以理解为就是每个分区锁。这里Top锁的目的是为了保证获取各个分区锁的原子性。

### 任务队列

通过有序集合，分值为任务执行时间，定时轮询队列，按分值升序排序，小于当前时间的立即执行。

## 性能优化

### 事务

一次向Redis发送多条指令

### 压缩列表

- 让键名保持简短
- 使用短结构











