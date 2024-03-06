// Async/Await with error handling
/*
    Problem:

    Get all the comments of the post with id 1 posted by the user with id 1.
*/

/*
    get all the users               https://jsonplaceholder.typicode.com/users/
        * Get the first user details
       
    get all the posts               https://jsonplaceholder.typicode.com/posts
        * Get the first post posted by the user with id 1
       
    get all the comments             https://jsonplaceholder.typicode.com/comments
        * Get all the comments of the post with id 1
*/

function fetchComments() {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .catch(error => console.error('error fetching users:', error))
    .then(users => {
        // return the first user details
        return users[0];
    })
    .then(user => {
        // get all the posts posted by the user
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
    })
    .then(response => response.json())
    .catch(error => console.error('error fetching posts:', error))
    .then(posts => {
        return posts[0];
    })
    .then(post => {
        // get all the comments of this post
        return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
    })
    .then(response => response.json())
    .catch(error => console.error('error fetching comments:', error))
    .then(comments => {
        console.log(comments);
    })
}

fetchComments();