/*
Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
*/

// without destructuring
// let values = ['krish', 25, 100000];

// let name = values[0];
// let age = values[1];
// let salary = values[2];

// console.log(name, age, salary);

// with destructuring
// let values = ['krish', 25, 100000];

// // let [name, age, salary] = [values[0], values[1], values[2]];

// let [name, age, salary] = values;

// console.log(name, age, salary);

// let values = ['krish', 25, 100000];

// let [name, age] = values;

// console.log(name, age);

// let values = ['krish', 25];

// let [name, age, salary] = values;

// console.log(name, age, salary);

// let values = ['krish', 25, 100000];

// let [, , salary] = values;

// console.log(salary);

// let values = ['krish', 25, 100000];

// let [name, ...person] = values;

// console.log(name);
// console.log(person);

// let person = {
//     name: 'krish',
//     age: 25,
//     salary: 100000
// };

// // let name = person.name;
// // let age = person.age;
// // let salary = person.salary;

// let { name, age, salary } = person;

// console.log(name, age, salary);

// let person = {
//     name: 'krish',
//     age: 25,
//     salary: 100000
// };

// let { name, age, income } = person;

// console.log(name, age, income);

// let person = {
//     name: 'krish',
//     age: 25,
//     salary: 100000
// };

// let { name, age, salary: income } = person;

// console.log(name, age, income);

// object property shorthand

// let name = 'krish';
// let age = 25;
// let salary = 100000;

// // let person = {
// //     name: name,
// //     age: age,
// //     salary: salary
// // };

// let person = {
//     name,
//     age,
//     salary
// };

// console.log(person);

/*

    template literals: 

    - Template literals are string literals allowing embedded expressions.

*/

// let name = 'krish';

// // let message = 'Hello ' + name + '!';

// let message = `Hello ${name}!`;

// console.log(message);

// let numbers = [1, 2, 3];

// let print = (value, index) => {
//     if (value % 2 == 0) {
//         console.log(value);
//     }
// }

// numbers.forEach(print);

let numbers = [1, 2, 3];

numbers.forEach((value) => {
    if (value % 2 == 0) {
        console.log(value);
    }
});