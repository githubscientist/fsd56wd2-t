function getTodos(todosURLS) {
    // create an array of promises
    let promises = [];

    todosURLS.forEach(url => {
        promises.push(
            fetch(url)
                .then(response => response.json())
        );
    });

    return Promise.all(promises);
}

let todosURLS = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
];

getTodos(todosURLS)
    .then((todos) => {
        console.log(todos);
    });