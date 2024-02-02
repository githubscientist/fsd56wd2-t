// let person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// console.log(Object.keys(person));

// console.log(Object.values(person));

// for...of loop
// for (let key of Object.keys(person)) {
//     console.log(person[key]);
// }

// for...in loop directly on person object
// for (let key in person) {
//     console.log(key, ":", person[key]);
// }



// let person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// let entries = Object.entries(person);

// for (let entry of entries) {
//     console.log(entry[0], entry[1]);
// }

// Exercise: print all the values from the object person using for...in loop 

/*
    Expected Output: 

    John
    30
    New York
*/

let person = {
    name: "John",
    age: 30,
    city: "New York"
};

// for (let label in person) {
//     console.log(person[label]);
// }

// for (let index in Object.keys(person)) {
//     console.log(person[Object.keys(person)[index]]);
// }

// console.log(Object.values(person));

// for (let index in Object.values(person)) {
//     console.log(Object.values(person)[index]);
// }

for (let value of Object.values(person)) {
    console.log(value);
}