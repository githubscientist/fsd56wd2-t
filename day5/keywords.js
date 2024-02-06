// var vs let vs const

// let - block scoped
// var - function scoped

// 1. redeclarations, scope: block, function

// let age = 25;

// {
//     let age = 'twenty five'; // cannot redeclare block-scoped variable
//     console.log(age);
// }

// var age = 25;

// var age = 'twenty five'; // re-declarations are allowed in var types

// console.log(age);

// loops without any body of statements
// for (var i = 0; i < 5; i++){

// }
// console.log(i);

// var i;
// for (i = 0; i < 5; i++){

// }
// console.log(i);

// let x = 10;

// if (true) {
//     let x = 20;
//     console.log(x);
// }

// console.log(x);

// let x = 10;

// function printX() {
//     let x = 20;
//     console.log(x);
// }

// printX();
// console.log(x);

// 2. hoisting

// console.log(x);

// let x; // let does not support hoisting

// x = 20;
// console.log(x);

// var x;

// 3. constants: Once initialized the values can't be changed.

// const x = 10;

// x = 25; // this will throw an error as constants can't be changed.

// console.log(x);

// const numbers = [1, 2, 4];

// // numbers[0] = 11;

// numbers = [3, 4, 5];

// // numbers.pop(); numbers.pop(); numbers.pop();

// // numbers.push(3, 4, 5);

// console.log(numbers);

// const book = {
//     title: 'dsa',
//     author: 'sathish',
//     price: 546
// }

// // book.title = 'datastructures and algorithms'

// // this is not allowed
// // book = {
// //     title: 'data structures and algorithms',
// //     author: 'sathish',
// //     price: 546
// // }

// // console.log(book);

// book = {
//     title: 'dsa',
//     author: 'sathish',
//     price: 546
// }

// console.log(book);

// const x = 10;

// x = 20;

// const nums = [1, 2];

// nums = [1, 2]; // cannot re-assign

// console.log(nums);

const x = [1, 2, 3];

x.push(4);

console.log(x);
