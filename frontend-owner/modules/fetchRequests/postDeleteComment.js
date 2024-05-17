export default async function postDeleteComment(postid, commentid) {
  const rawResponse = await fetch(
    `http://localhost:3000/posts/${postid}/delete-comment/${commentid}`,
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
