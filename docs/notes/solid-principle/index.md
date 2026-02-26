---
title: 'SOLID原则'
---

# SOLID原则

## 介绍

SOLID原则是一组面向对象设计的五个基本原则。目的是创建可多人协作的、易于理解的、易读的以及可测试的代码。

## 思考

- 什么是SOLID原则？
- 使用和不使用SOLID原则的代码，有什么不一样？
- SOLID原则对整体代码有什么影响？
- 如何在日常开发中应用SOLID原则？
- 如何在DDD中运用SOLID原则？

## 什么是SOLID原则？

[维基百科](https://zh.wikipedia.org/wiki/SOLID_(%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E8%AE%BE%E8%AE%A1))： 在程序设计领域， SOLID（**单一功能、开闭原则、里氏替换、接口隔离以及依赖反转**）是由罗伯特·C·马丁在21世纪早期引入的记忆术首字母缩略字，指代了面向对象编程和面向对象设计的五个基本原则。当这些原则被一起应用时，它们**使得一个程序员开发一个容易进行软件维护和扩展的系统变得更加可能**。SOLID所包含的原则是通过引发程序设计者进行软件源代码的代码重构进行软件的代码异味清扫，从而使得软件清晰可读以及可扩展时可以应用的指南。SOLID被典型的应用在测试驱动开发上，并且是敏捷开发以及自适应软件开发的基本原则的重要组成部分。

![](./image/2025-03-27-09-17-43.png)

### 设计的臭味—腐坏软件的气味

> 使用SOLID原则可以帮助我们避免软件腐坏。

当软件出现下面任何一种气味时，就表明软件正在腐坏中。
1. 僵化(Rigidity)：很难对系统进行改动，因为每处改动都会迫使系统其它部分进行许多改动。
2. 脆弱(Fragility)：对系统的改动会破坏在概念上与改动本身无关的其它地方。
3. 牢固(Immobility)：很难把系统的缠结解开，成为可被其它系统复用的组件。
4. 粘滞(Viscosity)：设计耦合在一起，导致代码的变更需要在多个地方进行。
5. 不必要的复杂性(Needless Complexity)：设计中包含没有直接好处的基础设施。
6. 不必要的重复(Needless Repetition)：设计中包含重复的结构，而该重复的结构本可以统一在单一的抽象之下。
7. 晦涩(Opacity)：很难阅读、理解。没有很好地表达出意图。

## 使用和不使用SOLID原则的代码，有什么不一样？

### 单一功能原则（SRP： Single Responsibility Principle）

> 在SRP的语境中，我们把职责定义为“变化的原因”(a reason for change)。如果你有超过一个的动机去改变一个类，那么这个类就具有多种职责。

一个对象（类、方法等）应该**只负责单一的职责**。如果一个对象承担了过多的职责，那么在修改其中一个功能时，可能会影响到其他功能，导致代码难以维护和测试。

#### 如何识别职责？

- 如果一个功能的变化，不应该影响另一个功能，那么就可以分离为不同职责。
- 如果一个功能的变化，应该影响另一个功能，那么识别为同一职责。

举例： 数据持久化和业务规则，业务规则往往会频繁变化，而持久化往往不会频繁变化

![](./image/2025-03-31-08-48-12.png)

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

#### 如何通过扩展而非修改来实现新功能？

在实现功能时：
- 确定系统中哪些功能或需求可能会变化，这些部分需要设计为可扩展的。通过将变化的部分封装在独立的模块中，而稳定的部分保持不变。
- 可利用多态性，让子类可以通过不同的实现来满足不同的需求，而无需修改父类代码。
- 使用抽象封闭变化。开发人员应该仅仅对程序中呈现出频繁变化的那些部分进行抽象。拒绝不成熟的抽象和抽象本身同等重要。

当需求变化时：
- 思考是否可以通过添加新的类或模块来实现新功能，而不需要修改已有的代码。
- 尽早感知到需求变化的可能性，应尽早、尽快、经常发布，尽可能频繁地让用户使用新功能。

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
interface ReportGenerator {
    generate(users: { name: string; email: string; registerDate: string }[]): string;
}

// 基本报表生成器
class BasicReportGenerator implements ReportGenerator {
    generate(users: { name: string; email: string; registerDate: string }[]): string {
        return users.map(user => `用户: ${user.name}`).join('\n');
    }
}

// 详细报表生成器
class DetailedReportGenerator implements ReportGenerator {
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

> 开闭原则的实现依赖于里氏替换原则。

子类必须能够替换掉父类，并且程序的行为不变。也就是说，子类**可以扩展父类的功能**，但**不能改变父类原有的功能**。

#### 如何满足里氏替换原则？

- 基于契约设计（Design By Contract，DBC）： 可设定前置条件（入参的参数类型）和后置条件（函数的返回值），当子类实现时，前置条件不能比父类更严格，后置条件不能比父类更宽松。

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

接口设计应该遵守最小接口原则，**避免实现不需要的方法**，应该把“胖”接口中的方法分组，然后用多个接口替代它，让每一个接口服务于一个子模块。

#### 如何识别胖接口？

- 派生类不应该被迫依赖于它们不需要的方法： 如果一个接口包含了多个方法，而某些实现类只需要其中的一部分，那么这个接口就是一个胖接口。

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

#### 如何实现依赖反转？

- 层次化： 将接口按高层次和低层次分开
- 倒置接口所有权： 高层次调用低层次的接口，而不是低层次调用高层次的接口
- 依赖于抽象： 应用程序中所写的大多数具体类都具有不稳定性，所以高层次类不能直接依赖于这些不稳定的具体类。通过抽象的方式，把它们隐藏到抽象接口背后，就可以隔离这种不稳定性。

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

## SOLID原则对整体代码有什么影响？

### 总结原则

- 单一功能原则（SRP）：强调单一职责，避免类过于庞大。
- 开闭原则（OCP）：代码对扩展开放，对修改关闭。
- 里氏替换原则（LSP）：子类可完全替代父类。
- 接口隔离原则（ISP）：避免过大接口，提供专用接口。
- 依赖反转原则（DIP）：高层模块不依赖低层实现，依赖抽象。

### 综合优势

- 提高代码可维护性：代码模块化，职责清晰，易于维护。
- 增强扩展性：通过扩展而非修改，方便添加新功能。
- 降低耦合性：模块之间依赖抽象，减少紧耦合。
- 提升可测试性：依赖注入和接口导向使得单元测试更容易。

## 如何在日常开发中应用SOLID原则？

### 刻意练习

> 我们除了去看优质的开源项目，了解其SOLID原则的体现外。还可以通过在日常开发工作中练习。

在活动相关业务中，有多种业务逻辑：
- 对接不同服务，常见的有发奖、抽奖、勋章、邀请、消息推送等；
- 对接不同存储介质，有mysql、redis等；
- 使用不同工具，有接口参数校验工具、并发控制工具等；
- 代码有各种业务相关常量配置；

我们需分离关注点，将业务逻辑、数据访问等分开处理。例如：
- 单一功能原则： 如果接入新的服务，比如数据存储、消息推送等拆分为不同的服务实现；判断是否已发奖的逻辑，也放到对应服务实现；
- 开闭原则： 如果有个性化功能，比如拉流水，不同活动可能用流水展示于现金券数量、抽奖机会数量等，可有个基类拉流水，再用子类实现个性化过滤和返回；
- 里氏替换原则： 如果实现上需要修改功能，比如抽奖流水接口调整为仅返回剩余抽奖机会，修改了接口返回字段，可用新的接口实现，不要重写原有接口；
- 接口隔离原则： 将胖接口拆分为多个小接口，避免实现不需要的方法。比如邀请服务有邀请、发放邀请人奖励，如果只需要做邀请操作不需要发奖时，会有不必要的实现，则可拆分为邀请接口、奖励接口；
- 依赖反转原则： 如果服务依赖于具体实现，比如发奖服务依赖于奖励服务或者勋章服务实现，可将具体的服务实现抽象为接口，服务依赖于接口，而奖励和勋章服务的发奖接口可从外部传入

### 请教AI

- 编码时可以问下AI是否满足SOLID原则或者让他按照SOLID原则进行编码。
![](./image/2025-03-28-09-34-31.png)
![](./image/2025-03-28-09-35-39.png)

## 如何在DDD中运用SOLID原则？

### 单一功能原则

- ​核心思想​：每个软件实体仅承担一个职责。
- ​DDD应用​：
  - ​限界上下文（Bounded Context）​​：将复杂业务拆分为独立子领域，每个上下文内模型和服务的职责明确。例如，电商系统中"订单管理"和"支付处理"划分为不同上下文，避免耦合。
  - ​聚合根（Aggregate Root）​​：聚合根仅管理直接关联的实体和值对象。例如，订单聚合根仅处理订单状态和订单项，不涉及支付或物流逻辑。
  - ​领域服务分层​：通过分层架构（用户接口层、应用层、领域层、基础设施层）隔离业务与技术实现，确保领域层仅关注业务逻辑。

#### 示例

订单聚合根（OrderAggregate）​​： 管理订单生命周期（创建/支付/取消）及订单项明细

```ts
class OrderAggregate {
  private id: string;
  private items: OrderItem[];
  private status: "CREATED" | "PAID" | "CANCELED";

  // 仅处理订单状态变更
  cancel() {
    if (this.status !== "CREATED") throw new Error("不可取消");
    this.status = "CANCELED";
    // ​单一职责体现​：订单聚合根不直接操作库存，仅通过事件驱动其他上下文。
    DomainEvent.publish(new OrderCancelledEvent(this.id)); // 发布领域事件通知库存恢复
  }
}
```

​库存聚合根（InventoryAggregate）​​： 维护商品库存数量及扣减/恢复逻辑

```ts
class InventoryAggregate {
  private productId: string;
  private stock: number;

  // 仅处理库存变更
  reduceStock(quantity: number) {
    if (this.stock < quantity) throw new Error("库存不足");
    this.stock -= quantity;
  }

  // 响应订单取消事件
  @EventHandler(OrderCancelledEvent)
  handleOrderCancelled(event: OrderCancelledEvent) {
    const order = OrderRepository.get(event.orderId);
    // ​单一职责体现​：库存聚合根仅关注库存一致性，不耦合订单业务规则。
    order.items.forEach(item => this.restoreStock(item.productId, item.quantity));
  }
}
```

### 开闭原则

- 核心思想​：对扩展开放，对修改封闭。
- ​DDD应用​：
  - 抽象接口定义​：通过接口定义领域能力，例如支付服务接口允许扩展新的支付方式（如支付宝、微信支付），无需修改现有代码。
  - ​领域事件（Domain Events）​​：通过事件驱动架构解耦业务逻辑。例如，订单创建后触发库存扣减事件，新增业务只需订阅事件而非修改核心流程。
  - ​策略模式​：在复杂业务规则（如折扣策略）中，通过策略接口实现动态扩展，避免硬编码条件分支。

#### 示例

设计一个支持多种支付方式（微信、支付宝、银行卡）的系统，未来可能新增其他支付方式（如数字货币支付）。

1. 抽象接口定义​： 通过接口定义支付行为的契约，所有支付方式实现该接口

```ts
// 支付策略接口（抽象层）
interface PaymentStrategy {
  pay(amount: number): void;
}

// 微信支付策略（具体实现）
class WechatPayStrategy implements PaymentStrategy {
  pay(amount: number) {
    console.log(`微信支付成功：${amount}元`);
    DomainEvent.publish(new PaymentSuccessEvent("WechatPay", amount)); // 发布领域事件
  }
}

// 支付宝支付策略（具体实现）
class AlipayStrategy implements PaymentStrategy {
  pay(amount: number) {
    console.log(`支付宝支付成功：${amount}元`);
    DomainEvent.publish(new PaymentSuccessEvent("Alipay", amount));
  }
}
```

2. 策略模式应用​： 支付上下文类通过注入策略实现灵活切换

```ts
class PaymentContext {
  constructor(private strategy: PaymentStrategy) {}

  executePayment(amount: number) {
    this.strategy.pay(amount);
  }
}

// 使用示例
const wechatPay = new PaymentContext(new WechatPayStrategy());
wechatPay.executePayment(100); // 输出：微信支付成功：100元
```

3. 领域事件扩展​： 新增支付方式时，只需扩展策略类并发布事件，无需修改其他代码

```ts
// 新增数字货币支付策略
class CryptoPayStrategy implements PaymentStrategy {
    pay(amount: number) {
        console.log(`数字货币支付成功：${amount}元`);
        DomainEvent.publish(new PaymentSuccessEvent("CryptoPay", amount));
  }
}

// 事件监听模块（如订单服务）
DomainEvent.subscribe(PaymentSuccessEvent, (event) => {
    console.log(`订单已更新：${event.type}支付完成，金额${event.amount}`);
});
// 开闭原则体现​: ​
// 对扩展开放​，新增支付方式只需添加 CryptoPayStrategy 类并实现接口。
// 对修改关闭​，支付上下文 PaymentContext 和事件监听逻辑无需修改
```

### 里氏替换原则

- 核心思想​：子类可无缝替换父类。
- ​DDD应用​：
  - ​资源库（Repository）实现​：不同存储方式（如数据库、缓存）需遵循统一资源库接口。例如，MySQL和Redis实现的订单资源库可互换，不影响领域层逻辑。
  - ​值对象（Value Object）设计​：确保值对象的行为一致性。例如，地址值对象的子类（如国际地址）需保持相同的行为契约。
  - ​领域服务接口约束​：子类实现领域服务接口时需遵循前置/后置条件，例如支付服务必须保证事务一致性。

#### 示例

资源库（Repository）的设计： 通过抽象接口定义资源库操作，确保不同实现（如数据库、缓存）可替换而不影响业务逻辑。

```ts
// 抽象接口定义（基类约束）
interface OrderRepository {
  findById(orderId: string): Promise<OrderAggregate>;
  save(order: OrderAggregate): Promise<void>;
}

// 具体实现（子类可替换）
class MySQLOrderRepository implements OrderRepository {
  async findById(orderId: string) {
    // 从MySQL查询订单聚合根
    return await db.query("SELECT * FROM orders WHERE id = ?", [orderId]);
  }
}

class MongoOrderRepository implements OrderRepository {
  async findById(orderId: string) {
    // 从MongoDB查询订单聚合根
    return await mongo.collection("orders").findOne({ _id: orderId });
  }
}

// 使用示例
async function processOrder(orderId: string, repository: OrderRepository) {
  const order = await repository.findById(orderId);
  // 处理订单逻辑
}
const mysqlRepo = new MySQLOrderRepository();
const mongoRepo = new MongoOrderRepository();
processOrder("123", mysqlRepo); // 使用MySQL实现
processOrder("456", mongoRepo); // 使用MongoDB实现
// 里氏替换原则体现​：
// 调用方仅依赖OrderRepository接口，无论底层是MySQL还是MongoDB实现，均不影响业务逻辑（如订单查询）的正确性。
// 新增实现（如Redis缓存层）时无需修改现有代码，仅需扩展接口实现即可。
```

值对象（Value Object）的设计： 通过无副作用操作，确保值对象子类不破坏父类行为。

```ts
// 基础值对象（父类）
class Address {
  constructor(
    public readonly province: string,
    public readonly city: string
  ) {}

  // 无副作用方法，返回新实例
  updateCity(newCity: string): Address {
    return new Address(this.province, newCity);
  }
}

// 扩展值对象（子类）
class DetailedAddress extends Address {
  constructor(
    province: string,
    city: string,
    public readonly street: string
  ) {
    super(province, city);
  }

  // 不重写父类方法，仅扩展新方法
  getFullAddress(): string {
    return `${this.province}${this.city}${this.street}`;
  }
}

// 使用示例
const address = new Address("广东省", "深圳市");
const newAddress = address.updateCity("广州市");
const detailedAddress = new DetailedAddress("广东省", "深圳市", "南山区");
// 里氏替换原则体现​：DetailedAddress继承Address后，所有使用Address的代码（如调用updateCity()）仍能正确运行，因为子类未覆盖父类方法。
const newDetailedAddress = detailedAddress.updateCity("广州市");
console.log(detailedAddress.getFullAddress()); // 输出：广东省深圳市南山区
```

领域服务接口约束： 通过接口定义领域服务的行为契约，确保不同策略实现可互换。

```ts
// 抽象服务接口（基类约束）
interface PaymentService {
  pay(amount: number): Promise<PaymentResult>;
}

// 具体策略实现（子类可替换）
class WechatPayService implements PaymentService {
  async pay(amount: number) {
    // 调用微信支付API
    return { success: true, transactionId: "WX-123" };
  }
}

class AlipayService implements PaymentService {
  async pay(amount: number) {
    // 调用支付宝API
    return { success: true, transactionId: "ALI-456" };
  }
}

// 领域服务调用方（依赖抽象）
class OrderPaymentHandler {
  // 里氏替换原则体现​：OrderPaymentHandler仅依赖PaymentService接口，可无缝切换微信支付或支付宝实现。
  constructor(private paymentService: PaymentService) {}

  async executePayment(order: OrderAggregate) {
    return this.paymentService.pay(order.totalAmount);
  }
}
```

### 接口隔离原则

- 核心思想​：客户端不应依赖不需要的接口。
- ​DDD应用​：
  - ​细粒度领域服务​：按业务能力拆分接口。例如，"订单查询服务"和"订单创建服务"分离，避免单一接口臃肿。
  - ​基础设施接口隔离​：数据库访问、消息队列等技术实现通过适配器模式封装，领域层仅依赖抽象接口。

#### 示例

订单服务需要支持创建、支付、物流跟踪等不同操作，但不同业务模块（如支付模块、物流模块）仅需部分接口能力。

```ts
// 按职责拆分领域服务接口​

// order-create-service.ts
// 订单创建接口（仅订单服务核心职责）
interface IOrderCreationService {
  createOrder(orderData: OrderDTO): Promise<OrderAggregate>;
}

// order-query-service.ts
// 订单支付接口（支付模块专用）
interface IOrderPaymentService {
  // 接口隔离原则体现​：
  // 支付模块无需感知订单创建或物流跟踪的逻辑，减少无关接口依赖。
  // 修改支付逻辑时，不影响其他模块。
  processPayment(orderId: string, paymentData: PaymentDTO): Promise<void>;
}

// order-query-service.ts
// 订单物流接口（物流模块专用）
interface IOrderLogisticsService {
  trackShipment(orderId: string): Promise<ShipmentStatus>;
}

// main.ts
// 使用示例
// 支付模块仅依赖支付接口
class PaymentModule {
  constructor(private paymentService: IOrderPaymentService) {}

  async handlePayment(orderId: string) {
    await this.paymentService.processPayment(orderId, { amount: 100 });
  }
}
```

多数据库与外部服务适配： 系统需支持不同数据库（MySQL、MongoDB）和第三方服务（如短信、支付网关）。

```ts
// 基础设施接口抽象
// 仓储接口（领域层定义）
interface IOrderRepository {
  findById(id: string): Promise<Order>;
  save(order: Order): Promise<void>;
}

// 消息队列接口（基础设施层抽象）
interface IMessagePublisher {
  publish(event: DomainEvent): Promise<void>;
}

// 具体实现隔离​：
// MySQL实现（写模型仓储）
// 接口隔离原则体现​：切换数据库或消息队列时，无需修改业务逻辑。
class MySQLOrderRepository implements IOrderRepository {
  async findById(id: string) {
    return mysql.query("SELECT * FROM orders WHERE id = ?", [id]);
  }
}

// RabbitMQ实现（消息发布）
// 接口隔离原则体现​：领域层仅依赖抽象接口，与具体技术实现解耦。
class RabbitMQPublisher implements IMessagePublisher {
  async publish(event: DomainEvent) {
    await rabbitmq.send("domain_events", event);
  }
}
```

### 依赖反转原则

> 拓展知识：
> - 六边形架构（[Hexagonal Architecture](https://en.wikipedia.org/wiki/Hexagonal_architecture_(software))）： 六边形架构或端口和适配器架构是软件设计中使用的一种架构模式。它旨在创建松散耦合的应用程序组件，这些组件可以通过端口和适配器轻松连接到其软件环境。这使得组件可以在任何级别进行更换，并促进测试自动化。

- 核心思想​：高层模块依赖抽象，而非具体实现。
- ​DDD应用​：
  - ​六边形架构（Hexagonal Architecture）​​：领域层位于核心，技术实现（如数据库、API）通过适配器注入，确保领域逻辑独立。
  - ​依赖注入（DI）​​：通过框架将资源库、外部服务等依赖注入领域层，例如订单服务依赖抽象的支付网关接口。
  - ​领域模型与技术解耦​：领域层定义接口，基础设施层实现。例如，领域事件发布接口由消息中间件（如Kafka）具体实现。

#### 示例

六边形架构（Hexagonal Architecture）通过端口（Port）和适配器（Adapter）​的对称性设计，天然支持依赖反转原则。其核心机制包括：

```ts
// 1. 端口定义抽象​：所有外部交互（如用户请求、数据库访问、第三方服务）均通过端口（接口）与核心业务逻辑通信。
// 领域层定义抽象接口（端口）
interface OrderRepository {
  findById(id: string): Promise<Order>;
  save(order: Order): Promise<void>;
}

// 高层模块（应用服务）
class OrderService {
  // 依赖反转原则体现： 高层模块依赖于抽象。
  constructor(private orderRepository: OrderRepository) {} // 依赖注入，OrderService依赖于OrderRepository接口

  async processOrder(orderId: string) {
    const order = await this.orderRepository.findById(orderId);
    // 处理订单逻辑
  }
}

// 2. 适配器实现细节​：基础设施层通过适配器实现端口接口，例如数据库操作
// 基础设施层实现适配器（依赖倒置）
class MySQLOrderRepository implements OrderRepository {
  // 依赖反转原则体现： 底层模块依赖于抽象。
  async findById(id: string) {
    return mysql.query("SELECT * FROM orders WHERE id = ?", [id]);
  }
}

// 使用示例
const orderRepository = new MySQLOrderRepository();
// 通过依赖注入，OrderService使用MySQL实现
const orderService = new OrderService(orderRepository);
orderService.processOrder("123");
```

领域模型与技术解耦

```ts
// 1. 定义领域模型
class User {
  constructor(
    public readonly id: string,
    public name: string,
    public email: string
  ) {}

  changeEmail(newEmail: string) {
    this.email = newEmail;
  }
}

// 2. 定义仓储接口（领域层）
interface UserRepository {
  // 依赖反转体现： ​领域模型​ User 无技术细节（如数据库注解）。
  findById(id: string): Promise<User>;
  save(user: User): Promise<void>;
}

// 3. 基础设施层实现（TypeORM）
import { Entity, Column } from "typeorm";

@Entity()
class UserDAO {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  // 数据库模型转领域模型
  toDomain(): User {
    return new User(this.id, this.name, this.email);
  }

  // 领域模型转数据库模型
  static fromDomain(user: User): UserDAO {
    const dao = new UserDAO();
    dao.id = user.id;
    dao.name = user.name;
    dao.email = user.email;
    return dao;
  }
}

// 4. 仓储实现（适配器）
class TypeORMUserRepository implements UserRepository {
  // 依赖反转体现： 仓储接口​ 由基础设施层实现，领域层不感知具体数据库。
  async findById(id: string) {
    const dao = await dataSource.getRepository(UserDAO).findOneBy({ id });
    return dao?.toDomain();
  }

  async save(user: User) {
    await dataSource.getRepository(UserDAO).save(UserDAO.fromDomain(user));
  }
}
```

## 知识衍生

- [UML图的六种箭头](https://blog.csdn.net/ASCIIZUO/article/details/126638034)
