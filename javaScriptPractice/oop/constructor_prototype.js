
console.log("//---------------------------------------- 3  new F() constructor--------------------------");
//create an object called Teacher derived from the Person function constructor, and implement a method called teach which receives a string called subject, and prints out

/* 1 Why is it considered to be a best practice to not include function definitions 
   inside constructor functions, but instead put them on the Constructor.prototype property？

      Because if it is inside function definition,its instance is created everytime constructoer 
      is invoked, but if it is on constructors prototype property it is invoked only when it is called.
*/
function Person(name) {

    this.name = name;
    this.saygoodbye = function () {
        console.log("goodbye " + this.name);
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

Person.prototype.saygoodbye = function () {
    console.log("see you later" + this.name);
}
teacher.saygoodbye();//does not work
new Person("Julia").saygoodbye();//does not work
teacher.saygoodbye = function () {
    console.log("see you later " + this.name);
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