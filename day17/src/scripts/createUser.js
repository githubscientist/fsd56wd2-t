async function createNewUser(name, username, email) {
    let response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
            name,
            username,
            email
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    });

    if (response.ok) {
        let data = await response.json();
        console.log('User created successfully');
        console.log(data);
    }
}

let createUserForm = document.getElementById('createUserForm');

createUserForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // get all the details from the form
    let name = document.getElementById('name').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;

    createNewUser(name, username, email);
});