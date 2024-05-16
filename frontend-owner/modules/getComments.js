export default async function fetchComments(postid) {
  // Make sure user is properly authenticated first
  const rawResponse = await fetch(
    `http://127.0.0.1:3000/posts/${postid}/comments`
  );

  const arrayOfPostComments = await rawResponse.json();

  return arrayOfPostComments;
}
