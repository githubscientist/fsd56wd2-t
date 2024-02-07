let Array = require('./Array');

let numbers = new Array();

numbers.push(5);
numbers.push(6);
numbers.push(7);

numbers.whileEach((number, index, array) => {
    console.log(number, index, array);
})

// console.log(numbers.toArray());