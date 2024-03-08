/*
    Lexical Scoping:

    Lexical scoping is a convention used with many programming languages that sets the scope of a variable so that it may only be called (or refer to) from within the block of code in which it is defined. This is also known as static scoping.

*/

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.emailIsVerified = false;
    }

    verifyEmail() {
        this.emailIsVerified = true;
    }
}

function printThis(user1) {
    console.log(user1);
}

const user1 = new User('John', 'john@gmail.com');
const user2 = new User('Jane', 'jane@gmail.com');

// user2.printThis(); 

printThis(user2); // window object