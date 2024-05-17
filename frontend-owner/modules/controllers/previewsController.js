import getPosts from '../fetchRequests/getPosts.js';
import createPreview from '../createElements/createPreview.js';
import renderPreviews from '../renderViews/renderPreviews.js';

export default async function previewsController(isDraft = false) {
  const arrayOfPosts = await getPosts();

  const previews = [];

  arrayOfPosts.forEach((post) => {
    let isPublished;
    if (isDraft) isPublished = false;
    else isPublished = true;

    if (post.published === isPublished) {
      const preview = createPreview(post, isDraft);
      previews.push(preview);
    }
  });

  renderPreviews(previews);
}
