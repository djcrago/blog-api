export default async function fetchPosts() {
  const rawResponse = await fetch('http://127.0.0.1:3000/posts', {
    headers: {
      Authorization: `bearer ${localStorage.token}`,
    },
  });

  const arrayOfPosts = await rawResponse.json();

  return arrayOfPosts;
}
