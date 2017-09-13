/*An object literal is a comma separated list of name value pairs wrapped in curlybraces.
 In JavaScript an object literal is defined as follows: 
 var someObject = { 
     some_prop: 'some string value',
  another_prop: 'another string value', 
      int_prop: 100 }; 

*/
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