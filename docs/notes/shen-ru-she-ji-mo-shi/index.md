---

title: '深入设计模式'

---

# 深入设计模式

## 创建型模式

提供创建对象的机制， 能够提升已有代码的灵活性和可复用性。

### 1. 工厂方法 (Factory Method)
工厂方法模式通过定义一个创建对象的接口，但由子类决定要实例化的类是哪一个。它使得一个类的实例化延迟到其子类。

```javascript
class Product {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class ProductFactory {
  createProduct(type) {
    switch (type) {
      case 'A':
        return new Product('Product A');
      case 'B':
        return new Product('Product B');
      default:
        return new Product('Default Product');
    }
  }
}

// 使用工厂方法创建产品
const factory = new ProductFactory();
const productA = factory.createProduct('A');
console.log(productA.getName()); // Output: Product A
```

### 2. 抽象工厂 (Abstract Factory)
抽象工厂模式提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类。

```javascript
class ProductA1 {
  info() {
    return 'Product A1';
  }
}

class ProductA2 {
  info() {
    return 'Product A2';
  }
}

class ProductB1 {
  info() {
    return 'Product B1';
  }
}

class ProductB2 {
  info() {
    return 'Product B2';
  }
}

class AbstractFactory {
  createProductA() {}
  createProductB() {}
}

class ConcreteFactory1 extends AbstractFactory {
  createProductA() {
    return new ProductA1();
  }

  createProductB() {
    return new ProductB1();
  }
}

class ConcreteFactory2 extends AbstractFactory {
  createProductA() {
    return new ProductA2();
  }

  createProductB() {
    return new ProductB2();
  }
}

// 使用抽象工厂创建产品
const factory1 = new ConcreteFactory1();
const productA1 = factory1.createProductA();
console.log(productA1.info()); // Output: Product A1

const factory2 = new ConcreteFactory2();
const productA2 = factory2.createProductA();
console.log(productA2.info()); // Output: Product A2
```

### 3. 生成器 (Builder)
生成器模式用于构建复杂对象。它允许一步一步地创建一个复杂对象。

```javascript
class Product {
  constructor() {
    this.parts = [];
  }

  addPart(part) {
    this.parts.push(part);
  }

  showParts() {
    console.log(this.parts.join(', '));
  }
}

class ProductBuilder {
  constructor() {
    this.product = new Product();
  }

  addPartA() {
    this.product.addPart('Part A');
    return this;
  }

  addPartB() {
    this.product.addPart('Part B');
    return this;
  }

  getResult() {
    return this.product;
  }
}

// 使用生成器创建产品
const builder = new ProductBuilder();
const product = builder.addPartA().addPartB().getResult();
product.showParts(); // Output: Part A, Part B
```

### 4. 原型 (Prototype)
原型模式通过复制现有对象来创建新对象，而不是通过类实例化来创建。

```javascript
const prototype = {
  clone() {
    const clone = Object.create(this);
    clone.name = this.name;
    return clone;
  },
  setName(name) {
    this.name = name;
  },
  getName() {
    return this.name;
  }
};

// 使用原型创建产品
const product1 = Object.create(prototype);
product1.setName('Product 1');
console.log(product1.getName()); // Output: Product 1

const product2 = product1.clone();
product2.setName('Product 2');
console.log(product2.getName()); // Output: Product 2
```

### 5. 单例 (Singleton)
单例模式确保一个类只有一个实例，并提供一个访问它的全局访问点。

```javascript
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      this.name = 'Singleton Instance';
      Singleton.instance = this;
    }

    return Singleton.instance;
  }

  getName() {
    return this.name;
  }
}

// 使用单例模式创建产品
const singleton1 = new Singleton();
console.log(singleton1.getName()); // Output: Singleton Instance

const singleton2 = new Singleton();
console.log(singleton2.getName()); // Output: Singleton Instance

console.log(singleton1 === singleton2); // Output: true
```

## 结构型模式

将对象和类组装成较大的结构， 并同时保持结构的灵活和高效。

### 1. 适配器 (Adapter)

将一个类的接口转换成客户端希望的另外一个接口。适配器模式使得原本由于接口不兼容而不能一起工作的类可以一起工作。

```javascript
// 旧的支付系统
class OldPaymentSystem {
  constructor() {
    this.amount = 0;
  }

  setAmount(amount) {
    this.amount = amount;
  }

  pay() {
    console.log(`Paid ${this.amount} using the old payment system.`);
  }
}

// 新的支付系统
class NewPaymentSystem {
  constructor() {
    this.total = 0;
  }

  setTotal(total) {
    this.total = total;
  }

  makePayment() {
    console.log(`Paid ${this.total} using the new payment system.`);
  }
}

// 适配器
class PaymentAdapter {
  constructor(newPaymentSystem) {
    this.newPaymentSystem = newPaymentSystem;
  }

  setAmount(amount) {
    this.newPaymentSystem.setTotal(amount);
  }

  pay() {
    this.newPaymentSystem.makePayment();
  }
}

const oldPaymentSystem = new OldPaymentSystem();
oldPaymentSystem.setAmount(100);
oldPaymentSystem.pay(); // 输出: Paid 100 using the old payment system.

const newPaymentSystem = new NewPaymentSystem();
const paymentAdapter = new PaymentAdapter(newPaymentSystem);

paymentAdapter.setAmount(200);
paymentAdapter.pay(); // 输出: Paid 200 using the new payment system.
```

### 2. 桥接（Bridge）

将抽象部分与实现部分分离来实现它们的独立变化。可以帮助你避免类层次结构的爆炸，特别是在有多个维度变化的情况下。

```javascript
// 实现部分接口
class Color {
  applyColor() {
    throw new Error('This method should be overwritten!');
  }
}

// 具体实现部分
class RedColor extends Color {
  applyColor() {
    console.log('Applying red color');
  }
}

class BlueColor extends Color {
  applyColor() {
    console.log('Applying blue color');
  }
}

// 抽象部分接口
class Shape {
  constructor(color) {
    this.color = color;
  }

  draw() {
    throw new Error('This method should be overwritten!');
  }
}

// 具体抽象部分
class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  draw() {
    console.log('Drawing a circle');
    this.color.applyColor();
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
  }

  draw() {
    console.log('Drawing a square');
    this.color.applyColor();
  }
}

// 使用桥接模式
const redColor = new RedColor();
const blueColor = new BlueColor();

const redCircle = new Circle(redColor);
const blueSquare = new Square(blueColor);

redCircle.draw(); // 输出: Drawing a circle \n Applying red color
blueSquare.draw(); // 输出: Drawing a square \n Applying blue color
```

### 3. 组合 (Composite)

它允许你将对象组合成树形结构来表示“部分-整体”的层次结构。组合模式使得客户端对单个对象和组合对象的使用具有一致性。

```javascript
// 组件接口
class FileSystemComponent {
  constructor(name) {
    this.name = name;
  }

  display(indent = 0) {
    throw new Error('This method should be overwritten!');
  }
}

// 文件类
class File extends FileSystemComponent {
  constructor(name) {
    super(name);
  }

  display(indent = 0) {
    console.log(`${' '.repeat(indent)}- File: ${this.name}`);
  }
}

// 目录类
class Directory extends FileSystemComponent {
  constructor(name) {
    super(name);
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  remove(component) {
    this.children = this.children.filter(child => child !== component);
  }

  display(indent = 0) {
    console.log(`${' '.repeat(indent)}+ Directory: ${this.name}`);
    this.children.forEach(child => child.display(indent + 2));
  }
}

// 创建文件
const file1 = new File('file1.txt');
const file2 = new File('file2.txt');
const file3 = new File('file3.txt');

// 创建目录
const dir1 = new Directory('dir1');
const dir2 = new Directory('dir2');
const rootDir = new Directory('root');

// 组合结构
dir1.add(file1);
dir1.add(file2);
dir2.add(file3);
rootDir.add(dir1);
rootDir.add(dir2);

// 显示结构
rootDir.display();
```

### 4. 装饰 (Decorator)

它允许你动态地向对象添加行为，而不会影响其他对象。装饰模式通过创建一个装饰类来包装原始对象，实现了在不修改现有类的情况下拓展功能的能力。

```javascript
// 基本咖啡接口
class Coffee {
  getDescription() {
    return 'Basic Coffee';
  }

  cost() {
    return 5;
  }
}

// 装饰器基类
class CoffeeDecorator extends Coffee {
  constructor(coffee) {
    super();
    this.decoratedCoffee = coffee;
  }

  getDescription() {
    return this.decoratedCoffee.getDescription();
  }

  cost() {
    return this.decoratedCoffee.cost();
  }
}

// 牛奶装饰器
class MilkDecorator extends CoffeeDecorator {
  constructor(coffee) {
    super(coffee);
  }

  getDescription() {
    return `${this.decoratedCoffee.getDescription()}, Milk`;
  }

  cost() {
    return this.decoratedCoffee.cost() + 1.5;
  }
}

// 糖装饰器
class SugarDecorator extends CoffeeDecorator {
  constructor(coffee) {
    super(coffee);
  }

  getDescription() {
    return `${this.decoratedCoffee.getDescription()}, Sugar`;
  }

  cost() {
    return this.decoratedCoffee.cost() + 0.5;
  }
}

// 创建基本咖啡
let myCoffee = new Coffee();
console.log(myCoffee.getDescription()); // 输出: Basic Coffee
console.log(myCoffee.cost()); // 输出: 5

// 添加牛奶
myCoffee = new MilkDecorator(myCoffee);
console.log(myCoffee.getDescription()); // 输出: Basic Coffee, Milk
console.log(myCoffee.cost()); // 输出: 6.5

// 添加糖
myCoffee = new SugarDecorator(myCoffee);
console.log(myCoffee.getDescription()); // 输出: Basic Coffee, Milk, Sugar
console.log(myCoffee.cost()); // 输出: 7
```

### 5. 外观 (Facade)

它提供了一个简化的接口，用来访问子系统中的一组接口。这个模式通过提供一个统一的接口，使得复杂的子系统更容易使用。

```javascript
// 电视子系统
class TV {
  on() {
    console.log('TV is on');
  }

  off() {
    console.log('TV is off');
  }
}

// 音响子系统
class SoundSystem {
  on() {
    console.log('Sound system is on');
  }

  off() {
    console.log('Sound system is off');
  }

  setVolume(volume) {
    console.log(`Sound system volume set to ${volume}`);
  }
}

// DVD 播放器子系统
class DVDPlayer {
  on() {
    console.log('DVD player is on');
  }

  off() {
    console.log('DVD player is off');
  }

  play(movie) {
    console.log(`Playing movie: ${movie}`);
  }
}

// 家庭影院外观类
class HomeTheaterFacade {
  constructor(tv, soundSystem, dvdPlayer) {
    this.tv = tv;
    this.soundSystem = soundSystem;
    this.dvdPlayer = dvdPlayer;
  }

  watchMovie(movie) {
    console.log('Get ready to watch a movie...');
    this.tv.on();
    this.soundSystem.on();
    this.soundSystem.setVolume(10);
    this.dvdPlayer.on();
    this.dvdPlayer.play(movie);
  }

  endMovie() {
    console.log('Shutting movie theater down...');
    this.dvdPlayer.off();
    this.soundSystem.off();
    this.tv.off();
  }
}

// 创建子系统
const tv = new TV();
const soundSystem = new SoundSystem();
const dvdPlayer = new DVDPlayer();

// 创建外观类
const homeTheater = new HomeTheaterFacade(tv, soundSystem, dvdPlayer);

// 使用外观类来简化操作
homeTheater.watchMovie('Inception'); // 输出: Get ready to watch a movie... \n TV is on \n Sound system is on \n Sound system volume set to 10 \n DVD player is on \n Playing movie: Inception
homeTheater.endMovie(); // 输出: Shutting movie theater down... \n DVD player is off \n Sound system is off \n TV is off
```

### 6. 享元 (Flyweight)

它通过共享尽可能多的相似对象来减少内存使用

```javascript
// 享元类
class Shape {
  constructor(type) {
    this.type = type;
  }

  draw(color, x, y) {
    console.log(`Drawing a ${color} ${this.type} at (${x}, ${y})`);
  }
}

// 享元工厂类
class ShapeFactory {
  constructor() {
    this.shapes = {};
  }

  getShape(type) {
    if (!this.shapes[type]) {
      this.shapes[type] = new Shape(type);
    }
    return this.shapes[type];
  }
}

// 创建享元工厂
const shapeFactory = new ShapeFactory();

// 创建和共享形状对象
const redCircle = shapeFactory.getShape('circle');
redCircle.draw('red', 10, 10);

const blueCircle = shapeFactory.getShape('circle');
blueCircle.draw('blue', 20, 20);

const greenSquare = shapeFactory.getShape('square');
greenSquare.draw('green', 30, 30);

const redSquare = shapeFactory.getShape('square');
redSquare.draw('red', 40, 40);

// 验证共享对象
console.log(redCircle === blueCircle); // 输出: true
console.log(greenSquare === redSquare); // 输出: true
```

### 7. 代理 (Proxy)

它为另一个对象提供一个替身或占位符以控制对这个对象的访问。

```javascript
// 实际报名处理类
class RealEventRegistration {
  constructor() {
    this.registeredUsers = [];
    this.maxParticipants = 5; // 假设活动的最大参与人数为5
  }

  register(user) {
    if (this.registeredUsers.length >= this.maxParticipants) {
      console.log(`Cannot register ${user}. The event is full.`);
      return;
    }
    
    this.registeredUsers.push(user);
    console.log(`${user} has been successfully registered for the event.`);
  }

  isRegistered(user) {
    return this.registeredUsers.includes(user);
  }
}

// 代理报名处理类
class ProxyEventRegistration {
  constructor() {
    this.realRegistration = new RealEventRegistration();
  }

  register(user) {
    if (this.realRegistration.isRegistered(user)) {
      console.log(`${user} is already registered for the event.`);
      return;
    }

    this.realRegistration.register(user);
  }
}

// 使用代理报名处理对象
const eventRegistration = new ProxyEventRegistration();

// 尝试报名
eventRegistration.register('Alice'); // 输出: Alice has been successfully registered for the event.
eventRegistration.register('Bob');   // 输出: Bob has been successfully registered for the event.
eventRegistration.register('Charlie'); // 输出: Charlie has been successfully registered for the event.
eventRegistration.register('David'); // 输出: David has been successfully registered for the event.
eventRegistration.register('Eve');   // 输出: Eve has been successfully registered for the event.

// 活动已满，再次尝试报名
eventRegistration.register('Frank'); // 输出: Cannot register Frank. The event is full.

// 重复报名
eventRegistration.register('Alice'); // 输出: Alice is already registered for the event.
```

## 行为模式

负责对象间的高效沟通和职责委派。

### 1. 责任链 (Chain of Responsibility)

它允许多个对象有机会处理请求，从而避免请求的发送者和接收者之间的耦合。请求沿着链传递，直到有一个对象处理它为止。

```javascript
// 基础处理器类
class Handler {
  constructor() {
    this.nextHandler = null;
  }

  setNext(handler) {
    this.nextHandler = handler;
    return handler;
  }

  handleRequest(request) {
    if (this.nextHandler) {
      this.nextHandler.handleRequest(request);
    }
  }
}

// 初级客服处理器
class JuniorSupport extends Handler {
  handleRequest(request) {
    if (request.priority === 'low') {
      console.log(`Junior support handled request: ${request.description}`);
    } else {
      console.log(`Junior support cannot handle request: ${request.description}. Passing to next level.`);
      super.handleRequest(request);
    }
  }
}

// 中级客服处理器
class MidSupport extends Handler {
  handleRequest(request) {
    if (request.priority === 'medium') {
      console.log(`Mid support handled request: ${request.description}`);
    } else {
      console.log(`Mid support cannot handle request: ${request.description}. Passing to next level.`);
      super.handleRequest(request);
    }
  }
}

// 高级客服处理器
class SeniorSupport extends Handler {
  handleRequest(request) {
    if (request.priority === 'high') {
      console.log(`Senior support handled request: ${request.description}`);
    } else {
      console.log(`Senior support cannot handle request: ${request.description}. No more levels to pass.`);
      super.handleRequest(request);
    }
  }
}

// 创建处理器链
const junior = new JuniorSupport();
const mid = new MidSupport();
const senior = new SeniorSupport();

junior.setNext(mid).setNext(senior);

// 创建请求
const requests = [
  { description: 'Password reset', priority: 'low' },
  { description: 'Account suspension', priority: 'medium' },
  { description: 'Data breach', priority: 'high' },
  { description: 'Feature request', priority: 'low' }
];

// 处理请求
requests.forEach(request => junior.handleRequest(request));
```

### 2. 命令 (Command)

它将请求封装成对象，从而使你可以用不同的请求对客户进行参数化。命令模式允许请求的发送者与处理者解耦，并支持命令的撤销和重做操作。

```javascript
// 灯类
class Light {
  turnOn() {
    console.log('The light is on');
  }

  turnOff() {
    console.log('The light is off');
  }
}

// 音响类
class Stereo {
  turnOn() {
    console.log('The stereo is on');
  }

  turnOff() {
    console.log('The stereo is off');
  }

  setVolume(volume) {
    console.log(`The stereo volume is set to ${volume}`);
  }
}

// 打开灯命令
class LightOnCommand {
  constructor(light) {
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }

  undo() {
    this.light.turnOff();
  }
}

// 关闭灯命令
class LightOffCommand {
  constructor(light) {
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }

  undo() {
    this.light.turnOn();
  }
}

// 打开音响命令
class StereoOnCommand {
  constructor(stereo) {
    this.stereo = stereo;
  }

  execute() {
    this.stereo.turnOn();
    this.stereo.setVolume(11);
  }

  undo() {
    this.stereo.turnOff();
  }
}

// 关闭音响命令
class StereoOffCommand {
  constructor(stereo) {
    this.stereo = stereo;
  }

  execute() {
    this.stereo.turnOff();
  }

  undo() {
    this.stereo.turnOn();
    this.stereo.setVolume(11);
  }
}

// 遥控器类
class RemoteControl {
  constructor() {
    this.commands = {};
    this.history = [];
  }

  setCommand(button, command) {
    this.commands[button] = command;
  }

  pressButton(button) {
    if (this.commands[button]) {
      this.commands[button].execute();
      this.history.push(this.commands[button]);
    }
  }

  pressUndo() {
    const command = this.history.pop();
    if (command) {
      command.undo();
    }
  }
}

// 创建家电设备
const light = new Light();
const stereo = new Stereo();

// 创建命令对象
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);
const stereoOn = new StereoOnCommand(stereo);
const stereoOff = new StereoOffCommand(stereo);

// 创建遥控器并设置命令
const remote = new RemoteControl();
remote.setCommand('lightOn', lightOn);
remote.setCommand('lightOff', lightOff);
remote.setCommand('stereoOn', stereoOn);
remote.setCommand('stereoOff', stereoOff);

// 使用遥控器操作家电设备
remote.pressButton('lightOn');  // 输出: The light is on
remote.pressButton('stereoOn'); // 输出: The stereo is on \n The stereo volume is set to 11
remote.pressButton('lightOff'); // 输出: The light is off

// 撤销最后一个操作
remote.pressUndo();             // 输出: The light is on
remote.pressUndo();             // 输出: The stereo is off
```

### 3. 迭代器 (Iterator)

它提供了一种方法来顺序访问一个聚合对象中的各个元素，而不需要暴露其内部表示。迭代器模式可以让你在不需要了解对象内部结构的情况下遍历对象。

```javascript
// 书籍类
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  getDetails() {
    return `${this.title} by ${this.author}`;
  }
}

// 书架类
class Bookshelf {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  createIterator() {
    return new BookshelfIterator(this.books);
  }
}

// 书架迭代器类
class BookshelfIterator {
  constructor(books) {
    this.books = books;
    this.currentIndex = 0;
  }

  hasNext() {
    return this.currentIndex < this.books.length;
  }

  next() {
    if (this.hasNext()) {
      return this.books[this.currentIndex++];
    } else {
      return null;
    }
  }
}

// 创建书籍对象
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald');
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee');
const book3 = new Book('1984', 'George Orwell');

// 创建书架并添加书籍
const bookshelf = new Bookshelf();
bookshelf.addBook(book1);
bookshelf.addBook(book2);
bookshelf.addBook(book3);

// 创建迭代器并遍历书籍
const iterator = bookshelf.createIterator();
while (iterator.hasNext()) {
  const book = iterator.next();
  console.log(book.getDetails());
}
```

### 4. 中介者 (Mediator)

它定义一个对象来封装一组对象之间的交互方式。中介者模式通过引入一个中介者对象，来减少对象之间的直接依赖关系，从而使得对象之间的交互更加松散耦合。

```javascript
// 用户类
class User {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }

  send(message, to) {
    if (this.chatroom) {
      this.chatroom.send(message, this, to);
    }
  }

  receive(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

// 聊天室类
class Chatroom {
  constructor() {
    this.users = {};
  }

  register(user) {
    this.users[user.name] = user;
    user.chatroom = this;
  }

  send(message, from, to) {
    if (to) {
      // 发送给特定用户
      to.receive(message, from);
    } else {
      // 发送给所有用户
      for (const key in this.users) {
        if (this.users[key] !== from) {
          this.users[key].receive(message, from);
        }
      }
    }
  }
}

// 创建聊天室
const chatroom = new Chatroom();

// 创建用户
const alice = new User('Alice');
const bob = new User('Bob');
const charlie = new User('Charlie');

// 注册用户到聊天室
chatroom.register(alice);
chatroom.register(bob);
chatroom.register(charlie);

// 用户发送消息
alice.send('Hello, Bob!', bob); // 输出: Alice to Bob: Hello, Bob!
bob.send('Hi, Alice!', alice);  // 输出: Bob to Alice: Hi, Alice!

// 用户发送群发消息
charlie.send('Hello, everyone!'); // 输出: Charlie to Alice: Hello, everyone!
                                  // 输出: Charlie to Bob: Hello, everyone!
```

### 5. 备忘录 (Memento)

它允许在不破坏封装性的前提下捕获和恢复对象的内部状态。主要用于实现撤销操作。

```javascript
// 文本编辑器类
class TextEditor {
  constructor() {
    this.content = '';
  }

  write(text) {
    this.content += text;
  }

  getContent() {
    return this.content;
  }

  // 保存状态
  save() {
    return new Memento(this.content);
  }

  // 恢复状态
  restore(memento) {
    this.content = memento.getContent();
  }
}

// 备忘录类
class Memento {
  constructor(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }
}

// 管理者类
class Caretaker {
  constructor() {
    this.mementos = [];
  }

  addMemento(memento) {
    this.mementos.push(memento);
  }

  getMemento(index) {
    return this.mementos[index];
  }
}

// 创建文本编辑器和管理者
const editor = new TextEditor();
const caretaker = new Caretaker();

// 编辑文本并保存状态
editor.write('Hello, ');
caretaker.addMemento(editor.save());

editor.write('world!');
caretaker.addMemento(editor.save());

console.log(editor.getContent()); // 输出: Hello, world!

// 撤销操作
editor.restore(caretaker.getMemento(0));
console.log(editor.getContent()); // 输出: Hello,
```

### 6. 观察者 (Observer)

它定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象。当主题对象的状态发生变化时，会通知所有观察者对象，使它们能够自动更新。

```javascript
// 天气站类 (主题)
class WeatherStation {
  constructor() {
    this.temperature = 0;
    this.observers = [];
  }

  // 注册观察者
  registerObserver(observer) {
    this.observers.push(observer);
  }

  // 注销观察者
  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  // 通知所有观察者
  notifyObservers() {
    this.observers.forEach(observer => observer.update(this.temperature));
  }

  // 设置温度并通知观察者
  setTemperature(temp) {
    console.log(`WeatherStation: New temperature is ${temp}`);
    this.temperature = temp;
    this.notifyObservers();
  }
}

// 显示器类 (观察者)
class Display {
  constructor(name) {
    this.name = name;
  }

  // 更新显示器的温度
  update(temperature) {
    console.log(`${this.name} display: ${temperature} degrees`);
  }
}

// 创建天气站
const weatherStation = new WeatherStation();

// 创建显示器
const display1 = new Display('Display1');
const display2 = new Display('Display2');
const display3 = new Display('Display3');

// 注册显示器到天气站
weatherStation.registerObserver(display1);
weatherStation.registerObserver(display2);
weatherStation.registerObserver(display3);

// 设置温度并通知观察者
weatherStation.setTemperature(25); // 输出: WeatherStation: New temperature is 25
                                    // 输出: Display1 display: 25 degrees
                                    // 输出: Display2 display: 25 degrees
                                    // 输出: Display3 display: 25 degrees

// 注销一个显示器
weatherStation.removeObserver(display2);

// 设置温度并通知观察者
weatherStation.setTemperature(30); // 输出: WeatherStation: New temperature is 30
                                    // 输出: Display1 display: 30 degrees
                                    // 输出: Display3 display: 30 degrees
```

### 7. 状态 (State)

它允许对象在内部状态改变时改变其行为。状态模式将对象的行为封装在不同的状态对象中，使对象在运行时可以根据状态的变化而改变其行为。

```javascript
// 电灯类 (上下文)
class Light {
  constructor() {
    this.state = new OffState(this); // 初始状态为关
  }

  setState(state) {
    this.state = state;
  }

  pressButton() {
    this.state.pressButton();
  }
}

// 状态接口
class State {
  constructor(light) {
    this.light = light;
  }

  pressButton() {
    throw new Error('pressButton method should be implemented');
  }
}

// 开状态类
class OnState extends State {
  pressButton() {
    console.log('Light is turning off...');
    this.light.setState(new OffState(this.light));
  }
}

// 关状态类
class OffState extends State {
  pressButton() {
    console.log('Light is turning on...');
    this.light.setState(new OnState(this.light));
  }
}

// 创建电灯对象
const light = new Light();

// 按下按钮
light.pressButton(); // 输出: Light is turning on...
light.pressButton(); // 输出: Light is turning off...
light.pressButton(); // 输出: Light is turning on...
light.pressButton(); // 输出: Light is turning off...
```

### 8. 策略 (Strategy)

它定义了一系列算法，并将每个算法封装起来，使它们可以互相替换，从而使算法的变化不会影响到使用算法的客户。

```javascript
// 支付策略接口
class PaymentStrategy {
  pay(amount) {
    throw new Error('pay method should be implemented');
  }
}

// 信用卡支付策略类
class CreditCardPaymentStrategy extends PaymentStrategy {
  constructor(cardNumber, cardName) {
    super();
    this.cardNumber = cardNumber;
    this.cardName = cardName;
  }

  pay(amount) {
    console.log(`Paid ${amount} using Credit Card ${this.cardName}`);
  }
}

// PayPal支付策略类
class PayPalPaymentStrategy extends PaymentStrategy {
  constructor(email) {
    super();
    this.email = email;
  }

  pay(amount) {
    console.log(`Paid ${amount} using PayPal with ${this.email}`);
  }
}

// 比特币支付策略类
class BitcoinPaymentStrategy extends PaymentStrategy {
  constructor(walletAddress) {
    super();
    this.walletAddress = walletAddress;
  }

  pay(amount) {
    console.log(`Paid ${amount} using Bitcoin to wallet ${this.walletAddress}`);
  }
}

// 支付上下文类
class PaymentContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  pay(amount) {
    this.strategy.pay(amount);
  }
}

// 创建支付上下文
const paymentContext = new PaymentContext(new CreditCardPaymentStrategy('1234-5678-9876-5432', 'John Doe'));

// 使用信用卡支付
paymentContext.pay(100); // 输出: Paid 100 using Credit Card John Doe

// 更改支付方式为PayPal
paymentContext.setStrategy(new PayPalPaymentStrategy('john.doe@example.com'));
paymentContext.pay(200); // 输出: Paid 200 using PayPal with john.doe@example.com

// 更改支付方式为比特币
paymentContext.setStrategy(new BitcoinPaymentStrategy('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa'));
paymentContext.pay(300); // 输出: Paid 300 using Bitcoin to wallet 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
```

### 9. 模板方法 (Template Method)

它定义了一个操作中的算法的骨架，而将一些步骤延迟到子类中。模板方法模式使得子类可以在不改变算法结构的情况下，重新定义算法中的某些步骤。

```javascript
// 饮料类 (抽象类)
class Beverage {
  prepareBeverage() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  boilWater() {
    console.log('Boiling water...');
  }

  brew() {
    throw new Error('brew method should be implemented');
  }

  pourInCup() {
    console.log('Pouring in cup...');
  }

  addCondiments() {
    throw new Error('addCondiments method should be implemented');
  }
}

// 茶类
class Tea extends Beverage {
  brew() {
    console.log('Steeping the tea...');
  }

  addCondiments() {
    console.log('Adding lemon...');
  }
}

// 咖啡类
class Coffee extends Beverage {
  brew() {
    console.log('Dripping coffee through filter...');
  }

  addCondiments() {
    console.log('Adding sugar and milk...');
  }
}

// 创建茶对象并制作茶
const tea = new Tea();
console.log('Making tea:');
tea.prepareBeverage();
// 输出:
// Making tea:
// Boiling water...
// Steeping the tea...
// Pouring in cup...
// Adding lemon...

// 创建咖啡对象并制作咖啡
const coffee = new Coffee();
console.log('Making coffee:');
coffee.prepareBeverage();
// 输出:
// Making coffee:
// Boiling water...
// Dripping coffee through filter...
// Pouring in cup...
// Adding sugar and milk...
```

### 10. 访问者 (Visitor)

它将操作的定义与操作的对象结构分离。通过这种方式，操作可以在不改变对象结构的前提下被添加到对象结构中。

```javascript
// 文件系统元素类 (抽象类)
class FileSystemElement {
  accept(visitor) {
    throw new Error('accept method should be implemented');
  }
}

// 文件类
class File extends FileSystemElement {
  constructor(name, size) {
    super();
    this.name = name;
    this.size = size;
  }

  accept(visitor) {
    visitor.visitFile(this);
  }
}

// 文件夹类
class Directory extends FileSystemElement {
  constructor(name) {
    super();
    this.name = name;
    this.children = [];
  }

  add(element) {
    this.children.push(element);
  }

  accept(visitor) {
    visitor.visitDirectory(this);
  }
}

// 访问者接口
class Visitor {
  visitFile(file) {
    throw new Error('visitFile method should be implemented');
  }

  visitDirectory(directory) {
    throw new Error('visitDirectory method should be implemented');
  }
}

// 具体访问者类: 计算总大小
class SizeCalculator extends Visitor {
  constructor() {
    super();
    this.totalSize = 0;
  }

  visitFile(file) {
    this.totalSize += file.size;
  }

  visitDirectory(directory) {
    directory.children.forEach(child => child.accept(this));
  }

  getTotalSize() {
    return this.totalSize;
  }
}

// 具体访问者类: 打印结构
class StructurePrinter extends Visitor {
  constructor() {
    super();
    this.structure = '';
    this.indentation = '';
  }

  visitFile(file) {
    this.structure += `${this.indentation}- ${file.name} (${file.size} KB)\n`;
  }

  visitDirectory(directory) {
    this.structure += `${this.indentation}+ ${directory.name}\n`;
    this.indentation += '  ';
    directory.children.forEach(child => child.accept(this));
    this.indentation = this.indentation.slice(0, -2);
  }

  getStructure() {
    return this.structure;
  }
}

// 创建文件系统结构
const root = new Directory('root');
const file1 = new File('file1.txt', 100);
const file2 = new File('file2.txt', 200);
const subDir = new Directory('subDir');
const file3 = new File('file3.txt', 300);

root.add(file1);
root.add(file2);
root.add(subDir);
subDir.add(file3);

// 计算总大小
const sizeCalculator = new SizeCalculator();
root.accept(sizeCalculator);
console.log(`Total size: ${sizeCalculator.getTotalSize()} KB`); // 输出: Total size: 600 KB

// 打印结构
const structurePrinter = new StructurePrinter();
root.accept(structurePrinter);
console.log('File system structure:\n' + structurePrinter.getStructure());
// 输出:
// File system structure:
// + root
//   - file1.txt (100 KB)
//   - file2.txt (200 KB)
//   + subDir
//     - file3.txt (300 KB)
```

## 参考文档

- [深入设计模式](https://refactoringguru.cn/design-patterns)