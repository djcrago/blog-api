import postCreatePost from './modules/fetchRequests/postCreatePost.js';

const draftForm = document.querySelector('#draft-form');
const title = document.querySelector('#title');
const body = document.querySelector('#body');

draftForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const fieldValues = {
    title: title.value,
    body: body.value,
    author: localStorage.authorid,
  };

  const createPostResponse = await postCreatePost(fieldValues);

  if (createPostResponse.message === 'post created successfully') {
    window.location.href = 'drafts.html';
  } else {
    const errorList = createErrorList(createPostResponse.errors);
    draftForm.appendChild(errorList);
  }
});
