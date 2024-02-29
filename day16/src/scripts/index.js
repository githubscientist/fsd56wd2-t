/*
    callbacks: 

    - A callback is a function that is passed as an argument to another function and is executed after its parent function has completed.
    - Give me a function, and I will call the function for you later!
*/

// Example : 1
// function sayHello() { 
//     console.log('Hello');
// }

// setTimeout(sayHello, 3000);

// ----------------------------------------------
// Example : 2

// function add(a, b) {
//     return a + b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function divide(a, b) {
//     return a / b;
// }

// function calc(a, b, callback) {
//     return callback(a, b);
// }

// console.log(calc(10, 5, divide)); // 2


// ----------------------------------------------

/*
    exercise: 

    function: RepeatString

    - Create a function that takes a string and a callback function as arguments. 
    - The function should log the string to the console, and then call the callback function.
    - The callback function should log the string to the console again.

    - Example:

    input: RepeatString("Hello", callback)
    output:

    Hello
    Hello
*/

// function cb(word) {
//     console.log(word);
// }


// function RepeatString(word, callback) {
//     console.log(word);
//     callback(word);
// }

// RepeatString('Hello', cb);

// ----------------------------------------------

/*
    - Array methods that use callbacks:
        - forEach
*/

// class Array {
//     constructor() {
//         this.arr = [];
//     }

//     forEach(callback) {
//         for (let i = 0; i < this.arr.length; i++){
//             callback(this.arr[i]);
//         }
//     }

//     add(value) {
//         this.arr.push(value);
//     }

//     map(callback) {
//         // create an empty array
//         let newArray = [];

//         // loop through the array
//         for (let i = 0; i < this.arr.length; i++){
//             newArray.push(callback(this.arr[i]));
//         }

//         return newArray;
//     }

//     toArray() {
//         return this.arr;
//     }
// }

// module.exports = Array;

// ----------------------------------------------

// pain of callbacks: when you have to write a lot of nested callbacks, it can be hard to read and understand the code. this is called "callback hell".
function firstTask(callback) {
    console.log('starting first task...');
    setTimeout(() => {
        console.log('first task is completed.');
        callback();
    }, 3000);
}

function secondTask(callback) {
    console.log('starting second task...');
    setTimeout(() => {
        console.log('second task is completed.');
        callback();
    }, 2000);
}

function thirdTask(callback) {
    console.log('starting third task...');
    setTimeout(() => {
        console.log('third task is completed.');
        callback();
    }, 1000);
}


firstTask(function () {
    secondTask(function () {
        thirdTask(function () {
            console.log('all the tasks are completed!');
        });
    });
});