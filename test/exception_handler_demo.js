console.log("---------------------------Exception Handling in JavaScript ---------------------------------------");

/* Try, catch, finally */
console.log("---------------------------Demo 1 ---------------------------------------");
try {
    console.log('in try: Start of try runs');

    unicycle;

    console.log('End of try runs -- never reached');

} catch (err) {

    console.log('in catch: Error has occured: ' + err);

} finally {
    console.log('in finally: This is always run');
}

console.log('after finally:...Then the execution continues');


console.log("---------------------------Demo2 ---------------------------------------");

let json = '{ "age": 30 }';

try {

    let user = JSON.parse(json);
    if (!user.name) {
        throw new SyntaxError("thow: Incomplete data: no name");
    }

    console.log(user.name);

} catch (e) {
    console.log("in catch: JSON Error: " + e);
}




