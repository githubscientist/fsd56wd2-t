// console.log(window.setTimeout);

/*
    setTimeout => a function that takes a callback function and a time in milliseconds, it will call the callback function after the time has passed.
*/

function sayHello() {
    console.log('hello');
}

// call the function after 3 seconds from when the page loads
window.setTimeout(sayHello, 10000);