export default async function postEditPost(postid, fieldValues) {
  const rawResponse = await fetch(
    `https://my-blog-api-cool-tree-347.fly.dev/posts/edit-post/${postid}/`,
    {
      method: 'POST',
      body: JSON.stringify({
        title: fieldValues.title,
        body: fieldValues.body,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `bearer ${localStorage.token}`,
      },
    }
  );

  const jsonResponse = await rawResponse.json();

  return jsonResponse;
}
