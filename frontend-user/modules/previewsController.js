import fetchPosts from './fetchPosts.js';
import createPreview from './createPreview.js';
import renderPreviews from './renderPreviews.js';

export default async function previewsController() {
  const arrayOfPosts = await fetchPosts();

  const previews = [];

  arrayOfPosts.forEach((post) => {
    const preview = createPreview(post);
    previews.push(preview);
  });

  renderPreviews(previews);
}
