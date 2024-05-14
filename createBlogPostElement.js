export default function createBlogPostElement(blogPost) {
  const elementContainer = document.createElement('div');

  const title = document.createElement('h2');
  title.textContent = blogPost.title;
  elementContainer.appendChild(title);

  const body = document.createElement('p');
  body.textContent = blogPost.body;
  elementContainer.appendChild(body);

  return elementContainer;
}
