/*An object literal is a comma separated list of name value pairs wrapped in curlybraces.
 In JavaScript an object literal is defined as follows: 
 var someObject = { 
     some_prop: 'some string value',
  another_prop: 'another string value', 
      int_prop: 100 }; 

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