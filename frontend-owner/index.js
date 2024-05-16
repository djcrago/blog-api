const loginForm = document.querySelector('#login-form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const errors = document.querySelector('.errors');

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
    .then((json) => {
      console.log(json);
      if (json.message === 'user logged in successfully') {
        localStorage.token = json.token;
        window.location.href = 'published-posts.html';
      } else {
        while (errors.firstChild) {
          errors.removeChild(errors.firstChild);
        }

        const errorList = document.createElement('ul');

        if (json.errors) {
          json.errors.forEach((error) => {
            const errorItem = document.createElement('li');
            errorItem.textContent = error.msg;
            errorList.appendChild(errorItem);
          });
        } else {
          const errorMessage = document.createElement('li');
          errorMessage.textContent = json.message;
          errorList.appendChild(errorMessage);
        }

        errors.appendChild(errorList);
      }
    });
});
