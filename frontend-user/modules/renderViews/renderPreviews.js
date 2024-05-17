const postsContainer = document.querySelector('#posts-container');

export default function renderPreviews(previews) {
  while (postsContainer.firstChild) {
    postsContainer.removeChild(postsContainer.firstChild);
  }

  previews.forEach((preview) => {
    postsContainer.appendChild(preview);
  });
}
