// let numbers = [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7];

// let uniqueNumbers = [...new Set(numbers)];

// console.log(uniqueNumbers);

let setA = new Set([1, 2, 3, 4, 5]);
let setB = new Set([3, 4, 5, 6, 7, 8, 9, 10]);

let unionSet = new Set([...setA, ...setB]);

// console.log(unionSet);

let intersectionSet = new Set([...setA].filter(x => setB.has(x)));

console.log([...intersectionSet]);