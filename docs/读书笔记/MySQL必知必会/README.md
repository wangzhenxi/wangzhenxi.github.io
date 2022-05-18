
## 名词

- SQL: Structured Query Language 结构化查询语言
- DBMS： 数据库管理系统，如MySQL
- 模式： 用来描述数据库中特定的表以及整个数据库，即关于数据库和表的布局及特性的信息

## 基础知识

### 好习惯

#### 主键使用

- 不更新主键列中的值
- 不重用主键列的值
- 不在主键列中使用可能更改的值

### 语法

DISTINCT: 去重

```SQL
SELECT DISTINCT src_uid from relationship_table;
```

ORDER BY: 不指定排序方式时，默认为升序

### 通配符

LIKE操作符: 用于匹配值的一部分的特殊字符

百分号通配符: 表示任何非null字符出现任意次数

下划线通配符: 匹配单个字符

```SQL
SELECT * FROM animals where name LIKE 'jo%';
SELECT * FROM animals where name LIKE 'jos_';
```

#### 技巧

- 不要过度使用通配符，优先使用操作符
- 必要使用时，避免将通配符置于搜索模式的开始处
- 注意通配符的位置

### 正则表达式

REGEXP与LIKE操作符的差别是： LIKE需使用通配符才能返回行，正则需要正则表达式

```SQL
SELECT * FROM animals WHERE name REGEXP 'josh';
```

### 数据分组

GROUP BY: 按字段相同分组

WITH ROLLUP: 按分组汇总

HAVING: 按条件过滤分组，WHERE过滤行，HAVING过滤组

```SQL
SELECT type, age FROM animals GROUP BY type WITH ROLLUP;
SELECT type, age FROM animals GROUP BY type HAVING age > 10;
```

#### 技巧

- 不可依赖GROUP BY的默认排序，使用时一定要使用ORDER BY进行排序

### 联结

外键: 外键为某表的一列，它包含另一个表的主键值

笛卡儿积: 由`没有联结条件`的表关系返回的结果为笛卡儿积。检索出的行的数目将是第一个表中的行数乘以第二个表中的行数。所以每个联结都需要WHERE筛选条件。

```SQL
SELECT persons.name, age
FROM persons, infs;
```

#### 内部联结

INNER JOIN: 和FROM相近，但指定联结条件时使用的是ON而非WHERE，用该语法以确保不会忘记联结条件，提升性能

```SQL
SELECT persons.name, age
FROM persons
INNER JOIN infs
ON persons.name = infs.name;
```

#### 自联结

通过自联结代替子查询

```SQL
# 子查询
SELECT *
FROM persons
WHERE name IN (
    SELECT name
    FROM infs
);

# 自联结
SELECT persons.*
FROM persons, infs
WHERE persons.name = infs.name;
```

#### 自然联结

一次查询中，一个列名只会出现一次，需人为保证不重复。

#### 外部联结

通过`LEFT`或`RIGHT`关键字，指定包括其所有行的表

```SQL
SELECT persons.name, age
FROM persons
LEFT OUTER JOIN infs
ON persons.name = infs.name;
```

### 组合

通过`UNION`连接多条复杂查询语句，返回结果会去重，若需不去重，使用`UNION ALL`。只允许最后一条查询语句带上`ORDER BY`子句

```SQL
SELECT name FROM persons WHERE created_at < 200
UNION
SELECT name FROM infs WHERE age < 20;
```

### 插入数据

#### 性能优化

插入SQL可能很耗时，会降低处理SELECT语句的性能，可以通过`LOW_PRIORITY`降低语句优先级

```SQL
INSERT LOW_PRIORITY INTO persons
(name)
VALUES
(josh)
```

#### 插入检索出的数据

通过`INSERT SELECT`组合语句实现

```SQL
INSERT INTO new_persons
(name)
SELECT
name
FROM persons
```

### 更新多行

```SQL
UPDATE persons
SET age = 18, weight = 130
WHERE name in (josh, kevin);
```

### 删除数据

```SQL
DELETE FROM persons
WHERE name = josh;
```

### 创建表

#### 数据库引擎

- InnoDB: 一个可靠的事务处理引擎，不支持全文本搜索
- MyISAM: 一个性能极高的引擎，它支持全文本搜索，但不支持事务处理
- MEMORY: 功能同MyISAM，数据存储于内存而非硬盘

#### 更新表

```SQL
# 新增列
ALTER TABLE persons
ADD weight CHAR(20);

# 删除列
ALTER TABLE persons
DROP COLUMN weight;

# 删除表
DROP TABLE persons;

# 重命名表
RENAME TABLE new_persons TO persons;
```

当更新的列比较多，需要建新表时：

- 用新的列布局创建一个新表
- 使用`INSERT SELECT`语句
- 校验包含所需数据的新表
- 重命名旧表
- 用旧表原名重命名新表
- 根据需要创建触发器、存储过程、索引和外键

### 视图

好处：

- 复用SQL
- 可简化复杂SQL的操作
- 使用表的组成部分而不是整个表
- 保护数据，可给用户授权视图
- 更改数据格式和表示，视图可返回与底层表的表示和格式不同的数据

#### 语法

`CREATE VIEW` 创建视图

```SQL
CREATE VIEW view_name AS
SELECT cust_name, order_name
FROM customers, orders
WHERE customers.cust_id = orders.cust_id;
```

`SHOW CREATE VIEW viewname` 查看视图SQL

`DROP VIEW viewname` 删除视图

`CREATE OR REPLACE VIEW` 更新或新建视图，并非所有视图都可更新，使用了分组、联结、子查询、并、聚集函数等的不可更新

### 存储过程

#### 优劣

**优势:**

- 简单
- 安全
- 高性能

**劣势:**

- 一般不会分配存储过程创建权限
- 不适合分布式场景、弱事务场景
- 不易进行问题排查

#### 语法

```SQL
# 创建存储过程
CREATE PROCEDURE getWeight(
    IN name DECIMAL(8,2),
    IN age DECIMAL(8,2),
    OUT weight DECIMAL(8,2),
)
BEGIN
    SELECT userweight
    FROM persons
    WHERE username = name, userage = age
    INTO weight;
END;
# 调用存储过程
CALL getAvg(@max,@min,@average);
# 删除存储过程
DROP PROCEDURE getAvg;
```

### 游标

当需要在检索出来的行中，前进或后退一行或多行，就需要使用游标。游标是语句检索出来的结果集。

#### 语法

```SQL
DROP PROCEDURE test;

CREATE PROCEDURE test()
BEGIN
    DECLARE done INT DEFAULT 0; # 创建遍历结束符号
    DECLARE tmp INT default null; # 临时变量
    DECLARE c CURSOR # 创建游标
    FOR 
    SELECT age FROM table2;
    DECLARE CONTINUE HANDLER FOR SQLSTATE '02000' SET done=1; # 遍历完毕赋值 SQLSTATE '02000' 是未找到条件
    OPEN c; # 打开游标
    REPEAT # 重复遍历
        FETCH c INTO tmp; # 临时变量赋值
    UNTIL done END REPEAT; # 遍历结束
    CLOSE c; # 关闭游标
    SELECT tmp; # 输出临时变量
END;

CALL test();
```

### 触发器

当执行以下MYSQL语句时触发：

- INSERT
- UPDATE
- DELETE

#### 语法

```SQL
DROP TRIGGER ins; # 删除触发器

CREATE TRIGGER ins AFTER INSERT table1 # 创建insert触发器
FOR EACH ROW
INSERT INTO log
(name)
VALUES
(NEW.name); # NEW 指新插入的记录

UPDATE TRIGGER upt AFTER UPDATE table1
FOR EACH ROW
UPDATE INTO log
(name)
VALUES
(OLD.name); # OLD 指更新前的记录
```

### 事务

仅InnoDB数据库引擎支持，用于管理以下语句：

- INSERT
- UPDATE
- DELETE

#### 语法

```SQL
START TRANSACTION; # 开启事务
INSERT INTO table2
(id, name)
VALUES
(5,6);
SAVEPOINT step1; # 设置保留点1
INSERT INTO table2
(id, name)
VALUES
(6,7);
SAVEPOINT step2;
ROLLBACK TO step1; # 回滚到保留点1； 不指定时 全部回滚
COMMIT; # 提交事务
```

### 安全管理

#### 语法

```SQL
use mysql;
SELECT user FROM user; # 查看用户列表

CREATE USER ben IDENTIFIED BY 'passport'; # 创建用户和密码

DROP USER ben; # 删除用户

RENAME USER ben TO tester; # 重命名用户名

SET PASSPORT FOR tester = Password('newpassport'); # 修改他人密码

SET PASSPORT = Password('newpassport'); # 修改自己密码

SHOW GRANTS FOR tester; # 显示用户权限

GRANT SELECT ON test.* TO tester; # 授权数据库test的SELECT权限

GRANT ALL ON test.* TO tester; # 授权数据库test的所有权限

REVOKE SELECT ON test.* FROM tester; # 删除权限
```

#### 权限表

![c728eac606a79231f2d7681b24a03d73.jpeg](evernotecid://56CF36E1-12D1-4A55-B84F-B1B10BD7B8DD/appyinxiangcom/23743638/ENResource/p737)

## 基础函数

### 字符串处理

- CONCAT拼接字段

```SQL
SELECT CONCAT(name, '_', age) FROM animals;
```

- TRIM: 移除左右空格
- LTRIM: 移除左空格
- RTRIM: 移除右空格
- LEFT: 返回字符串左字符
- RIGHT: 返回字符串右字符
- LOCATE(a,b): a出现在b中的位置索引
- LENTH: 返回串的长度
- LOWER: 转为小写
- UPPER: 转为大写

### 时间处理

- ADDDATE(date, INTERVAL expr unit) 增加一个日期
- ADDTIME(expr1,expr2) 增加一个时间
- CURDATE() 返回当前日期
- CURTIME() 返回当前时间
- DATE(expr) 返回日期时间的日期部分
- DATEDIFF(expr1,expr2) 计算两个日期之差
- DATE_ADD 同ADDDATE
- DATE_FORMAT(date,format) 返回一个格式化的日期或时间戳
- YEAR(datetime)
- MONTH(datetime)
- DAY(datetime)
- DAYOFWEEK(datetime)
- HOUR(datetime)
- MINUTE(datetime)
- SECOND(datetime)
- TIME(datetime)
- NOW()

### 数值处理

- ABS(x) 返回一个数的绝对值
- EXP(x) 返回一个数的指数值
- SQRT(x) 返回一个数的平方根
- MOD(N,M) 返回除操作的余数
- COS(x) 返回一个弧度值的余弦
- SIN(x) 返回一个弧度值的正弦
- TAN(x) 返回一个弧度值的正切
- PI() 返回圆周率
- RAND() 返回随机数

### 聚集函数

- AVG(colname) 返回某列的平均值
- SUM(colname) 返回某列值之和
- COUNT(colname) 返回某列的行数 
- MAX(colname) 返回某列的最大值
- MIN(colname) 返回某列的最小值

## 数据库备份

可使用以下工具：

- mysqldump
- mysqlhotcopy

### mysqldump

#### 语法

```bash
mysqldump -u${username} -p${password}  --lock-all-tables --flush-logs ${db_name} > ${bakcup_path}/${file_name}.sql
```

## 参考文章

- [MySQL常用备份策略详解 —— mysqldump、mysqlpump 和 Xtrabackup](https://juejin.cn/post/6861127903736758285)
