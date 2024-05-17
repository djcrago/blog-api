import fullPostController from '../controllers/fullPostController.js';
import postCreateComment from '../fetchRequests/postCreateComment.js';

export default function createCommentForm(post) {
  const formContainer = document.createElement('div');
  formContainer.classList.toggle('form-container');

  const formTitle = document.createElement('h4');
  formTitle.textContent = 'Write a New comment';
  formContainer.appendChild(formTitle);

  const form = document.createElement('form');

  const body = document.createElement('textarea');
  body.classList.toggle('comment-body');
  body.name = 'body';
  form.appendChild(body);

  const submit = document.createElement('button');
  submit.type = 'submit';
  submit.textContent = 'Submit';
  form.appendChild(submit);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const fieldValues = {
      body: body.value,
    };

    const createCommentResponse = await postCreateComment(
      post._id,
      fieldValues
    );

    if (createCommentResponse.message === 'comment created successfully') {
      fullPostController(post);
    } else {
      alert(
        'Comment Not Created: there was a server error, please try again later'
      );
    }
  });

  formContainer.appendChild(form);

  return formContainer;
}
