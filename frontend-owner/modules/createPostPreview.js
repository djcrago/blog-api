import { DateTime } from '../node_modules/luxon/src/luxon.js';
import getPostPreview from './getPostPreview.js';
import renderFullPost from './renderFullPost.js';

export default function createPostPreview(post) {
  const postContainer = document.createElement('div');
  postContainer.classList.add('post', 'preview');

  const title = document.createElement('h2');
  title.textContent = post.title;
  postContainer.appendChild(title);

  const info = document.createElement('p');
  const author = `${post.author.first_name} ${post.author.last_name}`;
  const date = DateTime.fromISO(post.date).toLocaleString(DateTime.DATE_MED);
  info.textContent = `${author} - ${date}`;
  postContainer.appendChild(info);

  const body = document.createElement('p');
  const preview = getPostPreview(post.body);
  body.textContent = preview;
  postContainer.appendChild(body);

  postContainer.addEventListener('click', () => {
    renderFullPost(post);
  });

  return postContainer;
}
