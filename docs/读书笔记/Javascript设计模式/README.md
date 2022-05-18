## 缘由

建筑师Christopher Alexander在进行建筑设计时，总结了一套设计经验，并在实践中可灵活运用，节省设计时间。

## 简介

一个模式即一个可重用的方案，解决问题的模板，具有多个专业词汇，善于表达解决方案，是一种面向对象的设计。

## 目的

通过学习设计模式，达到一下目标：

- 代码具有结构性、组织性、可维护性。
- 模式的可靠性使我们可以减少时间去关心代码的结构，减少开发过程中可能出现的问题。
- 使代码与主流编程设计思想步调一致，易于向他人表达代码思想，从而增强代码的可阅读性。
- 学习模式中的开发者词汇，减少沟通成本。
- 减少代码逻辑出错率，健壮代码。
- 避免个人风格主义，避免反模式。

## 设计模式的结构

- 上下文环境
- 配置项
- 功能

## 代码注释要求

一个显而易懂的注释，有助于提高代码阅读效率

- 上下文概述
- 问题说明
- 解决方案
- 举例
- 条件要求

## 反模式

提出一个特殊需求的解决方案，导致坏结果的发生。

### 特征

- 修改对象的原型
- 在全局上下文中存在大量全局污染的变量
- 使用类似document.write对页面逻辑影响较大的函数

## 设计模式分类

- **创建型设计模式**

该模式关注于对象创建的机制方法。通过该方法，对象以适应工作环境的方式被创建。基本的创建方法可能会给项目增加额外的复杂性，而这些模式的目的就是为了通过控制创建过程解决这个问题。

该种类模式包括：构造器模式（Constructor）、工厂模式（Factory）、抽象工厂模式（Abstract）、原型模式（Prototype）、单例模式（Singleton）以及建造者模式（Builder）。

```javascript
class Animal {
    constructor(option) {
        const {
            type
        } = option;
        this.type = type;
    };
};
```

- **结构设计模式**

该模式关注于对象组成和通常识别的方式实现不同对象之间的关系。该模式有助于在系统的某一部分发生改变时，整个系统结构不需要改变。该模式同样有助于对系统某一部分没有达到某一目的的部分进行重组。

该种类模式包括：装饰模式、外观模式、享元模式、适配器模式和代理模式。

```javascript
class Cat extends Animal {
    constructor() {
        super({ 
            type: 'cat' 
        });
        this.age = 0;  
    };
    say() {
        console.log('喵');
    };
};
```

- **行为设计模式**

该模式关注于改善或精简在系统中不同对象间通信。

该种类模式包括：迭代模式、中介者模式、观察者模式和访问者模式。

```javascript
const cat = new Cat();
const dog = new Dog();
const animals = [cat, dog];
const newYear = animals => {
    animals.forEach(animal => {
        animal.age += 1;
    });
};
```

## 模式

- **构造器模式**

用于创建特殊类型的对象，通过接收参数对成员的属性和方法赋值。

```javascript
class Animal {
    constructor(option) {
        const {
            type
        } = option;
        this.type = type;
    };
    sayType() {
        const {
            type
        } = this;
        console.log(`this type is ${type}`);
    };
};
```

- **模块化模式**

私有化变量，不污染全局，即成员函数以闭包的方式进行声明。分暴露式和非暴露式两种，区别在于成员函数对私有变量的是否是直接地操作的。

```javascript
class Animal {
    constructor() {
        this.addAge = this.addAge();    // 初始化闭包
    };
    addAge() {      // 暴露式
        let age = 0;    // 私有变量
        return () => {
            age ++;
            return age;
        };
    };
    sayNumb() {     // 非暴露式
        let number = Math.random();
        const n = number.toString().substr(2, 4);
        return n;
    }
};
```

- **单例模式**

函数只返回单一个对象，保证一个类只对应一个实例。实现方式：用一个变量存储该实例，当实例不存在时创建实例，存在时直接使用。

```javascript
class Animal {
    constructor(type) {
        this.type = type;
        this.instance = null;
    };
    static getInstance(type) {
        if (!this.instance) {
            this.instance = new Animal(type);
        };
        return this.instance;
    };
};
const cat = Animal.getInstance('cat');
const dog = Animal.getInstance('dog');
console.log(cat === dog);       // true
```

- **观察者模式**

当被观察发生变化时，会广播通知观察者。易于保证数据一致性。

```javascript
class Father {          // 被观察者
	constructor () {
		this.childrens = [];    // 存储观察者的观察者列表
    };
	addChildren (children) {
		this.childrens.push(children);
    };
	teach () {
		this.childrens.forEach(children => {    // 广播通知
			children.IQ += 1
        });
    };
    gone () {
        this.childrens = [];    // 这里可根据需求改写，例如：移除指定成员
    };
};
class Children {        // 观察者
	constructor (name) {
		this.name = name;
		this.IQ = 0;
    };
	study () {
		this.IQ += 1;
    };
};
const father = new Father();
const josh = new Children('josh');
father.addChildren(josh);   // 将观察者列入被观察者的观察者列表中
father.teach();             // 被观察者发生变化
```

- **发布/订阅模式**

与观察者模式类似，差异在于接受通知时观察者会根据广播参数各自执行各自的函数。

```javascript
class Publisher {
    constructor () {
        this.subscribers = [];
    };
    addSubscriber (subscriber) {
        this.subscribers.push(subscriber);
    };
    notify (type) {
        this.subscribers.forEach(subscriber => {
            const fn = subscriber[type];
            fn instanceof Function && fn();      // 订阅者根据参数执行各自的函数
        });
    };
    goDown () {
        this.subscribers = [];
    };
};
class Subscriber {
    constructor (name) {
        this.name = name;
    };
    on (type, fn) {
        this[type] = fn;
    };
};
const publisher = new Publisher();
const josh = new Subscriber('josh');
publisher.addSubscriber(josh);
josh.on('publish', () => {
    console.log('josh receive a magazine');
});
publisher.notify('publish');
```

- **中介者模式**

事件代理中被绑定事件的dom节点即中介者。

```javascript
const dom = document.querySelect('ul');         // 中介者
const fn = () => console.log('do something');
dom.addEventListener('click', e => {
    if (e.target.tagName.toLocaleLowerCase() == 'li') {
        fn();
    };
});
```

- **命令模式**

一个函数引用了其他函数。

```javascript
const animal = {
	eat: function (food) {
		console.log(`I can eat ${food}`);
    },
	drink: function (water) {
		console.log(`I can drink ${water}`);
    },
    execute: function (who, canDo, what) {
        console.log(`${who} say:`);
        animal[canDo](what);
     }
};
animal.execute('josh', 'drink', 'cola');
```

- **门面模式**

暴露一个方法，该方法返回一个对象。类似机器人外骨骼，比如jQuery的$(dom)就是使用了该模式。

```javascript
function Robot (option) {
    const {
        name
    } = option;
	function fight () {
        const {
            name
        } = this;
        console.log(`${name} defeat`);
    };
	return {
		name,
		fight
    };
};
Robot({ name: 'josh' }).fight();
```

- **工厂模式**

需要什么，就从工厂类里造出什么。

```javascript
class Car {
	constructor () {
		this.type = 'car';
    };
};
class Room {
	constructor () {
		this.type = 'room';
    };
};
class Factory {
	static create (type) {
		if (type == 'car') {
			return new Car();
        } else if (type == 'room') {
			return new Room();
        }
    };
};
Factory.create('room');
```

- **织入模式(mixin)**

继承一个类的属性和方法。

```javascript
class Person {
    constructor(name) {
        this.name = name;
    };
    sayName() {
        const {
            name
        } = this;
        console.log(`my name is ${name}`);
    };
};
class SuperMan extends Person {
    constructor(name) {
        super(name);
    };
    showPower() {
        console.log('boom');
    };
};
```

- **装饰器模式**

用一个函数添加或修改实例的属性和方法。

```javascript
class Person {
    constructor (name) {
        this.name = name;
        this.clever = 0;
        this.age = 0;
    };
    afterYear () {
        this.age ++;        // 装饰一下他的属性 
    };
};
function readBook (instance) {
    instance.clever ++;     // 装饰一下他的属性
};
const josh = new Person('josh');
readBook(josh);
```

- **享元模式**

在需要创建多个实例的情况下，通过将实例放置到一个（若干个）对象中，以达到减少内存占用的目的。

```javascript
class Home {
    constructor () {    
        this.childrens = [];
    };
    addChildren (name) {
        this.childrens.push({
            name, 
            age: 0
        });
    };
};
const home = new Home();
home.addChildren('josh');
```

- **MV\*模式**

M代表model，存放数据模型；V代表view，存放HTML结构视图。

MVC中C代表Controller（控制者），C层负责控制数据变化。例如：收起菜单栏的操作中，当用户点击V层的某按钮时，触发C层的某事件（包含业务逻辑），改变M层的一个数据项，M层通过观察者模式通知V层，从而改变V层的结构，实现收起操作。MVC的层层依赖关系，不利于解耦。

MVP中P代表Presenter（提出者），P层负责控制视图和数据变化。例如：收起菜单的操作中，当用户点击V层的某按钮时，触发P层的某事件，改变M层的一个数据项，M层通过观察者模式通知P层，经过P层处理后，P层调取V层的某接口令V层视图发生变化。MVP的P层控制视图和数据，所以代码量较大，不易于维护。

MVVM中VM代表ViewModel（视图模型），VM负责同步数据和模型，即数据与视图的双向绑定，数据驱动视图变化，只要数据正确，视图就会正确。例如：Vue。

## 总结

当我们理解了更多的设计模式，面对他人的开源作品时，就可以更好地站在开发者的角度，去思考代码的实现方式，从而达到提升代码阅读能力的目标。

## 阅读意见
该书带来的知识点还是很多的，个人认为比较有用的部分是书的前60%，但其中还穿插着一些比较过时的技术，可能不太好理解，可以跳着看。后40%大部分讲的是设计模式在jQuery中的实现。