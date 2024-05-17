export default async function postCreatePost(fieldValues) {
  const rawResponse = fetch('http://localhost:3000/posts/create-post', {
    method: 'POST',
    body: JSON.stringify({
      title: fieldValues.title,
      body: fieldValues.body,
      author: fieldValues.author,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `bearer ${localStorage.token}`,
    },
  });

  const jsonResponse = rawResponse.json();

  return jsonResponse;
}
