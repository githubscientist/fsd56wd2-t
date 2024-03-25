// let PI = require('./modules').PI;

// console.log(PI); // 3.14159265359

// let {PI, E, person} = require('./modules');

// console.log(PI);

let print = (...nums) => {
    return (type) => {
        if (type === 'even') {
            return nums.filter(num => num % 2 === 0);
        } else if (type === 'odd') {
            return nums.filter(num => num % 2 !== 0);
        }
    }
}

console.log(print(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)('odd'));