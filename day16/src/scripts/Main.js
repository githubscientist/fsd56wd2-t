let Array = require('./index');

let numbers = new Array();

numbers.add(2);
numbers.add(3);
numbers.add(5);
numbers.add(7);

// numbers.forEach((value) => {
//     console.log(value);
// });

console.log(numbers.map(value => {
    if (value % 2 == 0) {
        return value ** 2;
    } else {
        return value ** 3;
    }
}));

console.log(numbers.toArray());