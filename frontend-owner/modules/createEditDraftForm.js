import postEditPost from './fetchRequests/postEditPost.js';
import fullPostController from './fullPostController.js';

export default function createEditDraftForm(post) {
  const editDraftForm = document.createElement('form');
  editDraftForm.classList.toggle('edit-draft-form');

  const titleFormGroup = document.createElement('div');
  titleFormGroup.classList.toggle('form-group');

  const titleLabel = document.createElement('label');
  titleLabel.textContent = 'Title:';
  titleLabel.for = 'title';
  titleFormGroup.appendChild(titleLabel);

  const title = document.createElement('input');
  title.id = 'title';
  title.name = 'title';
  title.required = true;
  title.value = post.title;
  titleFormGroup.appendChild(title);

  editDraftForm.appendChild(titleFormGroup);

  const bodyFormGroup = document.createElement('div');
  bodyFormGroup.classList.toggle('form-group');

  const bodyLabel = document.createElement('label');
  bodyLabel.textContent = 'Body:';
  bodyLabel.for = 'body';
  bodyFormGroup.appendChild(bodyLabel);

  const body = document.createElement('textarea');
  body.id = 'body';
  body.name = 'body';
  body.required = true;
  body.value = post.body;
  bodyFormGroup.appendChild(body);

  editDraftForm.appendChild(bodyFormGroup);

  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'Submit';
  submitBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    const fieldValues = {
      title: title.value,
      body: body.value,
    };

    const editPostResponse = await postEditPost(post._id, fieldValues);

    const newPost = post;
    newPost.title = title.value;
    newPost.body = body.value;

    if (editPostResponse.message === 'post edited successfully') {
      fullPostController(newPost, true);
    } else {
      alert(
        'Draft Not Edited: there was a server error, please try again later'
      );
    }
  });

  editDraftForm.appendChild(submitBtn);

  return editDraftForm;
}
