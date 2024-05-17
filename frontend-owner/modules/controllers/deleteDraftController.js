import postDeletePost from '../fetchRequests/postDeletePost.js';
import previewsController from './previewsController.js';

export default async function deleteDraftController(post) {
  const deleteConfirmed = prompt(
    `This action cannot be undone. To delete this draft, type "${post.title}" and hit enter.`
  );

  if (deleteConfirmed === post.title) {
    const deletePostResponse = await postDeletePost(post._id);

    if (deletePostResponse.message === 'post deleted successfully') {
      previewsController(true);
    } else {
      alert(
        'Post Not Deleted: there was a server error, please try again later'
      );
    }
  }
}
