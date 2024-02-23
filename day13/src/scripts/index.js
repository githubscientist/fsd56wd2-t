const header = document.createElement('div');

const h1 = document.createElement('h1');
h1.textContent = 'Hello, World!';

const span = document.createElement('span');
span.textContent = ' Welcome!';

h1.appendChild(span);

const link = document.createElement('a');
link.textContent = 'click me!';

link.setAttribute('href', 'https://www.google.com');
link.setAttribute('target', '_blank');

header.append(h1, link);
document.body.appendChild(header);

header.setAttribute('class', 'header');
link.setAttribute('class', 'link');