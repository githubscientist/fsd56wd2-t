// using let -> block level scope
// {
//     let x = 10; // x has block scope
//     console.log(x);
// }

// console.log(x); // error: x is not defined

// // using var -> function level scope
// {
//     var x = 10; // x has function scope
//     console.log(x);
// }

// console.log(x); // 10

// hoisting

x = 10;
console.log(x);

var x; // because of hoisting, x is declared at the top of the scope

// x = 10;
// console.log(x);

// let x;