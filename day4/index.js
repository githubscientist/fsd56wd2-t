// JSON String

let person = {
    name: "John",
    age: 30,
    city: "New York"
};

// console.log(JSON.stringify(person)); // {"name":"John","age":30,"city":"New York"}

// console.log(person["name"]);

let JSONString = '{"name":"John","age":30,"city":"New York"}';

// console.log(JSONString.split(',')[0].split('{')[1]);

let JSONObject = JSON.parse(JSONString);

console.log(JSONObject["name"]);