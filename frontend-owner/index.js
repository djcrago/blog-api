const loginForm = document.querySelector('#login-form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  fetch('http://localhost:3000/users/login', {
    method: 'POST',
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
});
