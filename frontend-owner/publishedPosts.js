import previewsController from './modules/controllers/previewsController.js';

document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.token || localStorage.token === '') {
    window.location.href = './index.html';
  } else {
    previewsController();
  }
});
