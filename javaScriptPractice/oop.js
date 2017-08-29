console.log("---------------------------OOP in JavaScript ---------------------------------------");


console.log("//----------------------------------1 Object.create(className)--------------------------");
var Student = {
    name: "Bimal Parajuli",
    course: "Web Application Programming",
    studentNo: 985387,
    saygoodbye: function(){
        console.log("goodbye "+this.name);
    }
};


Student.sayhello=function(){
    console.log("hello "+this.name);
}
Student.sayhello();
//create object
stu = Object.create(Student);
stu.sayhello();

Student.saygoodbye();
stu.saygoodbye();

console.log("0-------override--");
stu.saygoodbye=function(){
    console.log("see you again "+this.name);
}

Student.saygoodbye();
stu.saygoodbye();

console.log("1-------show all the keys in Student---");
for (var key in Student) {
    console.log(key); // name, course, studentNo
}
console.log("2-------show all the keys in detail in Student --");
console.log(Object.keys(Student)); // [name, course, no]

// Object.create(student)

console.log("3-------show Student.name and stu.name");
console.log(Student.name); // Bimal Parajuli
console.log(stu.name); // Bimal Parajuli
console.log("4-------");
for (var key in stu) {
    console.log(key); // name, course, no
}
console.log("5-------");
console.log(Object.keys(Student)); // ["name", "course", "studentNo"]
console.log(Object.keys(stu)); // []

delete Student.studentNo;
console.log("6-------delete Student.studentNo;---");
console.log(Student);//{name: "Bimal Parajuli", course: "Web Application Programming"}


console.log("//----------------------------------2 call() apply() bind()-----------------------------");
var me = {
    firstName: 'Asaad ',
    lastName: 'Saad ',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}
var showMe = function (height, weight) { // ‘this’ refers to the invoker
    console.log(this.getFullName() + height + ' ' + weight);
}
var logMe = showMe.bind(me);//tell log which this is, this is me
logMe('180cm'); // Asaad Saad 180cm undefined
showMe.call(me, '180cm', '70kg'); // Asaad Saad 180cm 70kg
showMe.apply(me, ['180cm', '70kg']); // Asaad Saad 180cm 70kg


var you = {
    first: 'Bimal',
    last: 'Parajuli'
}
console.log(me.getFullName.apply(you)); // Bimal Parajuli


function multiply(a, b) {
    return a * b;
}
var multipleByTwo = multiply.bind({}, 2); // set a = 2
console.log(multipleByTwo(4)); // 8
var multipleByThree = multiply.bind({}, 3); // set a = 3
console.log(multipleByThree(4)); // 12


let Rectangle = {
    height: 0,
    width: 0,
    area: function () {
        return this.height * this.width;
    }
}

Rectangle.circumference = function () {
    return (2 * this.height + 2 * this.width);
}
let r = Object.create(Rectangle);
r.height = 5;
r.width = 10;
console.log(r.area());//50
console.log(r.circumference())//30

console.log("//---------------------------------------- 3  new F() constructor--------------------------");
//create an object called Teacher derived from the Person function constructor, and implement a method called teach which receives a string called subject, and prints out

/* 1 Why is it considered to be a best practice to not include function definitions 
   inside constructor functions, but instead put them on the Constructor.prototype property？

      Because if it is inside function definition,its instance is created everytime constructoer 
      is invoked, but if it is on constructors prototype property it is invoked only when it is called.
*/
function Person(name) {

    this.name = name;
    this.saygoodbye=function(){ 
        console.log("goodbye "+this.name);
    };
}
new Person("Julia").saygoodbye();

var teacher = new Person("Asaad");
teacher.saygoodbye();
//Every JavaScript object has a prototype. The prototype is also an object.
//All JavaScript objects inherit their properties and methods from their prototype.
Person.prototype.teach = function (subject) {
    return this.name + ' is teaching ' + subject;
}
console.log(teacher.teach('Web Application Programming'));

Person.prototype.saygoodbye= function () {
    console.log("see you later"+this.name);
}
teacher.saygoodbye();//does not work
new Person("Julia").saygoodbye();//does not work
teacher.saygoodbye= function () {
    console.log("see you later "+this.name);
}
teacher.saygoodbye();


function Student_2() {
    console.log(this);
    this.university = 'MUM';
    year = '2016';
}
var faculty = new Student_2(); // Person {university: "MUM"} – no year!
Student_2.prototype.greet = function () {
    return 'Hi ' + this.university;
}
console.log(faculty.greet()); // "Hi MUM"


// By convention we use capital first letter for function constructor
function Course(coursename) {
    this.coursename = coursename;
    console.log("1--------------------")
    console.log('Function Constructor Invoked!');
}
Course.prototype.register = function () {
    return 'Register ' + this.coursename;
}
var wap = new Course('WAP'); // Function Constructor Invoked!
console.log("2--------------------")
console.log(wap); // Course {coursename: "WAP"}
console.log("3--------------------")
console.log(wap.__proto__); // Course.prototype
console.log("4--------------------")
console.log(wap instanceof Course); // true
console.log("5--------------------")
console.log(Course.prototype.register); // function(){ ... }
console.log("6--------------------")
console.log(wap.register()); // Register WAP

var a = new Number(12);
var b = new String("Hello");
var c = new Date(2016, 03, 01);
// Number.prototype, String.prototype, Date.prototype
// are objects with helper methods
// available because objects were created using new() keyword
console.log(a.toString()); // "12"
console.log(b.italics()); // "<i>Hello</i>"
console.log(c.getMonth()); // 3

console.log("//-------------------------------------4--module pattern------------------------");




/*
Question: write the following JavaScript code requirement in strict mode:
1 create a function constructor Foo that has two properties;
   conter1 is an object with property i=0;
   counter2 is a number with default value 0;
2 create an object foo that inherits from Foo.
3 Write a method add1() to increase conter1 value.
4 Write a method add2() to increase conter2 value.
5 create an object bar from Foo and increment the value of both counters.
6 Make sure to use the module pattern and your code does not leave any trace into the global object.
*/
(function () {
    'use strict'
    function Foo() {
        this.counter1 = { i: 0 };
        this.counter2 = 0;

    }

    let foo = new Foo();
    Foo.prototype.add1 = function () {
        this.counter1.i++;
    }

    Foo.prototype.add2 = function () {
        this.counter2++;
    }

    let bar = new Foo();
    bar.add1();
    bar.add2();
    console.log("-------------bar.counter1.i=" + bar.counter1.i);
    console.log("-------------bar.counter2=" + bar.counter2);

}());