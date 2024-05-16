export default async function postPublished(postid, isDraft = false) {
  let route;
  let href;

  if (isDraft) {
    route = 'publish-post';
    href = 'published-posts.html';
  } else {
    route = 'unpublish-post';
    href = 'drafts.html';
  }

  fetch(`http://localhost:3000/posts/${route}/${postid}/`, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${localStorage.token}`,
    },
  })
    .then((response) => response.json())
    .then((json) => {
      window.location.href = href;
      console.log(json);
    });
}
