import createEditDraftForm from './createElements/createEditDraftForm.js';
import fullPostController from './fullPostController.js';
import renderFullPost from './renderFullPost.js';

export default function editDraftController(post) {
  const editDraftFormContainer = document.createElement('div');
  editDraftFormContainer.classList.toggle('full-post-container');

  const editDraftForm = createEditDraftForm(post);
  editDraftFormContainer.appendChild(editDraftForm);

  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.addEventListener('click', () => {
    fullPostController(post, true);
  });
  editDraftFormContainer.appendChild(cancelBtn);

  renderFullPost(editDraftFormContainer);
}
