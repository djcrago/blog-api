export default async function postPublished(postid, isDraft = false) {
  let route;
  if (isDraft) route = 'publish-post';
  else route = 'unpublish-post';

  const rawResponse = await fetch(
    `http://localhost:3000/posts/${route}/${postid}/`,
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
