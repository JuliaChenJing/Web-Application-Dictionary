var banana1 = Object.create(Banana);
var banana2 = Object.create(Banana);
console.log(banana1.color);//undefined
console.log(banana2.color);//undefined
console.log(banana1.getColor());//undefined
console.log(banana2.getColor());//undefined
console.log("Same banana? " + (banana1 === banana2));

//http://www.dofactory.com/javascript/singleton-design-pattern
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