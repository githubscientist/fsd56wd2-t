let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// result: array of even numbers

// without filter method
// let evenNumbers = [];

// for (let number of numbers) {
//     if (number % 2 == 0) {
//         evenNumbers.push(number);
//     }
// }

// console.log(evenNumbers);

// function evenFilter(number) {
//     if (number % 2 == 0) {
//         return true;
//     }
// }

// // with filter method
// let evenNumbers = numbers.filter(evenFilter);

// console.log(evenNumbers);

// with filter method
console.log(numbers.filter(number => number % 2 == 0));