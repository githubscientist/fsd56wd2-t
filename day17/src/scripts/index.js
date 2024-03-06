let description = document.getElementById('description');

description.classList.add('show', 'bg-green', 'text-white', 'p-3', 'm-3');

description.classList.remove('bg-green');
description.classList.add('bg-red');

let todos = ['Buy milk', 'Send postcard', 'Pay bills', 'Call mom'];

let todoList = document.createElement('ul');



// todos.forEach(todo => {
//     let li = document.createElement('li');
//     li.textContent = todo;
//     todoList.appendChild(li);
// })

let todoHTML = '';

todos.forEach(todo => {
    todoHTML += `<li>${todo}</li>`;
});

todoList.innerHTML = todoHTML;

console.log(todoList);

/*
    todoHTML = ''

    Iteration #1 todoHTML = '<li>Buy milk</li>'
    Iteration #2 todoHTML = '<li>Buy milk</li><li>Send postcard</li>'
    Iteration #3 todoHTML = '<li>Buy milk</li><li>Send postcard</li><li>Pay bills</li>'
    Iteration #4 todoHTML = '<li>Buy milk</li><li>Send postcard</li><li>Pay bills</li><li>Call mom</li>'
*/

document.body.appendChild(todoList);