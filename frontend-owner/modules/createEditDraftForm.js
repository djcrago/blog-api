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
  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    fetch(`http://localhost:3000/posts/edit-post/${post._id}/`, {
      method: 'POST',
      body: JSON.stringify({
        title: title.value,
        body: body.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        fullPostController(post);
        console.log(json);
      });
  });
  editDraftForm.appendChild(submitBtn);

  return editDraftForm;
}
