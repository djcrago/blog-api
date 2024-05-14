import { DateTime } from './node_modules/luxon/src/luxon.js';
import getPostPreview from './getPostPreview.js';
import renderFullPost from './renderFullPost.js';

export default function createPostPreview(post) {
  const postContainer = document.createElement('div');
  postContainer.classList.add('post', 'preview');

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
  const preview = getPostPreview(post.body);
  body.textContent = preview;
  postContainer.appendChild(body);

  postContainer.addEventListener('click', () => {
    renderFullPost(post);
  });

  return postContainer;
}
