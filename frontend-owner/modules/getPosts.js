export default async function fetchPosts() {
  // Make sure user is properly authenticated first
  const rawResponse = await fetch('http://127.0.0.1:3000/posts');

  const arrayOfPosts = await rawResponse.json();

  return arrayOfPosts;
}
