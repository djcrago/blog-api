import previewsController from './previewsController.js';

export default async function postPublished(postid, isDraft = false) {
  let route;

  if (isDraft) {
    route = 'publish-post';
  } else {
    route = 'unpublish-post';
  }

  fetch(`http://localhost:3000/posts/${route}/${postid}/`, {
    method: 'POST',
  })
    .then((response) => response.json())
    .then((json) => {
      previewsController();
      console.log(json);
    });
}
