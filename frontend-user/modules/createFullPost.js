import { DateTime } from '../node_modules/luxon/src/luxon.js';

export default function createFullPost(post) {
  const postContainer = document.createElement('div');
  postContainer.classList.toggle('full-post');

  const title = document.createElement('h2');
  title.textContent = post.title;
  postContainer.appendChild(title);

  const info = document.createElement('p');
  const author = `${post.author.first_name} ${post.author.last_name}`;
  const date = DateTime.fromISO(post.date).toLocaleString(DateTime.DATE_MED);
  info.textContent = `${author} - ${date}`;
  postContainer.appendChild(info);

  const body = document.createElement('p');
  body.textContent = post.body;
  postContainer.appendChild(body);

  return postContainer;
}
