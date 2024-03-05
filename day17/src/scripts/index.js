let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise is resolved');
        console.log(promise);
    }, 5000);
});

promise
    .then((message) => {
        console.log(message);
    });

console.log(promise);