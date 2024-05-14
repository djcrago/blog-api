const blogsContainer = document.querySelector('#blogs-container');

export default function renderBlogPostPreviews(previews) {
  previews.forEach((preview) => {
    blogsContainer.appendChild(preview);
  });
}
