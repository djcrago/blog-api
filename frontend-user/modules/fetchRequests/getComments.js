export default async function getComments(postid) {
  const rawResponse = await fetch(
    `https://my-blog-api-cool-tree-347.fly.dev/posts/${postid}/comments`
  );

  const arrayOfPostComments = await rawResponse.json();

  return arrayOfPostComments;
}
