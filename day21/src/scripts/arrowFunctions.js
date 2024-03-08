// function countChar(str, char) {
//     if(char.length !== 1) {
//         console.log('Character must be a single character string');
//     }

//     // if the char is a single character string

//     // intialize a count variable to 0
//     let count = 0;

//     // loop through the string
//     for (let character of str) {
//         // check if the character is equal to the char
//         if (character === char) {
//             // increment the count
//             count++;
//         }
//     }

//     // return the count
//     return count;
// }

// console.log(countChar('hello', 'a'));

// with arrow function syntax

let countChar = (str, char) => {
    if(char.length !== 1) {
        console.log('Character must be a single character string');
    }

    // if the char is a single character string

    // intialize a count variable to 0
    let count = 0;

    // loop through the string
    for (let character of str) {
        // check if the character is equal to the char
        if (character === char) {
            // increment the count
            count++;
        }
    }

    // return the count
    return count;
}

console.log(countChar('hello', 'l'));