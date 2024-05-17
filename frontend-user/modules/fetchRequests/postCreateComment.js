export default async function postCreateComment(postid, fieldValues) {
  const rawResponse = await fetch(
    `http://localhost:3000/posts/${postid}/create-comment`,
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
