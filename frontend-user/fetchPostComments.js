export default async function fetchPostComments(post) {
  const rawResponse = await fetch(
    `http://127.0.0.1:3000/posts/${post._id}/comments`
  );

  console.log(rawResponse);

  const arrayOfPostComments = await rawResponse.json();

  console.log(arrayOfPostComments);

  return arrayOfPostComments;
}