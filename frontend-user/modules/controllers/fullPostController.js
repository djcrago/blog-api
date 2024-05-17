import createFullPost from '../createElements/createFullPost.js';
import createCommentsSection from '../createElements/createCommentsSection.js';
import createBackButton from '../createElements/createBackButton.js';
import renderFullPost from '../renderViews/renderFullPost.js';

export default async function fullPostController(post) {
  const fullPostContainer = document.createElement('div');
  fullPostContainer.classList.toggle('full-post-container');

  const fullPost = createFullPost(post);
  fullPostContainer.appendChild(fullPost);

  const commentsSection = await createCommentsSection(post);
  fullPostContainer.appendChild(commentsSection);

  const backBtn = createBackButton();
  fullPostContainer.appendChild(backBtn);

  renderFullPost(fullPostContainer);
}
