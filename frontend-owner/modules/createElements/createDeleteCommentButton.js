import postDeleteComment from '../fetchRequests/postDeleteComment.js';
import fullPostController from '../controllers/fullPostController.js';

export default function createDeleteCommentButton(post, commentid) {
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.toggle('delete');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', async () => {
    const confirmDelete = prompt(
      'This action cannot be undone. To delete this comment, type "Delete" and hit enter.'
    );

    if (confirmDelete === 'Delete') {
      const deleteResponse = await postDeleteComment(post._id, commentid);

      if (deleteResponse.message === 'comment deleted successfully') {
        fullPostController(post);
      } else {
        alert(
          'Comment Not Deleted: there was a server error, please try again later'
        );
      }
    } else {
      alert(
        'Comment Not Deleted: make sure you correctly type "Delete", please try again'
      );
    }
  });

  return deleteBtn;
}
