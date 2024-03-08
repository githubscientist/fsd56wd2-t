// Scoping - var vs let vs const 

/*
    var 
        - function scoped
        - is hoisted
        - can be redeclared and updated
    let 
        - block scoped
        - is not hoisted
        - can be updated but not redeclared
    const 
        - block scoped
        - is not hoisted
        - cannot be updated or redeclared
        - should be initialized at the time of declaration
*/

// Scope: Tells us where a variable is available in our code and where it's not

// // entire file
// let x = 10;

// // separate block
// if (true) {
//     console.log(x); // x is known here
// }

// ----------------------------

// // entire file-block
// let x = 10;

// // separate block - 1
// if (true) {
//     let x = 20;
//     console.log(x); // outside block x is not known but inside block x is known
// }

// // after we come out of block - 1, the file-block x is known
// console.log(x);

// ----------------------------

// // separate block - 1
// if (true) {
//     let x = 20; // block scoped
//     console.log(x); 
// }

// // after we come out of block - 1, the file block does not know x
// console.log(x);

// ----------------------------

// separate block - 1
// if (true) {
//     var x = 20; // function scoped
//     console.log(x); 
// }

// // after we come out of block - 1, the file block knows x
// console.log(x);

// ----------------------------

// var x = 10;

// var x = 20; // redeclared and updated

// console.log(x);

// ----------------------------

// let x = 10;

// let x = 20; // cannot be redeclared

// console.log(x);

// ----------------------------

// let x = 10;

// x = 20; // can be updated

// console.log(x);

// ----------------------------


// const x = 10;

// const x = 20; // can't be redeclared

// console.log(x);

// ----------------------------

// const x = 10;

// x = 20; // cannot be updated

// console.log(x);

// ----------------------------

// for (let i = 1; i <= 10; i++){
//     console.log(i); // i is known here because of block scope
// }

// console.log(i); // i is not known here

// ----------------------------

for (var i = 1; i <= 10; i++){
    console.log(i); // i is known here because of function scope
}

console.log(i); // i is known here because of function scope