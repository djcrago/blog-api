import createErrorMessage from './modules/createElements/createErrorMessage.js';
import postLogin from './modules/fetchRequests/postLogin.js';

const loginForm = document.querySelector('#login-form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const errorMessages = document.querySelectorAll('.error');
  for (let i = 0; i < errorMessages.length; i += 1) {
    loginForm.removeChild(loginForm.lastChild);
  }

  const fieldValues = {
    username: username.value,
    password: password.value,
  };

  const loginResponse = await postLogin(fieldValues);

  if (loginResponse.message === 'user logged in successfully') {
    localStorage.token = loginResponse.token;
    localStorage.authorid = loginResponse.user._id;
    window.location.href = 'published-posts.html';
  } else {
    const errorMessage = createErrorMessage(loginResponse.message);
    loginForm.appendChild(errorMessage);
  }
});
