import fetchBlogPosts from './fetchBlogPosts.js';
import createBlogPostPreview from './createBlogPostPreview.js';
import renderBlogPostPreviews from './renderBlogPostPreviews.js';

export default async function renderHomePage() {
  const arrayOfBlogPosts = await fetchBlogPosts();

  const blogPostPreviews = [];

  arrayOfBlogPosts.forEach((blogPost) => {
    const blogPostElement = createBlogPostPreview(blogPost);
    blogPostPreviews.push(blogPostElement);
  });

  renderBlogPostPreviews(blogPostPreviews);
}
