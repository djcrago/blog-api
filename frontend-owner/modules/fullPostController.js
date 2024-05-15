import createFullPost from './createFullPost.js';
import createCommentsSection from './createCommentsSection.js';
import previewsController from './previewsController.js';
import renderFullPost from './renderFullPost.js';

export default async function fullPostController(post, isDraft = false) {
  const fullPostContainer = document.createElement('div');
  fullPostContainer.classList.toggle('full-post-container');

  const fullPost = createFullPost(post);
  fullPostContainer.appendChild(fullPost);

  if (!isDraft) {
    const commentsSection = await createCommentsSection(post);
    fullPostContainer.appendChild(commentsSection);
  }

  const backBtn = document.createElement('button');
  backBtn.classList.toggle('back-btn');
  backBtn.textContent = 'Back';
  backBtn.addEventListener('click', () => {
    previewsController(isDraft);
  });
  fullPostContainer.appendChild(backBtn);

  renderFullPost(fullPostContainer);
}
