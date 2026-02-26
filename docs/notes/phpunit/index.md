---
title: 'phpunit'
---

# phpunit

## 语法

### 约定

- 针对类 Class 的测试写在类 ClassTest 中。
- ClassTest（通常）继承自 PHPUnit\Framework\TestCase。
- 测试都是命名为 test* 的公用方法。或者@test 标注将其标记为测试方法。
- 在测试方法内，类似于 assertSame()这样的断言方法用来对实际值与预期值的匹配做出断言。

### docblock文档注释块

#### @depends

测试方法的依赖关系

```php
use PHPUnit\Framework\TestCase;

final class DependencyFailureTest extends TestCase
{
    public function testOne(): void
    {
        $this->assertTrue(false);
    }

    /**
     * @depends testOne
     */
    public function testTwo(): void
    {
    }
}
```

#### @dataProvider

数据供给器，优先级高于@depends

```php
use PHPUnit\Framework\TestCase;

final class DataTest extends TestCase
{
    /**
     * @dataProvider additionProvider
     */
    public function testAdd(int $a, int $b, int $expected): void
    {
        $this->assertSame($expected, $a + $b);
    }

    public function additionProvider(): array
    {
        return [
            [0, 0, 0],
            [0, 1, 1],
            [1, 0, 1],
            [1, 1, 3]
        ];
    }
}
```

与命名数据集一起使用，日志会更完整

```php
use PHPUnit\Framework\TestCase;

final class DataTest extends TestCase
{
    /**
     * @dataProvider additionProvider
     */
    public function testAdd(int $a, int $b, int $expected): void
    {
        $this->assertSame($expected, $a + $b);
    }

    public function additionProvider(): array
    {
        return [
            'adding zeros'  => [0, 0, 0],
            'zero plus one' => [0, 1, 1],
            'one plus zero' => [1, 0, 1],
            'one plus one'  => [1, 1, 3]
        ];
    }
}
```

使用返回 Iterator 对象的数据供给器

```php
use PHPUnit\Framework\TestCase;

final class DataTest extends TestCase
{
    /**
     * @dataProvider additionProvider
     */
    public function testAdd(int $a, int $b, int $expected): void
    {
        $this->assertSame($expected, $a + $b);
    }

    public function additionProvider(): CsvFileIterator
    {
        return new CsvFileIterator('data.csv');
    }
}
```






