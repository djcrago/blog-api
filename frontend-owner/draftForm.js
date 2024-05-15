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
      author: 'GET THIS WHEN AUTHOR LOGINS',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      // If draft is successfully created
      // window.location.href = 'drafts.html';
      // Else display error messages and do not redirect
    });
});
