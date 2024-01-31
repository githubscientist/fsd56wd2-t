/*
    Variables: a label that points to a memory location or address where we can store data.

    Data Types: What kind/type of data we can store in a variable.

    1. Number
        - any number, including numbers with decimals: 4, 8, 1516, 23.42

    2. String
        - any sequence of characters (alphabets - lowercase and uppercase) or numbers or symbols.
        - example: "Hello World", "1234", "I am a password@123!"
    
    3. Boolean
        - true or false
    
    4. Object
        - Arrays
            - to store multiple values in a single variable.
            - list of comma separated values enclosed in square brackets.
            - example: [1, 2, 3, 4, 5]
            - but in js, an array type is object.
        - JS Object
    
    5. Undefined
    6. Null
    7. NaN

    - To check the type of data we can use typeof function.
*/

// let age = 25;

// console.log(typeof(age));

// let percentage = 99.9;

// console.log(typeof(percentage));

// -------------------------------------------------------------------------

// let word = 'apple';
// let word = "apple";
// let sentence = `apple is a fruit
// and it is sweet`; // they are called template literals
// let stringObject = new String('apple');

// console.log(stringObject);
// console.log('type:', typeof(stringObject));

// -------------------------------------------------------------------------

// let age = 25;
// let isEligibleToVote = false;

// console.log(isEligibleToVote);
// console.log('type:', typeof(isEligibleToVote));

// -------------------------------------------------------------------------

// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers);
// console.log('type:', typeof(numbers));

// -------------------------------------------------------------------------

// let book101Array = ['Harry Potter', 200, 500.50, 'J.K. Rowling', true];

// // Javascript Object Notation (JSON)
// let book101 = {
//     title: 'Harry Potter',
//     noOfPages: 200,
//     price: 500.50,
//     author: 'J.K. Rowling',
//     isAvailable: true
// } 

// console.log(book101);
// console.log('type:', typeof(book101));

// -------------------------------------------------------------------------

// let name;

// console.log(name);

// let name = null;

// console.log(name);
// console.log('type:', typeof(name));

// let name = NaN;

// console.log(name);
// console.log('type:', typeof(name));

// example for NaN

let result = 10 / 'a';

console.log(result);