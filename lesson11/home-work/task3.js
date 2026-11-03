async function fetchTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return response.json();
}

async function fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    return response.json();
}

const allResults = Promise.all([fetchTodo(), fetchUser()]);

allResults.then(function (results) {
    console.log(results[0]);
    console.log(results[1]);
});
  