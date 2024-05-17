export default async function postDeletePost(postid) {
  const rawResponse = await fetch(
    `http://localhost:3000/posts/delete-post/${postid}/`,
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
