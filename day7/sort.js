// let numbers = [4, 6, 2, 5, 1, 3];

// arranging elements or values in either ascending order [1, 2, 3, 4, 5, 6] or descending order [6, 5, 4, 3, 2, 1]
// sort method -> in-place method
// non-in place method example: map, reduce, filter, forEach, includes, indexOf, slice, ...
// in-place methods examples: sort, push, pop, unshift, shift, splice, ...
// function ascSorter(a, b) {
//     if (a < b) {
//         return -1;
//     } else if (a == b) {
//         return 0;
//     } else {
//         return 1;
//     }
// }

// function dscSorter(a, b) {
//     if (a < b) {
//         return 1;
//     } else if (a == b) {
//         return 0;
//     } else {
//         return -1;
//     }
// }

// function dscSorter(a, b) {
//     if (a > b) {
//         return -1;
//     } else if (a == b) {
//         return 0;
//     } else {
//         return 1;
//     }
// }

// numbers.sort(dscSorter);

// console.log(numbers);

// let numbers = [4, 6, 2, 5, 1, 3];

// function ascSorter(a, b) {
//     if (a < b) {
//         return -1;
//     } else if (a === b) {
//         return 0;
//     } else {
//         return 1;
//     }
// }

// let numbers = [4, 6, 2, 5, 1, 3];

// // numbers.sort((a, b) => a - b);

// numbers.sort((a, b) => b - a);

// console.log(numbers);

// ----------------------------------------

// let numbers = [4, 6, 2, 5, 1, 3, 100, 24, 366];

// function ascSorter(a, b) {
//     if (a < b) {
//         return -1;
//     } else if (a == b) {
//         return 0;
//     } else {
//         return 1;
//     }
// }

// numbers.sort(ascSorter);

// console.log(numbers);

// ------------------------

let words = ['app', 'ant', 'ankle', 'apple', 'and', 'arc', 'archer'];

function ascSorter(a, b) {
    if (a < b) {
        return -1;
    } else if (a == b) {
        return 0;
    } else {
        return 1;
    }
}

words.sort(ascSorter);

console.log(words);