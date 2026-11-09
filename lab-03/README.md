# Lab 03 – REST API, Query Parameters, Validation and Debugging

## Objective
To develop a RESTful API using Node.js, Express.js and SQLite with search, sorting, filtering, input validation and proper HTTP status codes.

## Technologies Used
- Node.js
- Express.js
- SQLite3
- Postman
- Nodemon

## Project Structure

```text
lab-03/
├── config/
│   └── db.js
├── database/
├── routes/
│   └── books.js
├── screenshots/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## Installation and Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file:

   ```env
   PORT=3000
   ```

3. Create the SQLite database at `database/books.db` with a table named `book`:

   ```sql
   CREATE TABLE book (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       title TEXT NOT NULL,
       author TEXT NOT NULL,
       price INTEGER NOT NULL,
       pages INTEGER
   );
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the API at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/books` | Retrieve all books |
| GET | `/books?search_q=Python` | Search books by title |
| GET | `/books?order_by=price&order=DESC` | Sort books |
| GET | `/books?limit=2&offset=0` | Limit and paginate results |
| GET | `/books?min_price=400&max_price=550` | Filter by price |
| POST | `/books` | Add a new book |
| PUT | `/books/:id` | Update an existing book |
| DELETE | `/books/:id` | Delete a book |

## Validation and Error Handling

- Validates required title and author fields.
- Checks that price is a valid numeric value.
- Validates sorting columns and sorting order.
- Validates limit and offset parameters.
- Returns appropriate HTTP status codes.
- Uses consistent JSON error messages.

## HTTP Status Codes

| Status Code | Description |
|---|---|
| 200 | Successful retrieval, update or deletion |
| 201 | Book created successfully |
| 400 | Invalid request or validation error |
| 404 | Book not found |
| 500 | Internal server error |

## Postman Testing

The API was tested using Postman for:
- Retrieving all books
- Searching and sorting books
- Filtering by price
- Creating a book
- Updating a book
- Deleting a book
- Testing invalid inputs
- Testing non-existing book IDs

Refer to the `screenshots/` folder for the API testing results.

## Important Notes

- Database queries use parameterized statements.
- `.env`, `node_modules` and database files are excluded from Git using `.gitignore`.
