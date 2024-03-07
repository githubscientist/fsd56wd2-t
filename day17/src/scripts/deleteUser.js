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

let deleteUserForm = document.getElementById('deleteUserForm');

deleteUserForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    let userId = selectedID.value;

    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        alert('User deleted successfully!');
        let data = await response.json();
        console.log(data);
    } else {
        alert('An error occurred while deleting the user');
    }
});