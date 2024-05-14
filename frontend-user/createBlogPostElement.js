import { DateTime } from 'luxon';

export default function createBlogPostElement(blogPost) {
  const blogPostContainer = document.createElement('div');
  blogPostContainer.classList.toggle('blog-post');

  const title = document.createElement('h2');
  title.textContent = blogPost.title;
  blogPostContainer.appendChild(title);

  const date = document.createElement('p');
  const unformattedDate = blogPost.date;
  const formattedDate = DateTime.fromJSDate(unformattedDate).toLocaleString(
    DateTime.DATETIME_MED
  );
  date.textContent = blogPost.date;
  blogPostContainer.appendChild(date);

  const body = document.createElement('p');
  body.textContent = blogPost.body;
  blogPostContainer.appendChild(body);

  return blogPostContainer;
}
