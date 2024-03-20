# Library

A simple library to manage books and movies.

Built with Node.js, Express, MongoDB, Mongoose

## Usage

GET /api/books

GET, PATCH, DELETE /api/books/:id

POST /api/books {

"title": String,

"author": String,

"description": String

"year": number (optional)

}

GET /api/movies

GET, PATCH, DELETE /api/movies/:id

POST /api/movies
{

"title": String,

"description": String,

"director": String, (optional)

"genre": String (optional)

"releaseYear": number (optional)

"runtime": string (optional)
}
