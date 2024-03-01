// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject();
//     }, 3000);
// });

// promise
//     .then(
//         () => {
//             console.log('Promise was resolved');
//         },

//         () => {
//             console.log('Promise was rejected');
//         }
//     )

// ----------------------------------------------------------

let promise = new Promise((resolve, reject) => {
    let randomNumber = Math.random() * 10;
    console.log(randomNumber);
    if (randomNumber > 5) {
        setTimeout(() => {
            resolve(randomNumber);
        }, 3000);
    } else {
        setTimeout(() => {
            reject(randomNumber);
        }, 3000);
    }
});

// print the promise state initially
// console.log(promise);

promise
    .then(
        (result) => {
            console.log('Promise was resolved with the result: ' + result);
        },

        (result) => {
            console.log('Promise was rejected with the result: ' + result);
        }
    )

// print the promise state after 3 seconds
// setTimeout(() => {
//     console.log(promise);
// }, 3000);