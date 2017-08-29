	/*
input:  dict = {
            "Key1" : "1",
            "Key2" : {
                "a" : "2",
                "b" : "3",
                "c" : {
                    "d" : "3",
                    "e" : "1"
                }
            }
        }

output: {
            "Key1" : "1",
            "Key2.a" : "2",
            "Key2.b" : "3",
            "Key2.c.d" : "3",
            "Key2.c.e" : "1"
        }
	 */
	

const newDict = {};

function flattenDictionary(dict, keys = []) { // ['key2', 'a']
    let topKeys = Object.keys(dict);

    topKeys.forEach(key => { //'a'
        if (typeof dict[key] === 'object') {
            return flattenDictionary(dict[key], keys.concat(key));
        }

        if (typeof dict[key] === 'string') {

            let keyName = keys.length ? keys.concat(key).join('.') : key; //'a'
            //console.log(typeof dict[key], key, dict[key], keyName);
            return newDict[keyName] = dict[key];
        }
    })

}

function wrapper(dict) {
    flattenDictionary(dict);
    console.log(newDict);
}

let dict = {
    "Key1": "1",
    "Key2": {
        "a": "2",
        "b": "3",
        "c": {
            "d": "3",
            "e": "1"
        }
    }
}

wrapper(dict);