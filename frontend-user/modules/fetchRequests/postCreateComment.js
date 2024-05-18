export default async function postCreateComment(postid, fieldValues) {
  const rawResponse = await fetch(
    `https://my-blog-api-cool-tree-347.fly.dev/posts/${postid}/create-comment`,
    {
      method: 'POST',
      body: JSON.stringify({
        body: fieldValues.body,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
  );

  const jsonResponse = await rawResponse.json();

  return jsonResponse;
}
