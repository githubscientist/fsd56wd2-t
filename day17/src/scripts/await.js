async function fetchComments() {
    let usersResponse;
    let users;
    try {
        usersResponse = await fetch('https://jsonplaceholder.typicode.com/users/');
        users = await usersResponse.json();
    } catch (error) {
        console.error('error fetching users');
    }

    let postsResponse;
    let posts;

    try {
        postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`);
        posts = await postsResponse.json();
    } catch (error) {
        console.error('error fetching posts');
    }

    let commentsResponse;
    let comments;

    try {
        commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`)
        comments = await commentsResponse.json(); // synchronous
    } catch (error) {
        console.error('error fetching comments');
    }

    console.log(comments);
}

fetchComments();