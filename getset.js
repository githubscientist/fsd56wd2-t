/*
    getters and setters are used to access and modify the private properties of a class
*/

// class Customer {
//     constructor(ID, name, discount) {
//         this.ID = ID;
//         this.name = name;
//         this.discount = discount;
//     }

//     getID() {
//         return this.ID;
//     }

//     getName() {
//         return this.name;
//     }

//     getDiscount() {
//         return this.discount;
//     }

//     toString() {
//         return `${this.name}(${this.ID})`;
//     }

//     setDiscount(discount) {
//         this.discount = discount;
//     }
// }

// let customer101 = new Customer(101, 'krish', 50);
// // let customer101 = new Customer(); // default constructor call
// // let customer101 = new Customer(45, 'krish');

// // console.log(customer101.toString());

// customer101.setDiscount(25);

// console.log(customer101.getDiscount());

// console.log(customer101.toString());

// using get and set syntax
class Customer {
    constructor(ID, name, discount) {
        this.ID = ID;
        this._name = name;
        this._discount = discount;
    }

    get id() {
        return this.ID;
    }

    set id(newID) {
        this.ID = newID;
    }

    get name() {
        return this._name;
    }

    set name(_name) {
        this._name = _name;
    }

    get discount() {
        return this._discount;
    }

    toString() {
        return `${this._name}(${this.ID})`;
    }

    set discount(_discount) {
        this._discount = _discount;
    }
}

let customer101 = new Customer(101, 'krish', 50);
// let customer101 = new Customer(); // default constructor call
// let customer101 = new Customer(45, 'krish');

// console.log(customer101.toString());

// customer101.setDiscount(25);
customer101.discount = 25;

// console.log(customer101.getDiscount());

// console.log(customer101.toString());

console.log(customer101.discount);