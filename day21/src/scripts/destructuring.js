// let triangle = [3, 4, 5];

// let side1 = triangle[0];
// let side2 = triangle[1];
// let side3 = triangle[2];

// console.log(side1, side2, side3);

// let triangle = [3, 4, 5];

// let [side1, side2, side3] = triangle;

// console.log(side1, side2, side3);

/*
    destructuring is a way to unpack values from arrays, or properties from objects, into distinct variables.
*/

// let triangle = {
//     side1: 3,
//     side2: 4,
//     side3: 5
// };

// let { side1, side2, side3 } = triangle;

// console.log(side1, side2, side3);

// let sum = (a, b, c, ...rest) => {
//     console.log(rest);
//     return a + b + c;
// }


// console.log(sum(10, 20, 30));

let name = "John Doe";
let email = "john@gmail.com";
let phone = "123-456-7890";

let person1 = {
    name: name,
    email: email,
    phone: phone
}

console.log(person1);

// using object property shorthand

let person2 = {
    name,
    email,
    phone
}

console.log(person2);