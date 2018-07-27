// class Student {
//     fullName: string;
//     constructor(public firstName, public middleInitial, public lastName) {
//         this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
//     }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// interface Person {
//     firstName: string;
//     lastName: string;
//     middleInitial: string;
// }
// function greeter(person: Person) {
//     return "hellow, " + person.firstName + " " + person.middleInitial + person.lastName;
// }
// let user = new Student('zhang', 'Yi', 'Hao');
// let str: any = ' this is a string'
// let strlis: number = (<string>str).length
// document.body.innerHTML = greeter(user);
// document.body.innerHTML += strlis;
/* // 给属性定义接口并确定类型
try {
    throw "oh no!";
}
catch (e) {
    console.log("Oh well.", e);
}

interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "qsb tsc"};
printLabel(myObj)
*/
/* // 定义不确定存在属性（可选属性）
interface SConfig{
    color?: string;
    width?: number;
}

function createSquare(config: SConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    newSquare.color = config.color || newSquare.color;
    newSquare.area = config.width || newSquare.area;
 
    return newSquare;
}
*/
/* // 定义只读属性
let mySquare = createSquare({color: "back", width: 105});
console.log(mySquare);

interface PointOnly {
    readonly x: number;
    readonly y: number;
}
let p1: PointOnly = { x: 10, y: 20};

console.log(p1.x)
*/
// 定义函数接口
/* interface searchFunc {
    (source: string, sunbString: string): boolean;
}
let myserarch: searchFunc;
myserarch = function (src: string, sub: string) {
    let result = src.search(sub);
    if (result === -1) {
        return false;
    }
    else {
        return true;
    }
} */
// 索引声明
/* interface StringArray {
    [index: number]: string;
}
let myArray: StringArray;
myArray = ["bot", "Fred"];

let myStr: string = myArray[0];

let fa = myArray[1];
console.log(fa)
 */
// 类接口的类型；
/*
 * 当你操作类和接口的时候，你要知道类是具有两个类型的：静态部分的类型和实例的类型。当你用构造器签名去定义一个接口并试图定义一个类去实现这个接口时会得到一个错误
 */
/*
 //这里是类的静态部分的接口
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
// 实例部分的接口
interface ClockInterface {
    tick();
}

//静态部分
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface{
    return new ctor(hour, minute);
}

//实现接口
class DigitalClock implements ClockInterface {
    constructor(h: number, m: number){}
    tick() {
        console.log("beep beep");
    }
    // nans() {
    //     console.log("我没有在接口中定义")
    // }
}
// 实现接口
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number){}
    tick(){
        console.log("tick tick");
    }
    // nans() {
    //     console.log("我也没有在接口中定义")；
    // }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
analog.tick()
digital.tick()
// analog.nans()
// digital.nans()
 */
// 接口可以继承；
/* interface Shape{
    color: string;
}
interface PenStroke {
    penWidth: number;
}
interface Square extends Shape, PenStroke{
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.penWidth = 200;
square.sideLength = 100;
 */
// 混合接口
/* interface Count {
    //函数,参数，返回值
    (start: number): string;
    //属性，numbenr
    interval: number;
    //属性，函数
    reset(): void;
}
function getcount(): Count{
    let count = <Count>function (start: number):string {
        return '' + start
    };
    count.interval = 123;
    count.reset = function (a = 1, b = 2, c = "2") {
        console.log(a, b, c)
    };
    return count
}
let c = getcount();
c(10);
c.reset();
c.interval = 5.0
console.log(c(10))
 */
// 接口继承类
// ?????????????????????????????????????????????????????????
/* class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select():void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}
class Image implements SelectableControl {
    select() { }
}
class Location {

} */
// ?????????????????????????????????????????????????????????
// 类类类类类类类类类类类类类类类类类类类类类类类类类类类类类类类类类类类类
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     gerrt() {
//         return "Hello, "+ this.greeting;
//     }
// }
// let greeter = new Greeter("world");
// console.log(greeter.gerrt())
//扩展类
//1
/* class Animal {
    move(distanceInMeters: number = 0){
        console.log( `Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!!')
    }
    names(name: string = 'no Name'){
        console.log(`how i's ${name}!!`)
    }
}

const dog = new Dog();
dog.move(10);
dog.bark();
dog.names('dog') */
//2
/* class Animal {
    name: string;
    constructor (theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name}move ${distanceInMeters}m.`);
    }
}
class Snake extends Animal {
    constructor(name: string) { super(name);}
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
let sam = new Snake("Sammy the Python");
let tom : Animal = new Horse("Tommy the Palomino");

// sam.move();
tom.move(34); */
// 私有成员定义
// class Animal {
//     // 使用 public指定成员是可见的, 不写默认是public
//     public name: string;
//     public constructor(theName: string) {this.name = theName}
//     public move(distanceInMeters: number){
//         console.log(`${this.name} move ${distanceInMeters}m.`)
//     }
//     // 当成员被标记 private 时它就不能在声明他的类外部使用。
// }
// class Animal {
//     private name: string;
//     constructor(theName: string){
//         this.name = theName;
//     }
// }
// class Rhino extends Animal {
//     constructor() {
//         super("Rhino")
//     }
// }
// class Employee {
//     private name: string;
//     constructor(theName:string) {
//         this.name = theName
//     }
// }
// let animal = new Animal("Goat");
// let rhino = new Rhino();
// let employee = new Employee("Bob");
// animal = rhino;
// class Person {
//     protected name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// class Employee extends Person {
//     private department: string;
//     constructor(name: string, department: string) {
//         super(name)
//         this.department = department;
//     }
//     public getElevatorPitch() {
//         return `hello, my namer is ${this.name} and I work in ${this.department}.`;
//     }
// }
// let howard = new Employee("Howard","Sales");
// console.log(howard.getElevatorPitch());
// console.log(howard.name);
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee;
}(Person));
var howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误