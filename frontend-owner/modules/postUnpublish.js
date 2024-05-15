import previewsController from './previewsController.js';

export default async function postUnpublish(postid) {
  fetch(`http://localhost:3000/posts/unpublish-post/${postid}/`, {
    method: 'POST',
  })
    .then((response) => response.json())
    .then((json) => {
      previewsController();
      console.log(json);
    });
}
