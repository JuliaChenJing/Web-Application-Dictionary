function Counter() {

    var privateCounter = 0; //private data
    function changeBy(val) { //private inner function

        privateCounter += val;

    }
    return { // three public functions are closures
        increment: function () { changeBy(100); },
        decrement: function () { changeBy(-100); },
        value: function () { return privateCounter; }

    }

};
var counter1 = new Counter();
//counter1.changeBy(1);//private
counter1.increment();
console.log(counter1.value());//100


function Person() {

    return {
        sayhello: function () {
            console.log("hello, I am " + this.name);
        },

        getName: function () {
            return this.name;
        },
        setName: function (name) {
            this.name = name;
        }
    }
}

var Student = new Person();//has a copy of name and sayhello
console.log(Student);
Student.sayhello();
console.log(Student.getName());//undefined
Student.setName("Bimal");
console.log(Student.getName());
