# Library

A simple library to manage books and movies.
Built with Node.js, Express, MongoDB, Mongoose

## Usage

GET /books
GET, PATCH, DELETE /books/:id

POST /books
{
"title": String,
"author": String,
"description": String
"year": number (optional)
}

GET /movies
GET, PATCH, DELETE /movies/:id

POST /movies
{
"title": String,
"description": String,
"director": String, (optional)
"genre": String (optional)
"releaseYear": number (optional)
"runtime": string (optional)
}
