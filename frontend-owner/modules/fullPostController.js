import createFullPost from './createElemets/createFullPost.js';
import createCommentsSection from './createElemets/createCommentsSection.js';
import editDraftController from './editDraftController.js';
import deleteDraftController from './deleteDraftController.js';
import renderFullPost from './renderFullPost.js';
import postPublished from './fetchRequests/postPublished.js';

export default async function fullPostController(post, isDraft = false) {
  const fullPostContainer = document.createElement('div');
  fullPostContainer.classList.toggle('full-post-container');

  const fullPost = createFullPost(post);
  fullPostContainer.appendChild(fullPost);

  if (!isDraft) {
    const commentsSection = await createCommentsSection(post);
    fullPostContainer.appendChild(commentsSection);
  }

  const publishOrNotBtn = document.createElement('button');
  if (isDraft) {
    publishOrNotBtn.textContent = 'Publish Post';
  } else {
    publishOrNotBtn.textContent = 'Unpublish Post';
  }
  let publishedOrNotHref;
  if (isDraft) {
    publishedOrNotHref = 'published-posts.html';
  } else {
    publishedOrNotHref = 'drafts.html';
  }
  publishOrNotBtn.addEventListener('click', () => {
    const publishPostResponse = postPublished(post._id, isDraft);

    if (publishPostResponse.status === 200) {
      window.location.href = publishedOrNotHref;
    } else {
      alert(
        'Published Status Not Updated: there was a server error, please try again later'
      );
    }
  });
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

  const backBtn = document.createElement('button');
  backBtn.textContent = 'Back';
  let backBtnHref;
  if (isDraft) {
    backBtnHref = 'drafts.html';
  } else {
    backBtnHref = 'published-posts.html';
  }
  backBtn.addEventListener('click', () => (window.location.href = backBtnHref));
  fullPostContainer.appendChild(backBtn);

  renderFullPost(fullPostContainer);
}
