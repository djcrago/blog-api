const signUpForm = document.querySelector('#sign-up-form');
const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const usernameField = document.querySelector('#username');
const passwordField = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password_confirm');
const authorPasscode = document.querySelector('#author_passcode');
const errors = document.querySelector('.errors');

signUpForm.addEventListener('submit', (event) => {
  event.preventDefault();

  fetch('http://localhost:3000/users/sign-up', {
    method: 'POST',
    body: JSON.stringify({
      first_name: firstName.value,
      last_name: lastName.value,
      username: usernameField.value,
      password: passwordField.value,
      password_confirm: passwordConfirm.value,
      author_passcode: authorPasscode.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      if (json.message === 'user created successfully') {
        window.location.href = 'index.html';
      } else {
        while (errors.firstChild) {
          errors.removeChild(errors.firstChild);
        }

        const errorList = document.createElement('ul');

        json.errors.forEach((error) => {
          const errorItem = document.createElement('li');
          errorItem.textContent = error.msg;
          errorList.appendChild(errorItem);
        });

        errors.appendChild(errorList);
      }
      // Else display error messages and do not redirect
    });
});
