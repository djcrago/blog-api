import fetchBlogPosts from './fetchBlogPosts.js';
import createBlogPostElement from './createBlogPostElement.js';

const blogsContainer = document.querySelector('#blogs-container');

const arrayOfBlogPosts = fetchBlogPosts();
arrayOfBlogPosts.then((array) => {
  array.forEach((blogPost) => {
    const blogPostElement = createBlogPostElement(blogPost);
    blogsContainer.appendChild(blogPostElement);
  });
});
