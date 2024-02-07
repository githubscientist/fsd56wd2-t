/*
    classes in JS

        - ES6 introduced classes to JS 
        - classes are a template for creating objects
*/

// // defining a class
// class Book {
//     constructor() {
//         this.name = 'NONAME';
//         this.author = 'NOAUTHOR';
//     }
// }

// // create an object to the class
// let book101 = new Book();

// let book102 = new Book();

// console.log(book101);

// console.log(book102);

// let Book = {
//     name: 'NONAME',
//     author: 'NOAUTHOR'
// }

// let book101 = { ...Book };

// let book102 = { ...Book };

// console.log(book101);
// console.log(book102);

// book101.name = 'dsa';
// book102.name = 'cs';

// book101.author = 'sathish';
// book102.author = 'krish';

// console.log(book101);
// console.log(book102);

// let sayHello = () => {
//     console.log('hello');
// }


// class Book {
//     constructor() {
//         this.name = 'NONAME'
//         this.author = 'NOAUTHOR'
//     }

//     // methods
//     getDetails() {
//         console.log(this.name, this.author);
//     }
// }

// let book101 = new Book();

// let book102 = new Book();

// book101.name = 'dsa';
// book102.name = 'cs';

// book101.author = 'sathish';
// book102.author = 'krish';

// book102.getDetails();

// let numbers = new Array();

// numbers.push(5);

// console.log(numbers);

/*
    Exercise:

    - Create a class called 'Person' with the following properties:
        - name
        - age

    - Create a method called 'getDetails' which prints the name and age of the person

    - Create two objects to the class and print the details of the person.
*/

// class Person {
//     constructor() {
//         this.name = '';
//         this.age = 0;
//     }

//     getDetails() {
//         console.log(`Name: ${this.name}`);
//         console.log(`Age: ${this.age}`);
//         console.log();
//     }
// }

// let person1 = new Person();
// let person2 = new Person();

// person1['name'] = 'sathish';
// person1['age'] = 30;

// person2['name'] = 'krish';
// person2['age'] = 25;

// person1.getDetails();
// person2.getDetails();

class Person {
    static totalVotes = 0;

    // default constructor if ignored gets assigned automatically
    constructor(votes = 0) {
        this.votes = votes;
        Person.totalVotes += votes;
    }

    addVote() {
        this.votes++;
        Person.totalVotes++;
    }

    voteStats() {
        console.log(`Total Votes: ${Person.totalVotes}`);
        console.log(`Votes: ${this.votes}`);
    }
}

let person1 = new Person(250);

person1.addVote();

let person2 = new Person(320);

person2.addVote();
person2.addVote();

person1.voteStats();
person2.voteStats();