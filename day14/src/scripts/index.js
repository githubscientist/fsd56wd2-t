// function sayHello() {
//     console.log('Hello, world!');
// }

// let helloInterval = setInterval(sayHello, 1000);



// setTimeout(() => {
//     clearInterval(helloInterval);
// }, 5000);

let timer = 10;

function countDown() {
    console.log(timer);
    timer--;
}

let countDownInterval = setInterval(countDown, 1000);



setTimeout(() => {
    clearInterval(countDownInterval);
}, 10000);