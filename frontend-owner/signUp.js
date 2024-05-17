import postSignUp from './modules/fetchRequests/postSignUp.js';
import createErrorList from './modules/createErrorList.js';

const signUpForm = document.querySelector('#sign-up-form');
const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const usernameField = document.querySelector('#username');
const passwordField = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password_confirm');
const authorPasscode = document.querySelector('#author_passcode');

signUpForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const errorMessages = document.querySelector('.error-list');
  if (errorMessages) signUpForm.removeChild(errorMessages);

  const fieldValues = {
    first_name: firstName.value,
    last_name: lastName.value,
    username: usernameField.value,
    password: passwordField.value,
    password_confirm: passwordConfirm.value,
    author_passcode: authorPasscode.value,
  };

  const signUpResponse = await postSignUp(fieldValues);

  if (signUpResponse.message === 'user created successfully') {
    window.location.href = 'index.html';
  } else {
    const errorList = createErrorList(signUpResponse.errors);
    signUpForm.appendChild(errorList);
  }
});
