var Apple = new function () {
    this.color = 'red';
}
var apple1 = Object.create(Apple);
var apple2 = Object.create(Apple);
console.log(apple1.color);//red
console.log(apple2.color);//red
console.log("Same apple? " + (apple1 === apple2));



var Singleton = (function () {
    var instance;

    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function run() {

    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();

    console.log("Same instance? " + (instance1 === instance2));
}
run();