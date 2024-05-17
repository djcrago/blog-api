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

  if (!isDraft) {
    const commentsSection = await createCommentsSection(post);
    fullPostContainer.appendChild(commentsSection);
  }

  const publishOrNotBtn = createPublishedButton(post._id, isDraft);
  fullPostContainer.appendChild(publishOrNotBtn);

  if (isDraft) {
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit Draft';
    editBtn.addEventListener('click', () => {
      editDraftController(post);
    });
    fullPostContainer.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete Draft';
    deleteBtn.addEventListener('click', () => {
      deleteDraftController(post);
    });
    fullPostContainer.appendChild(deleteBtn);
  }

  const backBtn = createBackButton();
  fullPostContainer.appendChild(backBtn);

  renderFullPost(fullPostContainer);
}
