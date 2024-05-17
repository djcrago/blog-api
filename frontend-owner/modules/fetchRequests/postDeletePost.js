export default async function postDeletePost(postid) {
  const rawResponse = fetch(
    `http://localhost:3000/posts/delete-post/${postid}/`,
    {
      method: 'POST',
      headers: {
        Authorization: `bearer ${localStorage.token}`,
      },
    }
  );

  const jsonResponse = rawResponse.json();

  return jsonResponse;
}
