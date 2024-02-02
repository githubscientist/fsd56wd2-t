/*
    XHR: XML Http Request

    - XMLHttpRequest
    - To make a request to the server

    Steps:

    1. Install xhr2 package

    Open the terminal in the same directory as the index.js file and run the following command:
    npm install xhr2

    2. Require the xhr2 package (to import the package)
    let XMLHttpRequest = require('xhr2');

    3. Create an object to the XMLHttpRequest class constructor
    let xhr = new XMLHttpRequest();

    4. Open a new connection to the server
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/');

    5. Send the request to the server
    xhr.send(); // this will send the request to the server
*/



let XMLHttpRequest = require('xhr2');

// create an object to the XMLHttpRequest class constructor
let xhr = new XMLHttpRequest();

// open a new connection to the server
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/');

xhr.send(); // this will send the request to the server

// listen for the 'load' event
// to handle the response from the server
// this event is triggered when the response is received from the server
xhr.onload = function () {
    let users = JSON.parse(xhr.responseText);

    for (let user of users) {
        console.log(user.name);
    }
}
