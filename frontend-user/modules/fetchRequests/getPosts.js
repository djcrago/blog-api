export default async function getPosts() {
  const rawResponse = await fetch(
    'https://my-blog-api-cool-tree-347.fly.dev/posts/public'
  );

  const arrayOfPosts = await rawResponse.json();

  return arrayOfPosts;
}
