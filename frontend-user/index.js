import fetchBlogPosts from './fetchBlogPosts.js';
import createBlogPostPreview from './createBlogPostPreview.js';

const blogsContainer = document.querySelector('#blogs-container');

const arrayOfBlogPosts = fetchBlogPosts();
arrayOfBlogPosts.then((array) => {
  array.forEach((blogPost) => {
    const blogPostElement = createBlogPostPreview(blogPost);
    blogsContainer.appendChild(blogPostElement);
  });
});
