import createFullPost from '../createElements/createFullPost.js';
import createCommentsSection from '../createElements/createCommentsSection.js';
import editDraftController from './editDraftController.js';
import deleteDraftController from './deleteDraftController.js';
import renderFullPost from '../renderViews/renderFullPost.js';
import createPublishedButton from '../createElements/createPublishedButton.js';
import createBackButton from '../createElements/createBackButton.js';

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
    const modifyFullPostContainer = document.createElement('div');
    modifyFullPostContainer.classList.toggle('modify-full-post-container');

    const modifyFullPost = document.createElement('p');
    modifyFullPost.classList.toggle('modify-full-post');
    modifyFullPost.textContent = 'Modify Post';
    modifyFullPostContainer.appendChild(modifyFullPost);

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

    modifyFullPostContainer.appendChild(buttonContainer);

    fullPostContainer.appendChild(modifyFullPostContainer);
  }

  const backBtn = createBackButton(isDraft);
  fullPostContainer.appendChild(backBtn);

  renderFullPost(fullPostContainer);
}
