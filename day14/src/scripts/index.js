let header = document.createElement('h1');
header.textContent = 'Append Vs AppendChild'

let description = document.createElement('p');
description.textContent = 'Append Vs AppendChild is a simple example to show the difference between append and appendChild methods in JavaScript.';

// document.body.appendChild(header);
// document.body.appendChild(description);

document.body.append(header, description);