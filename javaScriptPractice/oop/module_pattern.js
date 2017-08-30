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