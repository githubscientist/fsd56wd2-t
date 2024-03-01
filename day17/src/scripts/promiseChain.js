// // Promise Chaining
// new Promise((resolve, reject) => {
//     console.log('initial');
//     resolve();
// })
//     .then(
//         () => {
//             console.log('resolved');
//         },
//         () => {
//             console.log('rejected');
//         }
//     )

// Promise Chaining
new Promise((resolve, reject) => {
    console.log('initial');
    resolve();
})
    .then(() => {
        console.log('resolved');
    })
    .catch(() => {
        console.log('rejected');
    })
    .then(() => {
        console.log('do this no matter what happens before');
        throw new Error();
    })
    .then(() => {
        console.log('execute this as well');
    })
    .catch(() => {
        console.log('skipped the above then block');
    })
    .then(() => {
        console.log('do this no matter what happens before');
    })
    .catch(() => {
        console.log('this will not be executed');
    });