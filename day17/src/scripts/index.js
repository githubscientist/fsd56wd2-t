async function getAllUsers() {
    let response;
    let users;
    try {
        response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
        });
        users = await response.json();
    } catch (error) {
        console.log('error fetching users');
    }

    users.forEach((user, index) => {
        let userItem = document.createElement('li');
        userItem.textContent = `[${index+1}] ${user.name}`
        usersList.appendChild(userItem);
    })
}

let usersList = document.querySelector('#usersList');

getAllUsers();