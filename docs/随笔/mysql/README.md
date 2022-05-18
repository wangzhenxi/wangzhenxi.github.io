## 简介

是一种关系型数据库（二维表格模型）

## 数据类型

### 数值类型

| 类型 | 大小 | 范围（有符号） | 范围（无符号） | 用途 |
| --- | --- | --- | --- | --- |
| TINYINT | 1字节 | (-128，127) | (0，255) | 小整数值 |
| SMALLINT | 2字节 | (-32 768，32 767) | (0，65 535) | 大整数值 |
| MEDIUMINT | 3字节 | (-8 388 608，8 388 607) | (0，16 777 215) | 大整数值 |
| INT或INTEGER | 4字节 | (-2 147 483 648，2 147 483 647) | (0，4 294 967 295) | 大整数值 |
| BIGINT | 8字节 | (-9,223,372,036,854,775,808，9 223 372 036 854 775 807) | (0，18 446 744 073 709 551 615) | 极大整数值 |
| FLOAT | 4字节 | (-3.402 823 466 E+38，-1.175 494 351 E-38)，0，(1.175 494 351 E-38，3.402 823 466 351 E+38) | 0，(1.175 494 351 E-38，3.402 823 466 E+38) | 单精度、浮点数值 |
| DOUBLE | 8字节 | (-1.797 693 134 862 315 7 E+308，-2.225 073 858 507 201 4 E-308)，0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308) | 0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308) | 双精度、浮点数值 |
| DECIMAL | 对DECIMAL(M,D) ，如果M>D，为M+2否则为D+2 | 依赖于M和D的值 | 依赖于M和D的值 | 小数值 |

### 字符串类型

| 类型 | 大小 | 用途 |
| --- | --- | --- |
| CHAR | 0-255字节 | 定长字符串 |
| VARCHAR | 0-65535字节 | 变长字符串 |
| TINYBLOB | 0-255字节 | 不超过 255 个字符的二进制字符串 |
| TINYTEXT | 0-255字节 | 短文本字符串 |
| BLOB | 0-65535字节 | 二进制形式的长文本数据 |
| TEXT | 0-65535字节 | 长文本数据 |
| MEDIUMBLOB | 0-16777215字节 | 二进制形式的中等长度文本数据 |
| MEDIUMTEXT | 0-16777215字节 | 中等长度文本数据 |
| LONGBLOB | 0-4294967295字节 | 二进制形式的极大文本数据 |
| LONGTEXT | 0-4294967295字节 | 极大文本数据 |

### 日期和时间类型

| 类型 | 大小(字节) | 范围 | 格式 | 用途 |
| --- | --- | --- | --- | --- |
| DATE | 3 | 1000-01-01/9999-12-31 | YYYY-MM-DD | 日期值 |
| TIME | 3 | '-838:59:59'/'838:59:59' | HH:MM:SS | 时间值或持续时间 |
| YEAR | 1 | 1901/2155 | YYYY | 年份值 |
| DATETIME | 8 | 1000-01-01 00:00:00/9999-12-31 23:59:59 | YYYY-MM-DD HH:MM:SS | 混合日期和时间值 |
| TIMESTAMP | 4 | 1970-01-01 00:00:00/2038结束时间是第 2147483647 秒，北京时间 2038-1-19 11:14:07，格林尼治时间 2038年1月19日 凌晨 03:14:07 | YYYYMMDD HHMMSS | 混合日期和时间值，时间戳 |

## 表达式

### 算数运算符

| 运算符 | 作用 |
| --- | --- |
| + | 加法 |
| - | 减法 |
| * | 乘法 |
| / 或 DIV | 除法 |
| % 或 MOD | 取余 |

### 比较运算符

| 符号 | 描述 | 备注 |
| --- | --- | --- |
| = | 等于 | |
| <>, != | 不等于 | |
| > | 大于 | |
| < | 小于 | |
| <= | 小于等于 | |
| >= | 大于等于 | |
| BETWEEN | 在两值之间 | select 5 between 3 and 6 |
| NOT BETWEEN | 不在两值之间 | |
| IN | 在集合中 | |
| NOT IN | 不在集合中 | |
| <=> | 严格比较两个NULL值是否相等 | 两个操作码均为NULL时，其所得值为1；而当一个操作码为NULL时，其所得值为0 |
| LIKE | 模糊匹配 | |
| REGEXP 或 RLIKE | 正则式匹配 | |
| IS NULL | 为空 | |
| IS NOT NULL | 不为空 | |

### 逻辑运算符

| 运算符号 | 作用 |
| --- | --- |
| NOT 或 ! | 逻辑非 |
| AND | 逻辑与 |
| OR | 逻辑或 |
| XOR | 逻辑异或 |

### 位运算符

| 运算符号 | 作用 |
| --- | --- |
| & | 按位与 |
| | | 按位或 |
| ^ | 按位异或 |
| ! | 取反 |
| << | 左移 |
| >> | 右移 |

### 运算符优先级

| 优先级顺序 | 运算符 |
| --- | --- |
| 1 | := |
| 2 | ||、OR、XOR |
| 3 | &&、AND |
| 4 | NOT |
| 5 | BETWEEN、CASE、WHEN、THEN、ELSE |
| 6 | =、<=>、>=、>、<=、<、<>、!=、IS、LIKE、REGEXP、IN |
| 7 | | |
| 8 | & |
| 9 | <<、>> |
| 10 | -、+ |
| 11 | \*、/、DIV、MOD |
| 12 | ^ |
| 13 | -(一元减号)、~(一元比特反转) |
| 14 | ！ |

## 命令

### 规范

写命令均以分号结尾

### 函数

[字符串函数、数字函数、日期函数、高级函数](https://www.runoob.com/mysql/mysql-functions.html)

### 命令列表

进入数据库

```sql
mysql -u root -p
```

创建数据库

```sql
create database name;
```

删除数据库

```sql
drop database name;
```

使用数据库

```sql
use name;
```

创建表

```sql
create table name(column_name column_type);
```

删除表

```sql
drop table name;
```

插入数据

```sql
use database_name;
insert into table_name (column_name) values (column_value);
```

查询数据

```sql
select column_name from table_name;
```

WHERE子句

```sql
# 在SELECT语句中
select column_name,column_name2 from table_name where condition [AND [OR]] condition2;
# WHERE不区分大小写，需区分时，带上关键字BINARY
select * from inf where binary name="josh";
```

更新数据UPDATE

```sql
update table_name set column_name=value;
```

删除数据DELETE

```sql
delete from table_name where column_name=value;
```

模糊匹配，以`%`作为模糊匹配的部分

```sql
# 查询包含value的行
select * from table_name where column_name like "%value%";
```

将两个select语句合并

```sql
select column_name from table_name
union [DISTINCT | ALL]
select column_name2 from table_name;
```

排序，DESC降序 ASC升序

```sql
select * from table_name
order by column_name desc
```

分类统计GROUP BY

```sql
select column_name,COUNT(*) from table_name group by column_name;
```

多表查询join（求交集）, left join（求左交并集）, right join（求右交并集）

```sql
select a.column_name from table_name a join table_name2 b on a.column_name2 = b.column_name2;
```

null值处理

```sql
select * from table_name where column_name is null;
select * from table_name where column_name is not null;
```

正则表达式

```sql
select * from table_name where column_name regexp "regexp"
```

使用事务

```sql
begin; # 开启事务
insert into table_name (column_name) values (coulmn_value);
commit; # 提交事务
rollback; # 回滚事务
```

调整表名、表头ALTER

```sql
# 查看表头
show columns from table_name;
# 新增表头
alter table table_name add column_name column_type default default_value;
# 删除表头
alter table table_name drop column_name;
# 修改表头
alter table table_name change column_name new_column_name column_type;
```

索引

```sql
# 查看索引
show index from table_name;
# 创建普通索引
create index index_name on table_name(column_name);
# 或者
alter table table_name add index index_name(column_name);
# 创建唯一索引(防重)
alter table table_name add unique index index_name(column_name);
# 创建主键
alter table table_name add primary key (column_name);
# 创建全文索引
alter table table_name add fulltext index_name(column_name);
# 删除索引
drop index index_name on table_name;
# 或者
alter table table_name drop index index_name;
alter table table_name drop primary key;
```

创建临时表

```sql
create temporary table table_name (column_name column_type);
```

复制表

```sql
# 获取表结构
show create table table_name;
# 复制查询结果，修改表名为table_name_clone
# 复制值
insert into table_name_clone (column_name) select column_name from table_name;
```

获取元数据

```sql
# 查看数据库版本
select version();
# 查看当前数据库名称
select database();
# 查看当前用户名
select user();
# 查看服务器状态
show status;
# 查看服务器配置变量
show variables;
```

序列使用

```sql
# 新增id主键自增序列
alter table table_name add id int unsigned not null auto_increment primary key;
# 获取最后插入的id
select LAST_INSERT_ID();
# 修改起始序列
alter table table_name auto_increment = init_value;
```

统计重复数据

```sql
# 获取同名人数
select column_name,count(*) as rep from table_name group by column_name having rep > 1
```

## 事务

一般来说，事务是必须满足4个条件（ACID）：原子性（Atomicity，或称不可分割性）、一致性（Consistency）、隔离性（Isolation，又称独立性）、持久性（Durability）。

- 原子性：一个事务（transaction）中的所有操作，要么全部完成，要么全部不完成，不会结束在中间某个环节。事务在执行过程中发生错误，会被回滚（Rollback）到事务开始前的状态，就像这个事务从来没有执行过一样。
- 一致性：在事务开始之前和事务结束以后，数据库的完整性没有被破坏。这表示写入的资料必须完全符合所有的预设规则，这包含资料的精确度、串联性以及后续数据库可以自发性地完成预定的工作。
- 隔离性：数据库允许多个并发事务同时对其数据进行读写和修改的能力，隔离性可以防止多个事务并发执行时由于交叉执行而导致数据的不一致。事务隔离分为不同级别，包括读未提交（Read uncommitted）、读提交（read committed）、可重复读（repeatable read）和串行化（Serializable）。
- 持久性：事务处理结束后，对数据的修改就是永久的，即便系统故障也不会丢失。

### 事务控制语句：

- BEGIN 或 START TRANSACTION 显式地开启一个事务；
- COMMIT 也可以使用 COMMIT WORK，不过二者是等价的。COMMIT 会提交事务，并使已对数据库进行的所有修改成为永久性的；
- ROLLBACK 也可以使用 ROLLBACK WORK，不过二者是等价的。回滚会结束用户的事务，并撤销正在进行的所有未提交的修改；
- SAVEPOINT identifier，SAVEPOINT 允许在事务中创建一个保存点，一个事务中可以有多个 SAVEPOINT；
- RELEASE SAVEPOINT identifier 删除一个事务的保存点，当没有指定的保存点时，执行该语句会抛出一个异常；
- ROLLBACK TO identifier 把事务回滚到标记点；
- SET TRANSACTION 用来设置事务的隔离级别。InnoDB 存储引擎提供事务的隔离级别有READ UNCOMMITTED、READ COMMITTED、REPEATABLE READ 和 SERIALIZABLE。

## 防止SQL注入

### 基础防范措施

防止SQL注入，我们需要注意以下几个要点：
1.永远不要信任用户的输入。对用户的输入进行校验，可以通过正则表达式，或限制长度；对单引号和 双"-"进行转换等。
2.永远不要使用动态拼装sql，可以使用参数化的sql或者直接使用存储过程进行数据查询存取。
3.永远不要使用管理员权限的数据库连接，为每个应用使用单独的权限有限的数据库连接。
4.不要把机密信息直接存放，加密或者hash掉密码和敏感的信息。
5.应用的异常信息应该给出尽可能少的提示，最好使用自定义的错误信息对原始错误信息进行包装
6.sql注入的检测方法一般采取辅助软件或网站平台来检测，软件一般采用sql注入检测工具jsky，网站平台就有亿思网站安全平台检测工具。MDCSOFT SCAN等。采用MDCSOFT-IPS可以有效的防御SQL注入，XSS攻击等。

## 相关nodejs框架

### ORM框架

ORM（object-relational-mapping）对象关系映射

- sequelize
- typeorm

## 相关文档

- [菜鸟教程](https://www.runoob.com/mysql/mysql-tutorial.html)



