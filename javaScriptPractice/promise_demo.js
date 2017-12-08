//https://github.com/JuliaChenJing/Web_Application_Dictionary/edit/master/javaScriptPractice/promise_demo.js
let promiseToCleanTheRoom = new Promise(function(resolve, reject) {
    
      //cleaning the room
    
      let isClean = false;
    
      if (isClean) {
        resolve('Clean');
      } else {
        reject('not Clean');
      }
    
    });
    
    promiseToCleanTheRoom.then(function(fromResolve) {
      console.log('the room is' + fromResolve);//the room is clean
    }).catch(function(fromReject){
        console.log('the room is ' + fromReject);//the room is not clean
    })
