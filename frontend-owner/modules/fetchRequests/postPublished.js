export default async function postPublished(postid, isDraft = false) {
  let route;
  if (isDraft) route = 'publish-post';
  else route = 'unpublish-post';

  const rawResponse = await fetch(
    `https://my-blog-api-cool-tree-347.fly.dev/posts/${route}/${postid}/`,
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
