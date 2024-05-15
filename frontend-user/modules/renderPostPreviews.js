const postsContainer = document.querySelector('#posts-container');

export default function renderPostPreviews(previews) {
  previews.forEach((preview) => {
    postsContainer.appendChild(preview);
  });
}
