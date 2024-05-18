This directory houses the backend api that services front-end web apps.

Published posts, drafts, post comments, and users are stored on a database, which are accessed here, and sent as JSON responses to the fetch requests.

A "public" route is available which only provides posts an author has published (not drafts they haven't yet). For all other routes and requests the user is first authenticated before any operations occur or data is sent.

Other aspects of this directory include:

- Modularizing code for the sake of readability and clarity
- Using mongoose to work with a MongoDB database
- Keeping any secrets hidden in a .env file
- Using JSON Web Tokens to authenticate users through PassportJS
- Using a variety of middleware to streamline production shipment
