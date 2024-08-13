---

title: '深入设计模式'

---

# 深入设计模式



## 创建型模式

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



















## 参考文档

- [深入设计模式](https://refactoringguru.cn/design-patterns)