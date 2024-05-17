import getPosts from '../fetchRequests/getPosts.js';
import createPreview from '../createElements/createPreview.js';
import renderPreviews from '../renderViews/renderPreviews.js';

export default async function previewsController() {
  const arrayOfPosts = await getPosts();

  const previews = [];

  arrayOfPosts.forEach((post) => {
    if (post.published) {
      const preview = createPreview(post);
      previews.push(preview);
    }
  });

  renderPreviews(previews);
}
