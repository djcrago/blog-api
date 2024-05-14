import { DateTime } from './node_modules/luxon/src/luxon.js';
import getBlogPostPreview from './getBlogPostPreview.js';

export default function createBlogPostElement(blogPost) {
  const blogPostContainer = document.createElement('div');
  blogPostContainer.classList.toggle('blog-post');

  const title = document.createElement('h2');
  title.textContent = blogPost.title;
  blogPostContainer.appendChild(title);

  const date = document.createElement('p');
  const formattedDate = DateTime.fromISO(blogPost.date).toLocaleString(
    DateTime.DATETIME_MED
  );
  date.textContent = formattedDate;
  blogPostContainer.appendChild(date);

  const author = document.createElement('p');
  author.textContent = `Author: ${blogPost.author.first_name} ${blogPost.author.last_name}`;
  blogPostContainer.appendChild(author);

  const body = document.createElement('p');
  const preview = getBlogPostPreview(blogPost.body);
  body.textContent = preview;
  blogPostContainer.appendChild(body);

  blogPostContainer.addEventListener('click', () => {});

  return blogPostContainer;
}
