import postPublished from '../fetchRequests/postPublished.js';

export default function createPublishedButton(postid, isDraft) {
  const publishedBtn = document.createElement('button');

  if (isDraft) publishedBtn.textContent = 'Publish Post';
  else publishedBtn.textContent = 'Unpublish Post';

  let publishedOrNotHref;
  if (isDraft) publishedOrNotHref = 'published-posts.html';
  else publishedOrNotHref = 'drafts.html';

  publishedBtn.addEventListener('click', () => {
    const publishPostResponse = postPublished(postid, isDraft);

    if (publishPostResponse.status === 200) {
      window.location.href = publishedOrNotHref;
    } else {
      alert(
        'Published Status Not Updated: there was a server error, please try again later'
      );
    }
  });

  return publishedBtn;
}
