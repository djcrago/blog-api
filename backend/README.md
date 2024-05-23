# Blog Api - User

This repository houses a REST backend API for an example blog website.

This backend application provides API endpoint points for two frontend websites. It provides one "public" endpoint, which provides posts the author has published (not the drafts they haven't yet), and requires successful authentication for all other routes before performing any operations. Users are authenticated using JSON Web Tokens and PassportJS, and bcryptjs is used for securing and comparing passwords.

This website is one of three connected projects. The other two projects include a website where visitors can read and comment on blog posts and a website for the blog author to create, edit, and delete blog posts.

## Features

- Code modularization for the sake of readability and clarity
- Using a Model-View-Controller architecture to separate concerns
- MongoDB is used for a database and Mongoose is used to access that database
- Keeping secrets hidden in a .env file
- Using JSON Web Tokens to authenticate users through PassportJS
- Using a variety of middleware to streamline production shipment
- Deploying on fly.io

## License

The project is licensed under the ISC license.
