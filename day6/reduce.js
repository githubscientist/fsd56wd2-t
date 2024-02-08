// let numbers = [3, 5, 1, 4, 2, 6];

// find the sum of the array numbers
// result: 15

// without reduce method
// let sum = 0;

// for (let number of numbers) {
//     sum = sum + number;
// }

// console.log(sum);
// function reducer(previousValue, currentValue) {
//     // console.log(previousValue, currentValue);
//     // return a result
//     return previousValue + currentValue;
// }


// // with reduce method
// console.log(numbers.reduce(reducer));

// with reduce method
// console.log(numbers.reduce(function (previousValue, currentValue) {
//     return previousValue + currentValue;
// }));

// console.log(numbers.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue;
// }));

// console.log(numbers.reduce((prev, curr) => prev + curr));

// let numbers = [3, 5, 1, 4, 2, 6];

// function reducer(previousValue, currentValue) {
//     // console.log(previousValue, currentValue);
//     // return a result
//     return previousValue + currentValue;
// }


// // with reduce method
// console.log(numbers.reduce(reducer, 10));

// let numbers = [3, 5, 1, 4, 2, 6];

// console.log(numbers.reduce((prev, curr) => prev + curr, 9));