/*
    spread operator: ...

    - spread operator is used to spread the elements of an array or object
*/

// let numbers = [1, 2, 3];

// // console.log(numbers);

// // console.log(...numbers);

// // console.log(1, 2, 3);

// // let newNumbers = [...numbers, 4, 5, 6];

// let newNumbers = [4, 5, 6, ...numbers];

// console.log(newNumbers);

/* 
    shallow copy vs deep copy
*/

// let a = 10;

// let b = a;

// console.log('a:', a);
// console.log('b:', b);

// a = 20;

// console.log('a:', a);
// console.log('b:', b);

// this is shallow copy
// let a = [1, 2, 3];

// let b = a;

// console.log('a:', a);
// console.log('b:', b);

// a[0] = 10;
// b[1] = 20;

// console.log('a:', a);
// console.log('b:', b);

// this is deep copy
// let a = [1, 2, 3];

// let b = [...a];

// a[0] = 15;

// b[0] = 10;

// console.log('a:', a);
// console.log('b:', b);

// let person1 = {
//     name: 'John',
//     age: 25,
//     course: 'FSD',
//     location: 'Chennai'
// };

// let person2 = {
//     ...person1,
//     name: 'Carter'
// };

// delete person2.location;

// console.log(person1);

// console.log(person2);

// console.log(Math.max(4, 6, 87, 3, 346, 46));

let numbers = [4, 6, 87, 3, 46];

console.log(Math.max(...numbers));