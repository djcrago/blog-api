import getPosts from '../fetchRequests/getPosts.js';
import createPreview from '../createElements/createPreview.js';
import renderPreviews from '../renderViews/renderPreviews.js';

export default async function previewsController(areDrafts = false) {
  const arrayOfPosts = await getPosts();

  const previews = [];

  arrayOfPosts.forEach((post) => {
    let publishedOrNot;
    if (areDrafts) publishedOrNot = !post.published;
    else publishedOrNot = post.published;

    if (publishedOrNot) {
      const preview = createPreview(post, areDrafts);
      previews.push(preview);
    }
  });

  renderPreviews(previews);
}