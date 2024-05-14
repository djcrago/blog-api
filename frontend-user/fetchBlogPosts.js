export default async function fetchBlogPosts() {
  const rawResponse = await fetch('http://127.0.0.1:3000/posts');

  const arrayOfBlogPosts = await rawResponse.json();

  return arrayOfBlogPosts;
}
