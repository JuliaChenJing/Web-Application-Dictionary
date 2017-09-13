var Banana = {
    color: "red",
  
    getColor: function(){
        return this.color;
    }
};
var banana1 = Object.create(Banana);
var banana2 = Object.create(Banana);
console.log(banana1.color);//red
console.log(banana2.color);//red
console.log(banana1.getColor());//red
console.log(banana2.getColor());//red
console.log("Same banana? " + (banana1 === banana2));//false



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

    console.log("Same instance? " + (instance1 === instance2));//true
}
run();