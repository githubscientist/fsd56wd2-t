/*
    mdn documentation for arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/

    Arrays 
    
    - to store multiple values in a single variable
    - it uses index to access the values(starts from 0)
    - we can store an element at a particular index
*/

// to create an array of numbers
// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers);

// to create an empty array
// let numbers = [];

// console.log(numbers);

// let numbers = [1, 2, 3, 4];

// // to print all the values in the array
// console.log(numbers);

// // to print the second value in the array
// console.log(numbers[1]);

// to access the last value in the array
// console.log(numbers[6]);

// to print the number of elements in the array
// console.log(numbers.length);

// to print the last index of the array
// console.log(numbers.length - 1);

// to print the last value in the array
// console.log(numbers[numbers.length - 1]);

// --------------------------------------------

// let numbers = [1, 2, 3, 4];

// // console.log(numbers[0]);

// numbers[0] = 10;

// console.log(numbers);

/*
    Methods in the array:

    - push(data) - to add an element at the end of the array
    - pop() - to remove an element from the end of the array
    - unshift(data) - to add an element at the beginning of the array
    - shift() - to remove an element from the beginning of the array
    - splice() - to add or remove an element from the array at a particular index

*/

// let numbers = [1, 2, 3, 4];

// numbers.push(6); // pushes 6 at the end of the array

// numbers.push(7); // pushes 7 at the end of the array

// numbers.pop(); // removes the last element from the array
// numbers.pop(); numbers.pop();

// numbers.unshift(-1); // adds -1 at the beginning of the array

// numbers.unshift(-2); // adds -2 at the beginning of the array

// numbers.shift(); // removes the first element from the array

// numbers.shift(); // in-place operation

// numbers.push(5, 6, 7); // in-place operation

// numbers.splice(3, 0, 4); // adds 4 at index 3

// numbers.splice(4, 0, 11); // adds 11 at index 4

// // remove the value 6
// numbers.splice(6, 1);

// // remove the value 11 at index 4
// numbers.splice(4, 2); // in-place operation

// // console.log(numbers);

// let numbers = [3, 5, 4, 1];

// // iteration in the array
// for (let index = 0; index < numbers.length; index++){
//     console.log(numbers[index]);
// }

// // for loop
// let numbers = [3, 5, 4, 1];
// let index = 0
// for (; index < numbers.length; ){
//     console.log(numbers[index]);
//     index++
// }

// // while loop
// let numbers = [3, 5, 4, 1];
// let index = 0
// while ( index < numbers.length ){
//     console.log(numbers[index]);
//     index++
// }

// do...while loop
// let numbers = [3, 5, 4, 1];
// let index = 4
// do {
//     console.log(numbers[index]);
//     index++
// } while (index < numbers.length);

// let numbers = [3, 5, 4, 1];
// // ES6: for...in loop
// for (let index in numbers){
//     console.log(numbers[index]);
// }

let numbers = [3, 5, 4, 1];
// ES6: for...of loop
for (let value of numbers){
    console.log(value);
}


// optional:
// let numbers = [3, 5, 4, 1];

// // for...each loop
// numbers.forEach((number) => {
//     console.log(number);
// });