import previewsController from './previewsController.js';

export default function deleteDraftController(post) {
  const deleteConfirmed = prompt(
    `This action cannot be undone. To delete this draft, type '${post.title}' and hit enter.`
  );

  if (deleteConfirmed === post.title) {
    fetch(`http://localhost:3000/posts/delete-post/${post._id}/`, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((json) => {
        previewsController(true);
        console.log(json);
      });
  }
}
