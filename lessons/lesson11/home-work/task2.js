function fetchTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1').then(
    (response) => response.json(),
  );
}

function fetchUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1').then(
    (response) => response.json(),
  );
}

const allResults = Promise.all([fetchTodo(), fetchUser()]);

allResults.then(function (results) {
  console.log(results[0]);
  console.log(results[1]);
});
