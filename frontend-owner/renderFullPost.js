import createCommentsSection from './createCommentsSection.js';
import createFullPost from './createFullPost.js';

const postsContainer = document.querySelector('#posts-container');

export default async function renderFullPost(post) {
  while (postsContainer.firstChild) {
    postsContainer.removeChild(postsContainer.firstChild);
  }

  const fullPost = createFullPost(post);

  postsContainer.appendChild(fullPost);

  const commentsSection = await createCommentsSection(post);

  postsContainer.appendChild(commentsSection);
}
