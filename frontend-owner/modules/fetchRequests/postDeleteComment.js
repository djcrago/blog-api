export default async function postDeleteComment(postid, commentid) {
  const rawResponse = await fetch(
    `https://my-blog-api-cool-tree-347.fly.dev/posts/${postid}/delete-comment/${commentid}`,
    {
      method: 'POST',
      headers: {
        Authorization: `bearer ${localStorage.token}`,
      },
    }
  );

  const jsonResponse = await rawResponse.json();

  return jsonResponse;
}
