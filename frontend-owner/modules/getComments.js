export default async function fetchComments(postid) {
  const rawResponse = await fetch(
    `http://127.0.0.1:3000/posts/${postid}/comments`,
    {
      headers: {
        Authorization: `bearer ${localStorage.token}`,
      },
    }
  );

  const arrayOfPostComments = await rawResponse.json();

  return arrayOfPostComments;
}
