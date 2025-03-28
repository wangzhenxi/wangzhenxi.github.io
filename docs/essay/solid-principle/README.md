---
title: 'SOLID原则'
---

# SOLID原则

## 目标

“创建可多人协作的、易于理解的、易读的以及可测试的代码。”

## 思考

- 什么是SOLID原则？
- 使用和不使用SOLID原则的代码，有什么不一样？
- 在DDD中如何使用SOLID原则？
- 如何练习SOLID原则？

## 什么是SOLID原则？

[维基百科](https://zh.wikipedia.org/wiki/SOLID_(%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E8%AE%BE%E8%AE%A1))： 在程序设计领域， SOLID（**单一功能、开闭原则、里氏替换、接口隔离以及依赖反转**）是由罗伯特·C·马丁在21世纪早期引入的记忆术首字母缩略字，指代了面向对象编程和面向对象设计的五个基本原则。当这些原则被一起应用时，它们**使得一个程序员开发一个容易进行软件维护和扩展的系统变得更加可能**。SOLID所包含的原则是通过引发程序设计者进行软件源代码的代码重构进行软件的代码异味清扫，从而使得软件清晰可读以及可扩展时可以应用的指南。SOLID被典型的应用在测试驱动开发上，并且是敏捷开发以及自适应软件开发的基本原则的重要组成部分。

![](./image/2025-03-27-09-17-43.png)

## 使用和不使用SOLID原则的代码，有什么不一样？

### 单一功能原则（SRP： Single Responsibility Principle）

一个对象（类、方法等）应该**只负责单一的职责**。如果一个对象承担了过多的职责，那么在修改其中一个功能时，可能会影响到其他功能，导致代码难以维护和测试。

#### 反例

```ts
// prompt: 按用户维度，不使用单一功能原则的例子，尽可能简单易懂
// 用户管理类 - 负责用户管理、报表生成、邮件发送、数据验证、数据库操作
class UserManager {
    private users: { name: string; email: string; registerDate: string }[] = [];

    addUser(user: { name: string; email: string; registerDate: string }) {
        // 添加用户
        this.users.push(user);
    }

    generateReport(): string {
        // 生成报表
        let report = '';
        for (const user of this.users) {
            report += `用户 ${user.name} 的信息:\n`;
            report += `邮箱: ${user.email}\n`;
            report += `注册时间: ${user.registerDate}\n`;
        }
        return report;
    }

    sendEmail(user: { email: string }, content: string) {
        // 发送邮件
        console.log(`向 ${user.email} 发送邮件: ${content}`);
    }

    validateUserData(user: { name?: string; email?: string }) {
        // 验证用户数据
        if (!user.name || !user.email) {
            throw new Error('用户数据不完整');
        }
    }

    saveToDatabase(user: { name: string }) {
        // 保存到数据库
        console.log(`保存用户 ${user.name} 到数据库`);
    }
}

// 使用示例
const userManager = new UserManager();
const user = {
    name: 'John',
    email: 'john@example.com',
    registerDate: '2024-03-27'
};

userManager.addUser(user);
userManager.validateUserData(user);
userManager.saveToDatabase(user);
userManager.sendEmail(user, '欢迎注册!');
console.log(userManager.generateReport());

// 问题:
// 1. 这个类承担了太多职责:用户管理、报表生成、邮件发送、数据验证、数据库操作
// 2. 如果需要修改报表格式或邮件发送方式，都需要修改这个类
// 3. 难以测试，因为一个类包含了多个功能点
// 4. 代码复用性差，比如其他地方需要单独的邮件发送功能就无法复用
```

#### 正例

```ts
// prompt： 对照上面的例子，使用单一功能原则的例子，尽可能简单易懂
// 用户管理类 - 只负责用户的基本操作
class UserManager {
    private users: { name: string; email: string; registerDate: string }[] = [];

    addUser(user: { name: string; email: string; registerDate: string }) {
        this.users.push(user);
    }

    getUser(email: string) {
        return this.users.find(user => user.email === email);
    }
}

// 用户验证类 - 只负责验证用户数据
class UserValidator {
    validateUser(user: { name?: string; email?: string }) {
        if (!user.name || !user.email) {
            throw new Error('用户数据不完整');
        }
    }
}

// 用户存储类 - 只负责数据库操作
class UserStorage {
    saveUser(user: { name: string }) {
        console.log(`保存用户 ${user.name} 到数据库`);
    }
}

// 报表生成类 - 只负责生成报表
class ReportGenerator {
    generateUserReport(users: { name: string; email: string; registerDate: string }[]): string {
        let report = '用户报表:\n';
        for (const user of users) {
            report += `用户 ${user.name} 的信息:\n`;
            report += `邮箱: ${user.email}\n`;
            report += `注册时间: ${user.registerDate}\n`;
        }
        return report;
    }
}

// 邮件服务类 - 只负责发送邮件
class EmailService {
    sendEmail(to: string, content: string) {
        console.log(`向 ${to} 发送邮件: ${content}`);
    }
}

// 使用示例
const userManager = new UserManager();
const validator = new UserValidator();
const storage = new UserStorage();
const reporter = new ReportGenerator();
const emailService = new EmailService();

const user = {
    name: 'John',
    email: 'john@example.com',
    registerDate: '2024-03-27'
};

// 每个类都专注于自己的职责
validator.validateUser(user);
userManager.addUser(user);
storage.saveUser(user);
emailService.sendEmail(user.email, '欢迎注册!');
console.log(reporter.generateUserReport(userManager.users));

// 好处:
// 1. 每个类都有单一的职责，代码更清晰
// 2. 易于维护，修改某个功能只需要改对应的类
// 3. 易于测试，可以独立测试每个功能
// 4. 代码复用性强，比如EmailService可以被其他模块使用
```

### 开闭原则（OCP： Open/Closed Principle）

软件实体（类、模块、函数等）应该**对扩展开放**，**对修改关闭**。也就是说，当需要添加新功能时，应该尽量不修改原有代码，而是通过扩展的方式来实现。

#### 反例

```ts
// prompt: 按用户维度，不使用开闭原则的例子，尽可能简单易懂
// 用户管理类 - 负责用户管理、报表生成
class UserManager {
    private users: { name: string; email: string; registerDate: string }[] = [];

    addUser(user: { name: string; email: string; registerDate: string }) {
        this.users.push(user);
    }

    getUserReport(type: string): string {
        if (type === 'basic') {
            return this.users.map(user => `用户: ${user.name}`).join('\n');
        } else if (type === 'detailed') {
            return this.users.map(user => `用户: ${user.name}, 邮箱: ${user.email}, 注册时间: ${user.registerDate}`).join('\n');
        } else {
            throw new Error('未知的报表类型');
        }
    }
}

// 使用示例
const userManager = new UserManager();
userManager.addUser({ name: 'John', email: 'john@example.com', registerDate: '2024-03-27' });
userManager.addUser({ name: 'Jane', email: 'jane@example.com', registerDate: '2024-03-28' });

console.log(userManager.getUserReport('basic'));
console.log(userManager.getUserReport('detailed'));

// 问题:
// 1. 如果需要添加新的报表类型，比如"统计报表"，必须修改getUserReport方法，违反开闭原则。
// 2. 随着报表类型的增加，getUserReport方法会变得越来越复杂。
```

#### 正例

```ts
// prompt: 对照上面的例子，使用开闭原则的例子，尽可能简单易懂
// 报表生成器接口
abstract class ReportGenerator {
    abstract generate(users: { name: string; email: string; registerDate: string }[]): string;
}

// 基本报表生成器
class BasicReportGenerator extends ReportGenerator {
    generate(users: { name: string; email: string; registerDate: string }[]): string {
        return users.map(user => `用户: ${user.name}`).join('\n');
    }
}

// 详细报表生成器
class DetailedReportGenerator extends ReportGenerator {
    generate(users: { name: string; email: string; registerDate: string }[]): string {
        return users.map(user => `用户: ${user.name}, 邮箱: ${user.email}, 注册时间: ${user.registerDate}`).join('\n');
    }
}

// 用户管理类
class UserManager {
    private users: { name: string; email: string; registerDate: string }[] = [];

    addUser(user: { name: string; email: string; registerDate: string }) {
        this.users.push(user);
    }

    generateReport(generator: ReportGenerator): string {
        return generator.generate(this.users);
    }
}

// 使用示例
const userManager = new UserManager();
userManager.addUser({ name: 'John', email: 'john@example.com', registerDate: '2024-03-27' });
userManager.addUser({ name: 'Jane', email: 'jane@example.com', registerDate: '2024-03-28' });

const basicReport = new BasicReportGenerator();
const detailedReport = new DetailedReportGenerator();

console.log(userManager.generateReport(basicReport));
console.log(userManager.generateReport(detailedReport));

// 好处:
// 1. 添加新报表类型时，只需创建一个新的报表生成器类，而无需修改现有代码。
// 2. 遵循开闭原则，代码更易于扩展和维护。
```

### 里氏替换原则（LSP： Liskov Substitution Principle）

子类必须能够替换掉父类，并且程序的行为不变。也就是说，子类**可以扩展父类的功能**，但**不能改变父类原有的功能**。

#### 反例

```ts
// prompt: 按用户维度，不使用里氏替换原则的例子，尽可能简单易懂
// 父类 - 用户
class User {
    constructor(public name: string, public email: string) {}

    getDetails(): string {
        return `用户: ${this.name}, 邮箱: ${this.email}`;
    }
}

// 子类 - 特殊用户
class SpecialUser extends User {
    constructor(name: string, email: string, public discount: number) {
        super(name, email);
    }

    getDetails(): string {
        // 子类改变了父类的行为
        return `特殊用户: ${this.name}, 邮箱: ${this.email}, 折扣: ${this.discount}%`;
    }
}

// 使用示例
function printUserDetails(user: User) {
    console.log(user.getDetails());
}

const user = new User('John', 'john@example.com');
const specialUser = new SpecialUser('Jane', 'jane@example.com', 20);

printUserDetails(user); // 输出: 用户: John, 邮箱: john@example.com
printUserDetails(specialUser); // 输出: 特殊用户: Jane, 邮箱: jane@example.com, 折扣: 20%

// 问题:
// 1. SpecialUser改变了User类的行为，违反了里氏替换原则。
// 2. 如果其他代码依赖于User类的行为（getDetails），可能会因为SpecialUser的行为改变而导致问题。
```

#### 正例

```ts
// prompt: 对照上面的例子，使用里氏替换原则的例子，尽可能简单易懂
// 父类 - 用户
class User {
    constructor(public name: string, public email: string) {}

    getDetails(): string {
        return `用户: ${this.name}, 邮箱: ${this.email}`;
    }
}

// 子类 - 特殊用户
class SpecialUser extends User {
    constructor(name: string, email: string, public discount: number) {
        super(name, email);
    }

    getSpecialDetails(): string {
        return `${super.getDetails()}, 折扣: ${this.discount}%`;
    }
}

// 使用示例
function printUserDetails(user: User) {
    console.log(user.getDetails());
}

const user = new User('John', 'john@example.com');
const specialUser = new SpecialUser('Jane', 'jane@example.com', 20);

printUserDetails(user); // 输出: 用户: John, 邮箱: john@example.com
printUserDetails(specialUser); // 输出: 用户: Jane, 邮箱: jane@example.com

// 好处:
// 1. SpecialUser没有改变User类的行为，遵循了里氏替换原则。
// 2. 子类扩展了父类的功能，而不是修改父类的行为。
```

### 接口隔离原则（ISP： Interface Segregation Principle）

接口设计应该遵守最小接口原则，**避免实现不需要的方法**，应该把胖接口中的方法分组，然后用多个接口替代它，让每一个接口服务于一个子模块。

#### 反例

```ts
// prompt: 按用户维度，不使用接口隔离原则的例子，尽可能简单易懂
// 一个胖接口，包含了所有用户相关的操作
interface UserOperations {
    addUser(user: { name: string }): void;
    deleteUser(userId: string): void;
    generateReport(): string;
    sendEmail(user: { email: string }, content: string): void;
}

// 实现类 - 只需要部分功能，但必须实现整个接口
class BasicUserManager implements UserOperations {
    addUser(user: { name: string }): void {
        console.log(`添加用户: ${user.name}`);
    }

    deleteUser(userId: string): void {
        console.log(`删除用户ID: ${userId}`);
    }

    generateReport(): string {
        // 不需要此功能，但必须实现
        throw new Error('不支持生成报表');
    }

    sendEmail(user: { email: string }, content: string): void {
        // 不需要此功能，但必须实现
        throw new Error('不支持发送邮件');
    }
}

// 使用示例
const userManager = new BasicUserManager();
userManager.addUser({ name: 'John' });

// 问题:
// 1. BasicUserManager只需要部分功能，却被迫实现整个接口。
// 2. 如果接口增加新方法，BasicUserManager也必须更新，导致维护困难。
// 3. 违反接口隔离原则，接口设计不够精细。
```

#### 正例

```ts
// prompt: 对照上面的例子，使用接口隔离原则的例子，尽可能简单易懂
// 将胖接口拆分为多个小接口
interface UserManagement {
    addUser(user: { name: string }): void;
    deleteUser(userId: string): void;
}

interface ReportGeneration {
    generateReport(): string;
}

interface EmailService {
    sendEmail(user: { email: string }, content: string): void;
}

// 实现类 - 只实现需要的接口
class BasicUserManager implements UserManagement {
    addUser(user: { name: string }): void {
        console.log(`添加用户: ${user.name}`);
    }

    deleteUser(userId: string): void {
        console.log(`删除用户ID: ${userId}`);
    }
}

// 使用示例
const userManager = new BasicUserManager();
userManager.addUser({ name: 'John' });

// 好处:
// 1. BasicUserManager只实现了需要的接口，避免了不必要的方法。
// 2. 接口设计更精细，符合接口隔离原则。
// 3. 易于维护，添加新功能不会影响现有实现类。
```

### 依赖反转原则（DIP： Dependency Inversion Principle）

高层模块不应该依赖于底层模块，两者都应该**依赖于抽象**。

#### 反例

```ts
// prompt: 按用户维度，不使用依赖反转原则的例子，尽可能简单易懂
// 底层模块 - 邮件服务
class EmailService {
    sendEmail(to: string, content: string) {
        console.log(`向 ${to} 发送邮件: ${content}`);
    }
}

// 高层模块 - 用户管理
class UserManager {
    private emailService = new EmailService(); // 直接依赖具体实现

    notifyUser(email: string, message: string) {
        this.emailService.sendEmail(email, message);
    }
}

// 使用示例
const userManager = new UserManager();
userManager.notifyUser('john@example.com', '欢迎注册!');

// 问题:
// 1. UserManager直接依赖于EmailService的具体实现，违反了依赖反转原则。
// 2. 如果需要更换邮件服务实现，比如改用第三方邮件服务，需要修改UserManager的代码。
// 3. 高层模块和底层模块耦合度高，难以扩展和测试。
```

#### 正例

```ts
// prompt: 对照上面的例子，使用依赖反转原则的例子，尽可能简单易懂
// 定义抽象接口
interface EmailService {
    sendEmail(to: string, content: string): void;
}

// 实现具体的邮件服务
// 底层模块依赖于抽象接口
class BasicEmailService implements EmailService {
    sendEmail(to: string, content: string) {
        console.log(`向 ${to} 发送邮件: ${content}`);
    }
}

// 高层模块依赖于抽象接口
class UserManager {
    constructor(private emailService: EmailService) {}

    notifyUser(email: string, message: string) {
        this.emailService.sendEmail(email, message);
    }
}

// 使用示例
const emailService = new BasicEmailService();
const userManager = new UserManager(emailService);
userManager.notifyUser('john@example.com', '欢迎注册!');

// 好处:
// 1. UserManager依赖于EmailService接口，而不是具体实现，符合依赖反转原则。
// 2. 更换邮件服务实现时，只需提供新的实现类，而无需修改UserManager代码。
// 3. 高层模块和底层模块解耦，代码更易于扩展和测试。
```

