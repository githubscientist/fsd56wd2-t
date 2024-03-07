async function fetchUsers() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
    });
    let users = await response.json();
    return users;
}

let selectedID = document.getElementById('userIDs');

async function loadUsers() {
    let users = await fetchUsers();

    users.forEach(user => {
        let option = document.createElement('option');
        option.value = user.id;
        option.text = user.id;
        selectedID.appendChild(option);
    });
}


loadUsers();

selectedID.addEventListener('change', async () => {
    let userId = selectedID.value;

    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    let user = await response.json();

    let name = document.getElementById('name');
    let username = document.getElementById('username');
    let email = document.getElementById('email');

    name.value = user.name;
    username.value = user.username;
    email.value = user.email;
});

let updateUserForm = document.getElementById('updateUserForm');

updateUserForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    let userId = selectedID.value;
    let name = document.getElementById('name').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;

    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        method: 'PUT', 
        body: JSON.stringify({
            id: userId,
            name: name,
            username: username,
            email: email
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    if (response.ok) {
        alert('User updated successfully');
        let user = await response.json();
        console.log(user);
    }
});