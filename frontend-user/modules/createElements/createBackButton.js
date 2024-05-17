import previewsController from '../controllers/previewsController.js';

export default function createBackButton() {
  const backBtn = document.createElement('button');
  backBtn.textContent = 'Back';
  backBtn.addEventListener('click', () => {
    previewsController();
  });

  return backBtn;
}
