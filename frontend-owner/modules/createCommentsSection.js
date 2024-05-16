import { DateTime } from '../node_modules/luxon/src/luxon.js';
import fullPostController from './fullPostController.js';
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

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete Comment';
    deleteBtn.addEventListener('click', () => {
      const deleteConfirmed = prompt(
        'This action cannot be undone. To delete this comment, type "Delete" and hit enter.'
      );

      if (deleteConfirmed === 'Delete') {
        // Make sure user is properly authenticated first
        fetch(
          `http://localhost:3000/posts/${post._id}/delete-comment/${comment._id}`,
          {
            method: 'POST',
          }
        )
          .then((response) => response.json())
          .then((json) => {
            fullPostController(post);
            console.log(json);
          });
      }
    });
    commentElement.appendChild(deleteBtn);

    commentsSection.appendChild(commentElement);
  });

  return commentsSection;
}
