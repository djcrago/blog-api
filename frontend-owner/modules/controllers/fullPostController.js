import createFullPost from '../createElements/createFullPost.js';
import createPublishedButton from '../createElements/createPublishedButton.js';
import createCommentsSection from '../createElements/createCommentsSection.js';
import editDraftController from './editDraftController.js';
import deleteDraftController from './deleteDraftController.js';
import createBackButton from '../createElements/createBackButton.js';
import renderFullPost from '../renderViews/renderFullPost.js';

export default async function fullPostController(post, isDraft = false) {
  const fullPostContainer = document.createElement('div');
  fullPostContainer.classList.toggle('full-post-container');

  const fullPost = createFullPost(post);
  fullPostContainer.appendChild(fullPost);

  const publishOrNotBtn = createPublishedButton(post._id, isDraft);
  fullPostContainer.appendChild(publishOrNotBtn);

  if (!isDraft) {
    const commentsSection = await createCommentsSection(post);
    fullPostContainer.appendChild(commentsSection);
  }

  if (isDraft) {
    const modifyDraftContainer = document.createElement('div');
    modifyDraftContainer.classList.toggle('modify-draft-container');

    const modifyDraft = document.createElement('p');
    modifyDraft.classList.toggle('modify-draft');
    modifyDraft.textContent = 'Modify Draft';
    modifyDraftContainer.appendChild(modifyDraft);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.toggle('button-container');

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit Draft';
    editBtn.addEventListener('click', () => {
      editDraftController(post);
    });
    buttonContainer.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.toggle('delete');
    deleteBtn.textContent = 'Delete Draft';
    deleteBtn.addEventListener('click', () => {
      deleteDraftController(post);
    });
    buttonContainer.appendChild(deleteBtn);

    modifyDraftContainer.appendChild(buttonContainer);

    fullPostContainer.appendChild(modifyDraftContainer);
  }

  const backBtn = createBackButton(isDraft);
  fullPostContainer.appendChild(backBtn);

  renderFullPost(fullPostContainer);
}
