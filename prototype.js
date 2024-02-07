/*
    Prototype: 

        - allows us to create a template for an object.
        - It allows us to add methods and properties to objects.
*/

// function prototype
function Person() {
    this.name = '';
    this.age = 0;

    // methods
    this.getDetails = function () {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}

// class Person{
//     constructor(){
//         this.name = '';
//         this.age = 0;
//     }
//     getDetails(){}
// }

let person1 = new Person();
let person2 = new Person();

person1.name = 'sathish';
person1.age = 30;

person2.name = 'krish';
person2.age = 25;

person1.getDetails();
person2.getDetails();
