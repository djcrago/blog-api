import createFullPost from './createFullPost.js';
import createCommentsSection from './createCommentsSection.js';
import editDraftController from './editDraftController.js';
import renderFullPost from './renderFullPost.js';
import postPublished from './postPublished.js';

export default async function fullPostController(post, isDraft = false) {
  const fullPostContainer = document.createElement('div');
  fullPostContainer.classList.toggle('full-post-container');

  const fullPost = createFullPost(post);
  fullPostContainer.appendChild(fullPost);

  if (!isDraft) {
    const commentsSection = await createCommentsSection(post);
    fullPostContainer.appendChild(commentsSection);
  }

  if (isDraft) {
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit Draft';
    editBtn.addEventListener('click', () => {
      editDraftController(post);
    });
    fullPostContainer.appendChild(editBtn);
  }

  const publishOrNotBtn = document.createElement('button');
  if (isDraft) {
    publishOrNotBtn.textContent = 'Publish Post';
  } else {
    publishOrNotBtn.textContent = 'Unpublish Post';
  }
  publishOrNotBtn.addEventListener('click', () => {
    postPublished(post._id, isDraft);
  });
  fullPostContainer.appendChild(publishOrNotBtn);

  const backBtn = document.createElement('button');
  backBtn.textContent = 'Back';
  let href;
  if (isDraft) {
    href = 'drafts.html';
  } else {
    href = 'published-posts.html';
  }
  backBtn.addEventListener('click', () => (window.location.href = href));
  fullPostContainer.appendChild(backBtn);

  renderFullPost(fullPostContainer);
}
