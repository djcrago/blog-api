export default async function fetchPosts() {
  const rawResponse = await fetch(
    'https://my-blog-api-cool-tree-347.fly.dev/posts',
    {
      headers: {
        Authorization: `bearer ${localStorage.token}`,
      },
    }
  );

  const arrayOfPosts = await rawResponse.json();

  return arrayOfPosts;
}
