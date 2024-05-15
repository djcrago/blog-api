import getPosts from './getPosts.js';
import createPreview from './createPreview.js';
import renderPreviews from './renderPreviews.js';

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
