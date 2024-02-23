// create a div element
const header = document.createElement('div');

headerElements = `<h1>DOM-DEMO</h1>`;

headerElements += `
<p>The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.</p>`;


header.innerHTML = headerElements;

// append the div to the body
document.body.appendChild(header);

