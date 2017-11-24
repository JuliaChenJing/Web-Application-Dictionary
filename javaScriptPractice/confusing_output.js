"use strict";

for (var i = 0; i < 10; i++) {
    setTimeout(function () {

        console.log(i);
    }, 1000);
}

const MY_NUM = 7;
//MY_NUM = 20; // this will fail
console.log(MY_NUM); // will print 7
//const MY_NUM = 20; // trying to redeclare a constant throws an error
//var MY_NUM = 20; // this will fail
const FOO = 8; // SyntaxError: missing = in const declaration
const MY_OBJECT = { "key": "value" }; // const also works on objects
//MY_OBJECT = { "OTHER_KEY": "value" }; // this will fail
// object attributes are not protected, so the following statement is
//executed without problems
MY_OBJECT.key = "otherValue"; // will work!



function foo() {
    x = 2;
    var y = 3;
    console.log(x); // 2
    console.log(y); //3
    y = 4;
}
foo();
console.log(x); // error
//console.log(y); //error


function multiply(a, b) {
    return a * b;
}
var multipleByTwo = multiply.bind({}, 2); // set a = 2
console.log(multipleByTwo(4)); // 8
var multipleByThree = multiply.bind({}, 3); // set a = 3
console.log(multipleByThree(4)); // 12


function mul(x) {
    return function (y) { // anonymous function 
        return function (z) { // anonymous function 
            return x * y * z;
        };
    };
}


console.log(mul(2)(3)(4)); // output : 24 
console.log(mul(4)(3)(4)); // output : 48

console.log(false == '0')//true
console.log(false === '0')//false
