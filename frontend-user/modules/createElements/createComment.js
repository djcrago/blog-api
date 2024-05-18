import processDateTime from '../renderViews/processDateTime.js';

export default function createComment(comment) {
  const commentElement = document.createElement('div');
  commentElement.classList.toggle('comment');

  const date = document.createElement('p');
  const formattedDate = processDateTime(comment.date);
  date.textContent = formattedDate;
  commentElement.appendChild(date);

  const body = document.createElement('p');
  body.textContent = comment.body;
  commentElement.appendChild(body);

  return commentElement;
}
