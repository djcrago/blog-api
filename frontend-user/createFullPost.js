import fetchPostComments from './fetchPostComments.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

export default function createFullPost(post) {
  const postContainer = document.createElement('div');
  postContainer.classList.toggle('post');

  const title = document.createElement('h2');
  title.textContent = post.title;
  postContainer.appendChild(title);

  const date = document.createElement('p');
  const formattedDate = DateTime.fromISO(post.date).toLocaleString(
    DateTime.DATETIME_MED
  );
  date.textContent = formattedDate;
  postContainer.appendChild(date);

  const author = document.createElement('p');
  author.textContent = `Author: ${post.author.first_name} ${post.author.last_name}`;
  postContainer.appendChild(author);

  const body = document.createElement('p');
  body.textContent = post.body;
  postContainer.appendChild(body);

  const comments = fetchPostComments(post);
  console.log(comments);

  return postContainer;
}
