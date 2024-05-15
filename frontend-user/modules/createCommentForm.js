import fullPostController from './fullPostController.js';

export default function createCommentForm(post) {
  const formContainer = document.createElement('div');

  const formTitle = document.createElement('h4');
  formTitle.textContent = 'Write a new comment';
  formContainer.appendChild(formTitle);

  const form = document.createElement('form');

  const body = document.createElement('input');
  body.name = 'body';
  form.appendChild(body);

  const submit = document.createElement('button');
  submit.type = 'submit';
  submit.textContent = 'Submit';
  form.appendChild(submit);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    fetch(`http://localhost:3000/posts/${post._id}/create-comment`, {
      method: 'POST',
      body: JSON.stringify({
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

  formContainer.appendChild(form);

  return formContainer;
}
