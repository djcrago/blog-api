import processDateTime from '../renderViews/processDateTime.js';
import createPreviewBody from './createPreviewBody.js';
import fullPostController from '../controllers/fullPostController.js';

export default function createPreview(post, isDraft) {
  const preview = document.createElement('div');
  preview.classList.toggle('preview');

  const title = document.createElement('h3');
  title.textContent = post.title;
  preview.appendChild(title);

  const info = document.createElement('p');
  const author = `${post.author.first_name} ${post.author.last_name}`;
  const date = processDateTime(post.date);
  info.textContent = `${author} - ${date}`;
  preview.appendChild(info);

  const body = document.createElement('p');
  body.textContent = createPreviewBody(post.body);
  preview.appendChild(body);

  preview.addEventListener('click', () => {
    fullPostController(post, isDraft);
  });

  return preview;
}
