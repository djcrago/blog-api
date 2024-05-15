import fetchPosts from './fetchPosts.js';
import createPostPreview from './createPostPreview.js';
import renderPostPreviews from './renderPostPreviews.js';

export default async function renderDraftPosts() {
  const arrayOfPosts = await fetchPosts();

  const postPreviews = [];

  arrayOfPosts.forEach((post) => {
    if (!post.published) {
      const postElement = createPostPreview(post);
      postPreviews.push(postElement);
    }
  });

  renderPostPreviews(postPreviews);
}
