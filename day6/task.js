// let book = {
//     name: 'dsa',
//     author: 'sathish', 
//     price: 452.32,
//     noOfPages: 30,
//     isAvailable: true,
//     noOfCopies: 10, 
//     genres: ['programming', 'computer science', 'interviews'],
//     skills: {
//         technicalSkills: ['c', 'c++', 'java'],
//         softSkills: ['communication', 'resume', 'behaviour']
//     }
// }

// for...in loop
// for (let key in book) {
//     console.log(key, ':', book[key]);
// }

// console.log(Object.keys(book)); // prints all the keys of the object as an array

// console.log(Object.entries(book)); // prints all the entries [key, value] as an array

// for loop
// let entries = Object.entries(book);
// for (let index = 0; index < entries.length; index++){
//     let entry = entries[index];
//     console.log(entry[0], ':', entry[1]);
// }

// for...of loop
// let entries = Object.entries(book);
// for (let entry of entries){
//     console.log(entry[0], ':', entry[1]);
// }

// for...each loop
// let entries = Object.entries(book);
// entries.forEach(entry => {
//     console.log(entry[0], ':', entry[1]);
// });

// console.log(book["skills"]);

// console.log(JSON.stringify(book));

// let JSONString = '{"name":"dsa","author":"sathish","price":452.32,"noOfPages":30,"isAvailable":true,"noOfCopies":10,"genres":["programming","computer science","interviews"],"skills":{"technicalSkills":["c","c++","java"],"softSkills":["communication","resume","behaviour"]}}';

let resume = {
    "name": "dsa",
    "author": "sathish",
    "price": 2325.12,
    "noOfPages": 30,
    "isAvailable": true,
    "noOfCopies": 20,
    "genres": ["maths", "science", "history"]
};

for (let key in resume) {
    console.log(key, ':', resume[key]);
}

// console.log(Object.entries(resume));