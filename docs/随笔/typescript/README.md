# Typescript

## 资料

[TypeScript 入门教程](https://github.com/xcatliu/typescript-tutorial/blob/master/README.md)

## 配置

### 阻止错误时生成js文件

可以在`tsconfig.json`中配置`noEmitOnError`即可

## 名词

### 联合类型

声明为多个类型

```ts
let myAge: string | number;
myAge = 'seven';
myAge = 7;
```

### 接口

对对象的属性类型进行描述，不可添加未定义属性

```ts
interface Person {
    name: string, // 属性类型声明
    age: number,
    gender?: string, // 可有可无的【可选属性】
    children: number[], // 数组类型表示方式【类型 + 方括号】
    lang: (number | string)[], // 联合类型数组
    readonly mother: string, // 只读属性，首次对象赋值有效
    [propName: string]: string | number, // 确定属性和可选属性都要包含在联合属性内
}
const josh : Person {
    name: 'josh',
    age: 1,
};
interface Sum {
  (x: number, y: number, ...others : any[]) : number;
}
let s : Sum;
s = function(a, b, ...others) {
  let result = a + b;
  items.forEach(n => result += n);
  return result;
}
```

## 语法

### 函数表达式

```ts
const sum = function (x : number, y : number) : number { // 定义函数
    return x + y;
};
sum(1, 2);
```

### 类型断言

将一个变量为一个具体的类型：`<类型>值`或`值 as 类型`

```ts
function getLength(str: string | number) : number {
  if ((str as string).length) {
    return (str as string).length;
  } else {
    return str.toString().length;
  }
}
const n = getLength(123);
```

### 声明文件

对第三方库提供的变量进行类型声明，声明文件以`.d.ts`为后缀

```ts
// jQuery.d.ts
declare const jQuery: string => any;

？？？？？？？？？？
```

### 类型别名

给类型取名

```ts
type Name = string;
type NameToString = () => string;
type NameOrString = Name | NameToString;
function getName(name : NameOrString) : string {
  if (typeof name === 'string') {
    return name;
  } else {
    return name();
  }
}
const k = getName(() =>  'cc');
console.log(k);
```

### 字符串字面量

约束变量的取值

```ts
type Events = 'click' | 'scroll' | 'dbclick';
function getEvent(event : Events) {
  return event;
}
const k = getEvent('click');
console.log(k);
```

### 元组

规定不同类型的对象

```ts
const detail : [string, number, boolean] = ['josh', 22, true];
console.log(detail);
```

### 枚举类型

创建一个属性与数值的键值对

```ts
enum Days {A = 11, B = 9, C};
console.log(Days); // {A: 11, B: 9, C: 10, 11: 'A', 9 : 'B', 10: 'C' };
```

### 类

与es6的类一致，比es6多一些特性

```ts
class Animal {
    static josh = 'wong'; // es7，静态属性，只有Animal.josh才可访问
    name = 'josh'; // es6，实例属性，实例化后可访问
    public a1; // 共有属性，任何地方可访问
    private a2; // 私有属性，声明内可访问
    protected a3; // 受保护属性，声明内、子类可访问
    constructor(public a4: numer) {} // 直接定义类属性值
}
```

#### 抽象类

不可被实例化的类

```ts
abstract class Animal {
  protected name : string;
  constructor(name : string) {
    this.name = name;
  }
  public abstract say() : void;
}
class Person extends Animal {
  say() : void {
    console.log(this.name);
  }
}
const josh = new Person('josh');
josh.say();
```

#### 类与接口

类与类间可能存在共有特性（方法，属性），可以通过将共有特性提取成接口来实现

```ts
interface Talk {
  say() : void;
};
interface Sleep {
  sleep() : void;
};
class Animal implements Talk, Sleep { // 一个类可同时实现多个接口
  say() : void {
    console.log('hello');
  };
  sleep() : void {
    console.log('I need sleep');
  };
};
interface Ability extends Talk, Sleep { // 接口继承接口
}
class Person implements Ability {
  say() : void {
    console.log('hey');
  };
  sleep() : void {
    console.log('I need sleep, too');
  };
};
const dog = new Animal();
dog.say();
dog.sleep();
const josh = new Person();
josh.say();
josh.sleep();
```

### 泛型

不声明指定的变量类型，在使用时再指定

```ts
interface CreateArrayFunc {
  <valueType>(length: number, value: valueType) : Array<valueType>;
};
let createArray : CreateArrayFunc;
createArray = function<valueType>(length: number, value: valueType) : Array<valueType> {
  const result : valueType[] = new Array(length).fill(value);
  return result;
};
const arr = createArray<number>(3, 1);
```

## tsconfig.json

```json
{
    "compilerOptions": {
        
    }
}
```


