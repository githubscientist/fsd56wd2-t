/*
    Functions: A Function is a block of code that can be called and executed at any time.
*/

// create a new function
// function function_name(arg1, arg2, arg3. ....) { }
// function sayHello() {
//     console.log('hello');
// }

// // execute the function
// sayHello();

// --------------------------------------------------------------------------------

/*
    Function Types:
        - Function without arguments and without return value
        - Function with arguments and without return value
        - Function without arguments and with return value
        - Function with arguments and with return value
*/

// // Type: Function without arguments and without return value
// function sayHello() {
//     console.log('hello');
// }

// // execute the function
// sayHello();

// // Type: Function with arguments and without return value
// function sayHello(name) {
//     console.log('hello', name);
// }

// // execute the function
// sayHello('krish'); // function call

// // Type: Function with arguments and without return value
// function sayHello(name) {
//     console.log('hello', name);
// }

// let name = 'krish';
// sayHello(name); // function call

// // Type: Function with arguments and without return value
// function sayHello(name2) {
//     console.log('hello', name2);
// }

// let name1 = 'krish';
// sayHello(name1); // function call

// --------------------------------------------------------------------------------

// Type: Function with multiple arguments
// // Problem: Write a function to add two numbers
// function sum(num1, num2) {
//     console.log(num1 + num2);
// }

// sum(5, 6);
// sum(54, 623);

// // Problem: Write a function to add more than three numbers
// function sum(num1, num2, num3, ...nums) {
//     let total = num1 + num2 + num3;

//     // add all the values from nums array to the variable total
//     for (let index = 0; index < nums.length; index++){
//         total = total + nums[index];
//     }

//     console.log(total);
// }

// sum(5, 6, 4, 3, 2, 1, 7);

// // Problem: Write a function to add N numbers
// function sum(...nums) {
//     let total = 0;

//     // add all the values from nums array to the variable total
//     for (let index = 0; index < nums.length; index++){
//         total = total + nums[index];
//     }

//     console.log(total);
// }

// sum(1, 2, 3, 4, 5);

// --------------------------------------------------------------------------------

// // Problem: Write a function to add two numbers
// // default arguments
// function sum(num1=-5, num2=-6) {
//     console.log(num1 + num2);
// }

// sum();

// --------------------------------------------------------------------------------

// // Type: Function without arguments and without return value
// function sayHello(name='guest') {
//     console.log('hello', name);
// }

// sayHello();

// // Type: Function without arguments and with return value
// function sayHello() {
//     return 'hello';
// }

// console.log(sayHello());

// // Problem: Write a function to add two numbers
// function sum(num1, num2) {
//     return num1 + num2;
// }

// console.log(sum(5, 6));

// // Problem: Write a function to add two numbers
// function sum(num1, num2) {
//     return num1 + num2;
// }

// let incomeFirstQuarter = sum(5, 6);
// console.log(incomeFirstQuarter);

// --------------------------------------------------------------------------------

/*
    1. named functions
    2. nameless functions or anonymous functions
    3. arrow functions
    4. IIFE: Immediately Invoked Function Expression
*/

// Problem: Write a function to add two numbers

// named functions
// function sum(num1, num2) {
//     console.log(num1 + num2);
// }

// sum(5, 6);

// anonymous functions
// let sum = function (num1, num2) {
//     console.log(num1 + num2);
// }

// sum(5, 6);

// console.log(sum);

// // arrow function: ES6 (2015)
// let sum = (num1, num2) => {
//     console.log(num1 + num2);
// }

// sum(5, 6);

// IIFE: Immediately Invoked Function Expression
// ((num1, num2) => {
//     console.log(num1 + num2);
// })(5, 6);

// anonymous functions
// (function (num1, num2) {
//     console.log(num1 + num2);
// })(5, 6);

// ((num1, num2) => {
//     console.log(num1 + num2);
// })(5, 6);

/*
    Problem: Sum of all numbers in an array

    // arrow function
    let sum = (numbers) => {
        
    }


    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    sum(numbers)
*/

// // arrow function
// let sum = (numbers) => {
//     let total = 0;

//     for (let index = 0; index < numbers.length; index++){
//         total = total + numbers[index];
//     }

//     console.log(total);
// }

// // anonymous function
// let sum = function (numbers) {
//     let total = 0;

//     for (let index = 0; index < numbers.length; index++){
//         total = total + numbers[index];
//     }

//     console.log(total);
// }

// // IIFE
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// (function (numbers) {
//     let total = 0;

//     for (let index = 0; index < numbers.length; index++) {
//         total = total + numbers[index];
//     }

//     console.log(total);
// })(numbers);

// // IIFE

// (function (numbers) {
//     let total = 0;

//     for (let index = 0; index < numbers.length; index++) {
//         total = total + numbers[index];
//     }

//     console.log(total);
// })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// IIFE
((numbers) => {
    let total = 0;

    for (let index = 0; index < numbers.length; index++) {
        total = total + numbers[index];
    }

    console.log(total);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
