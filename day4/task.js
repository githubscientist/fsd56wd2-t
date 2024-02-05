/*
question1:
How to compare two JSON have the same properties without order?
a. let obj1 = ( name: "Person 1", age:5 };
b. let obj2 = { age:5, name: "Person 1" }:
*/

var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

// '['age', 'name']'
//  '['age', 'name']'

var sortedObj1 = JSON.stringify(obj1, Object.keys(obj1).sort());
var sortedObj2 = JSON.stringify(obj2, Object.keys(obj2).sort());
if (sortedObj1 === sortedObj2) {
    console.log("The JSON objects are equal.");
} else {
    console.log("The JSON objects are not equal.");
}
