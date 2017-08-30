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