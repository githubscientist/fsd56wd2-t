// without destructuring
// let person = ["sathish", "software developer"];

// let name = person[0];
// let role = person[1];

// console.log(name);
// console.log(role);

/*
    destructuring: destructuring is a way to unpack values from arrays, or properties from objects, into distinct variables.
*/

// with destructuring
// let person = ["sathish", "software developer"];

// // let [name, role] = [person[0], person[1]];
// let [name, role] = person;

// console.log(name);
// console.log(role);

let person = {
    name: "sathish",
    role: "software developer",
};

let { name, role } = person;

console.log(name);
console.log(role);