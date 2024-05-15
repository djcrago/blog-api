import { DateTime } from '../node_modules/luxon/src/luxon.js';
import fetchPostComments from './fetchPostComments.js';
import renderFullPost from './renderFullPost.js';

export default async function createCommentsSection(post) {
  const commentsSection = document.createElement('div');
  commentsSection.classList.toggle('comments');

  const title = document.createElement('h3');
  title.textContent = 'Comments';
  commentsSection.appendChild(title);

  const comments = await fetchPostComments(post);

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

  //   const formContainer = document.createElement('div');

  //   const formTitle = document.createElement('h4');
  //   formTitle.textContent = 'Write a new comment';
  //   formContainer.appendChild(formTitle);

  //   const form = document.createElement('form');
  //   form.action = `http://127.0.0.1:3000/posts/${post._id}/create-comment`;
  //   form.method = 'POST';

  //   const body = document.createElement('input');
  //   body.name = 'body';
  //   form.appendChild(body);

  //   const submit = document.createElement('button');
  //   submit.type = 'submit';
  //   submit.textContent = 'Submit';
  //   form.appendChild(submit);

  //   formContainer.appendChild(form);

  //   commentsSection.appendChild(formContainer);

  return commentsSection;
}
