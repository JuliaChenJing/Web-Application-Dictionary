"use strict";

// question 1> Define a function max() that takes two numbers as arguments and returns the largest of them.
//  Use the if-then-else construct available in Javascript.
console.log("---------------------------number problem----------------------------------------");
function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}


console.log('1> Maximum between (5, 8) => ' + max(5, 8));


//2> Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree() {
    let i = 0;
    let max = -Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

console.log('2> Maximum between 5,56 and 8 => ' + max(5, 56, 8));

//question 3 Example: [6,4,0, 3,-2,1].bubbleSort(); 
//Output : [-2, 0, 1, 3, 4, 6]
//bubble sort

Array.prototype.bubbleSort = function () {
    let self = this;
    // console.log(self);
    for (let i = 0; i < self.length; i++) {
        for (let j = 0; j < self.length - 1; j++) {
            if (self[j] > self[j + 1]) {
                let temp = self[j];
                self[j] = self[j + 1];
                self[j + 1] = temp;
            }
        }
    }
    return "[" + self + "]";
}

console.log('3> bubble sort [6, 4, 0, 3, -2, 1] ' + [6, 4, 0, 3, -2, 1].bubbleSort());


// 4) Define a function sum() and a function multiply() that sums and multiplies (respectively) all 
// the numbers in an array of numbers. 
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
function sum(x, y, ...more) {
    let total = x + y;
    if (more.length > 0) {
        for (let i = 0; i < more.length; i++)
            total += more[i];
    }
    return total;
}



function multiply(x, y, ...more) {
    let total = x * y;
    if (more.length > 0) {
        for (let i = 0; i < more.length; i++)
            total *= more[i];
    }
    return total;
}

console.log('4> The total of 1,2,3,4 => ' + sum(1, 2, 3, 4));
console.log('\t The product of 1,2,3,4 => ' + multiply(1, 2, 3, 4));

function multiply(a, b) {
    return a * b;
}

console.log('the use of .bind  ' );
var multipleByTwo = multiply.bind({}, 2); // set a = 2
console.log(multipleByTwo(4)); // 8
var multipleByThree = multiply.bind({}, 3); // set a = 3
console.log(multipleByThree(4)); // 12

console.log("---------------------------string problem----------------------------------------");
//5> Write a function isVowel() that takes a character (i.e. a string of length 1) and 
// returns true if it is a vowel, false otherwise.
function isVowel(char) {
    if (char == 'a' | char == 'e' | char == 'i' | char == 'o' | char == 'u') {
        return true;
    } else
        return false;
}
console.log('5> z isVowel -> ' + isVowel('z'));
console.log('\t a isVowel -> ' + isVowel('a'));


// 6>Define a function reverse() that computes the reversal of a string.
//  For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(str) {
    let reverseString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }
    return reverseString;
}
console.log('6> The reverse of "abcde" --> ' + reverse("abcde"));

// 7> Write a function findLongestWord()
//  that takes an array of words and returns the length of the longest one.
function findLongestWord(...args) {
    let maxLength = 0;
    args.forEach(function (arg) {
        if (arg.length > maxLength) {
            maxLength = arg.length;
        }
    }, this);
    return maxLength;
}
var words = ['dog', 'aeroplane', 'management', 'dancingOnTheRoad', 'partyAllNight', 'human'];
console.log('7> Length of longest words [] => ' + findLongestWord(...words));

//console.log('Words in the array are: -> ' + words);
// 8> Write a function filterLongWords()
//  that takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords(i, ...args) {
    var retArray = new Array();
    args.forEach(function (arg) {
        if (arg.length > i)
            retArray.push(arg);
    }, this);
    return retArray;
}
console.log('8> The returned words greater than size 5 are -> [' + filterLongWords(5, ...words) + ']');

//question 9 Define a filter function on the String object. The function accepts an array of strings that specifies a list banned words. The function returns the string after removing all the banned words


String.prototype.filter = function (badwords) {
    var self = this;
    // console.log('Our Input is -->' + self);
    badwords.forEach(function (badword) {
        var pattern = new RegExp(badword + "( | )", 'gi'); // gi ->global and ignore caseSensitive characters
        self = self.replace(pattern, "");
    }, this);
    return self;
}
console.log("9> filter words:This house is Not not nice!" + " This house is Not not nice!".filter(["not", "house"]));











