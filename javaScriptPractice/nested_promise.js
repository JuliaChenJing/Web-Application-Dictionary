//https://www.youtube.com/watch?v=s6SH72uAn3Q&t=29s

let cleanRoom = function () {
    return new Promise(function (resolve, reject) {
        resolve('cleaned The Room.');
    });
};

let removeGarbage = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + ' removed Garbage.');
    });
};

let winIcecream = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + ' won Icecream.');
    });
};

cleanRoom().then(function (result) {
    return removeGarbage(result);
}).then(function (result) {
    return winIcecream(result);
}).then(function (result) {
    console.log('Finished: ' + result);
})
