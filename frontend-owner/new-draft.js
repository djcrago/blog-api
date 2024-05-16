const draftForm = document.querySelector('#draft-form');
const title = document.querySelector('#title');
const body = document.querySelector('#body');

draftForm.addEventListener('submit', (event) => {
  event.preventDefault();

  fetch('http://localhost:3000/posts/create-post', {
    method: 'POST',
    body: JSON.stringify({
      title: title.value,
      body: body.value,
      author: localStorage.authorid,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `bearer ${localStorage.token}`,
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      if (json.message === 'post created successfully') {
        window.location.href = 'drafts.html';
      } else {
        while (errors.firstChild) {
          errors.removeChild(errors.firstChild);
        }

        const errorList = document.createElement('ul');

        if (json.errors) {
          json.errors.forEach((error) => {
            const errorItem = document.createElement('li');
            errorItem.textContent = error.msg;
            errorList.appendChild(errorItem);
          });
        } else {
          const errorMessage = document.createElement('li');
          errorMessage.textContent = json.message;
          errorList.appendChild(errorMessage);
        }

        errors.appendChild(errorList);
      }
    });
});
