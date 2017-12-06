/*An object literal is a comma separated list of name value pairs wrapped in curlybraces.
 In JavaScript an object literal is defined as follows: 
 var someObject = { 
     some_prop: 'some string value',
  another_prop: 'another string value', 
      int_prop: 100 }; 

      1.	call attaches this into function and executes the function immediately:
2.	apply is similar to call except that it takes an array-like object instead of listing the arguments out one at a time
3.	bind attaches this into function and it needs to be invoked separately .

Use .bind() when you want that function to later be called with a certain context, useful in events. 
Use .call() or .apply() when you want to invoke the function immediately, and modify the context.

Call/apply call the function immediately, whereas bind returns a function that, when later executed, will have the correct context set for calling the original function. This way you can maintain context in async callbacks and events.

They all attach this into function (or object) and the difference is in the function invocation (see below).

*/
console.log("//----------------------------------2 call() apply() bind()-----------------------------");
var julia = {
    firstName: 'Julia ',
    lastName: 'Chen ',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}
var show = function (height, weight) { // ‘this’ refers to the invoker
    console.log(this.getFullName() + height + ' ' + weight);
}

show.call(julia, '160cm', '50kg'); // Julia  Chen 160cm 50kg
show.apply(julia, ['160cm', '50kg']); // Julia  Chen 160cm 50kg
var bindHelper = show.bind(julia);
bindHelper('160cm', '50kg'); // Julia  Chen 160cm 50kg



var bimal = {
    firstName: 'Bimal ',
    lastName: 'Parajuli ',
}
console.log(julia.getFullName.apply(bimal)); // Bimal Parajuli

//math
function multiply(a, b) {
    return a * b;
}
var multipleByTwo = multiply.bind({}, 2); // set a = 2
console.log(multipleByTwo(4)); // 8
var multipleByThree = multiply.bind({}, 3); // set a = 3
console.log(multipleByThree(4)); // 12


var obj = { num: 5 };

var myMethod = function (a, b, c) {
    return this.num + a + b + c;
}
console.log(myMethod.call(obj, 21, 10, 20));

var array = [21, 10, 20];
console.log(myMethod.apply(obj, array));

var bound = myMethod.bind(obj);
// console.dir(bound);        // function bound with myMethod 
console.log(bound(21, 10, 20));
