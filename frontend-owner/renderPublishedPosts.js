import fetchPosts from './fetchPosts.js';
import createPostPreview from './createPostPreview.js';
import renderPostPreviews from './renderPostPreviews.js';

export default async function renderPublishedPosts() {
  const arrayOfPosts = await fetchPosts();

  const postPreviews = [];

  arrayOfPosts.forEach((post) => {
    const postElement = createPostPreview(post);
    postPreviews.push(postElement);
  });

  renderPostPreviews(postPreviews);
}
