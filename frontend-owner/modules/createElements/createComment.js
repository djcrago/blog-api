import { DateTime } from '../../node_modules/luxon/src/luxon.js';
import createDeleteCommentButton from './createDeleteCommentButton.js';

export default function createComment(post, comment) {
  const commentElement = document.createElement('div');
  commentElement.classList.toggle('comment');

  const date = document.createElement('p');
  const formattedDate = DateTime.fromISO(comment.date).toLocaleString(
    DateTime.DATE_SHORT
  );
  date.textContent = formattedDate;
  commentElement.appendChild(date);

  const body = document.createElement('p');
  body.textContent = comment.body;
  commentElement.appendChild(body);

  const deleteBtn = createDeleteCommentButton(post, comment._id);
  commentElement.appendChild(deleteBtn);

  return commentElement;
}
