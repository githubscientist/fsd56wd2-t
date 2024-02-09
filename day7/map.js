// let fruits = ["apple", "banana", "mango", "orange", "papaya"];

// const toUpper = (fruit) => {
//     return fruit.toUpperCase();
// }

// // convert all the fruit names to uppercase
// console.log(fruits.map(toUpper));

// convert all the fruit names to Title Case
// let fruits = ["apple", "banana", "mango", "orange", "papaya"];

// const toUpper = (fruit) => {
//     return fruit.slice(0, 1).toUpperCase() + fruit.slice(1,);
// }

// console.log(fruits.map(toUpper));


// to find the total length of the fruit names
// let fruits = ["apple", "banana", "mango", "orange", "papaya"];

// console.log(fruits.map((fruit) => {
//     return fruit.length;
// }));

let fruits = ["apple", "banana", "mango", "orange", "papaya"];

console.log(fruits.map(fruit => fruit.length).reduce(
    (prev, curr) => {
        return prev + curr;
    }
));