var obj = { a:10};

Object.defineProperties(obj,{
  'b':{get: function(){
    return this.a;
}},
'c':{set: function(n){
    this.a = n;
}}
});

console.log("Value of a:"+obj.b);
obj.c = 20;         // it will set the value of a to 20
console.log("Value of a:"+obj.b);