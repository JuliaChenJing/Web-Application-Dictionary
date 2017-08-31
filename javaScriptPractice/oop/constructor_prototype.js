console.log("//---------------------------------------- 3  new F() constructor--------------------------");
//create an object called Student derived from the Person function constructor, and implement a method called teach which receives a string called subject, and prints out

/* 1 Why is it considered to be a best practice to not include function definitions 
   inside constructor functions, but instead put them on the Constructor.prototype property？

      Because if it is inside function definition,its instance is created everytime constructoer 
      is invoked, but if it is on constructors prototype property it is invoked only when it is called.
*/
function Person(name) {
    this.name = name;
    this.sayhello = function () {
        console.log("hello, I am " + this.name);
    };
}

// By convention we use capital first letter for function constructor
var Student = new Person("Julia");//has a copy of name and sayhello
console.log(Student);
Student.sayhello();

//Every JavaScript object has a prototype. The prototype is also an object.
//All JavaScript objects inherit their properties and methods from their prototype.
Person.prototype.saygoodbye = function (greet) {
    console.log("goodbye " + this.name +" "+ greet);
}
Student.saygoodbye('see you next time');

console.log("0--------------------")
Student.saygoodbye();//goodbye Julia undefined
//override
console.log("override--------------------")
Student.saygoodbye = function () {
    console.log("see you later " + this.name);
}
Student.saygoodbye();//see you later Julia 
Student.saygoodbye('see you next time');//see you later Julia





var a = new Number(12);
var b = new String("Hello");
var c = new Date(2016, 03, 01);
// Number.prototype, String.prototype, Date.prototype
// are objects with helper methods
// available because objects were created using new() keyword
console.log(a.toString()); // "12"
console.log(b.italics()); // "<i>Hello</i>"
console.log(c.getMonth()); // 3