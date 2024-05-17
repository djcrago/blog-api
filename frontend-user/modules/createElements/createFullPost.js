import { DateTime } from 'luxon';

export default function createFullPost(post) {
  const fullPost = document.createElement('div');
  fullPost.classList.toggle('full-post');

  const title = document.createElement('h2');
  title.textContent = post.title;
  fullPost.appendChild(title);

  const info = document.createElement('p');
  const author = `${post.author.first_name} ${post.author.last_name}`;
  const date = DateTime.fromISO(post.date).toLocaleString(DateTime.DATE_MED);
  info.textContent = `${author} - ${date}`;
  fullPost.appendChild(info);

  const body = document.createElement('p');
  body.textContent = post.body;
  fullPost.appendChild(body);

  return fullPost;
}
