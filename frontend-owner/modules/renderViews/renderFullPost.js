const postsContainer = document.querySelector('#posts-container');

export default function renderFullPost(fullPost) {
  while (postsContainer.firstChild) {
    postsContainer.removeChild(postsContainer.firstChild);
  }

  postsContainer.appendChild(fullPost);
}
