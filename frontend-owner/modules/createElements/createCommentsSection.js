import getComments from '../fetchRequests/getComments.js';
import createComment from './createComment.js';

export default async function createCommentsSection(post) {
  const commentsSection = document.createElement('div');
  commentsSection.classList.toggle('comments');

  const title = document.createElement('h3');
  title.textContent = 'Comments';
  commentsSection.appendChild(title);

  const comments = await getComments(post._id);

  comments.forEach((comment) => {
    const commentElement = createComment(post, comment);

    commentsSection.appendChild(commentElement);
  });

  return commentsSection;
}
