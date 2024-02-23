// create a div element
const header = document.createElement('div');

// create a h1 element
const h1 = document.createElement('h1');
h1.innerText = 'DOM-DEMO';

// create a p element
const paragraph = document.createElement('p');
paragraph.innerText = 'The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.';

// append h1 and paragraph to the div
header.append(h1, paragraph);

// append the div to the body
document.body.appendChild(header);

