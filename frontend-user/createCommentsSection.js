import fetchPostComments from './fetchPostComments.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

export default async function createCommentsSection(post) {
  const commentsSection = document.createElement('div');
  commentsSection.classList.toggle('comments');

  const title = document.createElement('h3');
  title.textContent = 'Comments';
  commentsSection.appendChild(title);

  const comments = await fetchPostComments(post);

  comments.forEach((comment) => {
    const commentElement = document.createElement('div');

    const date = document.createElement('p');
    const formattedDate = DateTime.fromISO(post.date).toLocaleString(
      DateTime.DATETIME_MED
    );
    date.textContent = formattedDate;
    commentElement.appendChild(date);

    const body = document.createElement('p');
    body.textContent = post.body;
    commentElement.appendChild(body);

    commentsSection.appendChild(commentElement);
  });

  return commentsSection;
}
