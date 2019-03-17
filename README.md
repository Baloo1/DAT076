# dat076
Full stack webapp project for the course DAT076


## Prerequisites
* Node.js v11
* NPM v6.8.0
* Postgresql
* A modern webbrowser


## Installation
`npm install`
Create a postgresql db name `api` with user `api` and password as `password`. Then run `npm run migrate` and `npm run seed`

## Start
`npm run dev` and server will start on localhost:3000

## Techstach documentation
* [Next.js](https://nextjs.org/docs/)
* [React.js](https://reactjs.org/docs/getting-started.html)
* [React-Bootstrap](https://react-bootstrap.github.io)


## Repo structure
`/pages` for the pages the server provides to the end-user. consists of React `containers` and `components`

`/containers` for Reactjs logical components, `/components`  for React presentational components

`/docs` for Final Report

`/server` for the back-end, `/migrations` and `/seeds` for Knexjs files to create db structure and populate. `/routes` for the RESTful-API routes. `/models` for the ORM-mapping. `server.js` for the nodejs server which provides the api with expressjs and the website with nextjs

`/__tests__` for unit tests using the Jestframework

## Use cases
* Register account
* Login to account
* Logout
* User-page
* Add profile picture
* Add contact information
* Add skills
* Add work experiences
* Add projects
* Add images to projects
* Edit profile picture
* Edit contact information
* Edit skills
* Edit work experiences
* Edit projects
* Edit project images
* Generate link to page