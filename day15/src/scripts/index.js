// let registerButton = document.getElementById('registerButton');
// let registerButton = document.querySelector('#registerButton');
let registerButton = document.querySelector('.registerButton');

// button click event
// registerButton.addEventListener('click', function () {
//     console.log('button clicked!');
// });

// let registerButtonClickHandler = (event) => {
//     event.stopPropagation();
//     console.log(event.target);
//     registerButton.style.backgroundColor = 'red';
//     registerButton.style.border = 'none';
//     registerButton.style.color = 'white';
//     registerButton.style.padding = '10px 20px';
// }

// // on button click, change the color of the button
// registerButton.addEventListener('click', registerButtonClickHandler);

// document.body.addEventListener('click', function () {
//     registerButton.style.backgroundColor = '#EFEFEF';
//     registerButton.style.color = 'black';
//     console.log(event.target);
// });

registerButton.addEventListener('mouseover', () => {
    registerButton.style.backgroundColor = 'red';
    registerButton.style.color = 'white';
});

registerButton.addEventListener('mouseout', function () {
    registerButton.style.backgroundColor = '#EFEFEF';
    registerButton.style.color = 'black';
});

registerButton.addEventListener('click', function () {
    let colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'grey'];
    let randomNumber = Math.floor(Math.random()*10);
    registerButton.style.backgroundColor = colors[randomNumber];
});

let oldPrice = document.getElementById('oldPrice');

oldPrice.style.textDecoration = 'line-through';