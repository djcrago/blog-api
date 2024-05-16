const draftForm = document.querySelector('#draft-form');
const title = document.querySelector('#title');
const body = document.querySelector('#body');

draftForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Make sure user is properly authenticated first
  fetch('http://localhost:3000/posts/create-post', {
    method: 'POST',
    body: JSON.stringify({
      title: title.value,
      body: body.value,
      // Get this when author logs in
      author: 'author',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
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
