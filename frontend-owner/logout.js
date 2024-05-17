const logoutBtn = document.querySelector('#logout');

logoutBtn.addEventListener('click', () => {
  localStorage.token = '';
  window.location.href = './index.html';
});
