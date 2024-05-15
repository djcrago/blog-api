import { DateTime } from '../node_modules/luxon/src/luxon.js';
import createCommentForm from './createCommentForm.js';
import getComments from './getComments.js';

export default async function createCommentsSection(post) {
  const commentsSection = document.createElement('div');
  commentsSection.classList.toggle('comments');

  const title = document.createElement('h3');
  title.textContent = 'Comments';
  commentsSection.appendChild(title);

  const comments = await getComments(post._id);

  comments.forEach((comment) => {
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

    commentsSection.appendChild(commentElement);
  });

  const formContainer = createCommentForm(post);

  commentsSection.appendChild(formContainer);

  return commentsSection;
}
