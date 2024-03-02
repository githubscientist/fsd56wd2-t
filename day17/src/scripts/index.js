

let promise = new Promise(executor);

function executor(resolve, reject) {
    let isTaskCompleted = false;
    
    if (isTaskCompleted) {
        resolve('Task is completed');
    } else {
        reject('Task is not completed');
    }
}

console.log(promise);

promise
    .then(
        (resolvedValue) => {
            console.log(resolvedValue);
        },
        (rejectedValue) => {
            console.log(rejectedValue);
        }
    )