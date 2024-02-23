const header = document.querySelectorAll('.header');

console.log(header);

const h1 = document.createElement('h1');
h1.textContent = 'Hello, World!';

const span = document.createElement('span');
span.textContent = ' Welcome!';

h1.appendChild(span);

const link = document.createElement('a');
link.textContent = 'click me!';

link.setAttribute('href', 'https://www.google.com');
link.setAttribute('target', '_blank');

header[1].append(h1, link);

header[1].setAttribute('class', 'header');
link.setAttribute('class', 'link');