This directory houses the author-facing (owner) web app where authors can read write, edit, and delete posts and delete comments.

Authentication is utilized on every fetch request, whether GET or POST, so that unauthenticated clients can't simply travel to the correct url and access information. If such a client attempts to do so they will be redirected to the login page automatically.

Other aspects of this directory include:

- Modularizing code for the sake of readability and clarity
- Displaying any error messages on the screen that come back from the server
