import { DateTime } from '../node_modules/luxon/src/luxon.js';
import fetchComments from './fetchComments.js';

export default async function createCommentsSection(post) {
  const commentsSection = document.createElement('div');
  commentsSection.classList.toggle('comments');

  const title = document.createElement('h3');
  title.textContent = 'Comments';
  commentsSection.appendChild(title);

  const comments = await fetchComments(post._id);

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

  return commentsSection;
}
