import createFullPost from './createFullPost.js';

const postsContainer = document.querySelector('#posts-container');

export default function renderFullPost(post) {
  while (postsContainer.firstChild) {
    postsContainer.removeChild(postsContainer.firstChild);
  }

  const fullPost = createFullPost(post);

  postsContainer.appendChild(fullPost);
}
