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
bindHelper( '160cm', '50kg'); // Julia  Chen 160cm 50kg



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


