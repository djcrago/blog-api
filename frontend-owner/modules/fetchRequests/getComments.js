export default async function fetchComments(postid) {
  const rawResponse = await fetch(
    `https://my-blog-api-cool-tree-347.fly.dev/posts/${postid}/comments`,
    {
      headers: {
        Authorization: `bearer ${localStorage.token}`,
      },
    }
  );

  const arrayOfPostComments = await rawResponse.json();

  return arrayOfPostComments;
}
