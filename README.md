# Lab 1: Node.js and Express Server

## Student Details

- **Name:** K. PAWAN TEJA
- **Registration Number:** 252U1R5060
- **Section:** AIDE - 2A
- **Lab Number:** 01
- **Lab Title:** Node.js and Express Server

## Objective

To set up a Node.js project and build a basic web server using the built-in HTTP module and Express.js. Implement different routes to handle HTTP requests and responses.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- Visual Studio Code
- Git and GitHub

## Project Structure

```text
lab-01/
│
├── node_modules/
├── screenshots/
├── .gitignore
├── package.json
├── package-lock.json
├── server-http.js
├── server.js
└── README.md
```

## Installation and Setup

### 1. Initialize the Node.js project

```bash
npm init -y
```

This creates a `package.json` file containing project information and configuration.

### 2. Install Express.js

```bash
npm install express
```

This installs Express.js and its dependencies inside the `node_modules` folder.

### 3. Run the HTTP server

```bash
node server-http.js
```

Open the following URL in your browser:

`http://localhost:3000`

Expected output:

`Hello`

### 4. Run the Express server

```bash
node server.js
```

The Express server runs on port 3000.

## Explanation of package.json Fields

- **name:** Name of the project.
- **version:** Current version of the project.
- **description:** Short description of the project.
- **main:** Entry point of the application.
- **scripts:** Commands used to run project tasks.
- **keywords:** Keywords related to the project.
- **author:** Name of the project creator.
- **license:** License under which the project is distributed.
- **dependencies:** External packages required by the project, such as Express.

## API Endpoints

The Express server provides the following endpoints:

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Displays a welcome message. |
| GET | `/about` | Returns student name and section in JSON format. |
| GET | `/time` | Displays the current date and time. |
| GET | Any unknown route | Returns a 404 Page Not Found response. |

### Example Responses

**1. Home Route**

URL: `http://localhost:3000/`

Response:

```text
Welcome to my Backend Lab 1!
```

Status Code: `200 OK`

**2. About Route**

URL: `http://localhost:3000/about`

Response:

```json
{
  "name": "Student Name",
  "section": "Student Section"
}
```

Status Code: `200 OK`

**3. Time Route**

URL: `http://localhost:3000/time`

Response: Current date and time.

Status Code: `200 OK`

**4. Unknown Route**

URL: `http://localhost:3000/invalid`

Response:

```text
404 - Page Not Found
```

Status Code: `404 Not Found`

## Screenshots

The following screenshots demonstrate the working endpoints.

### 1. Home Page
![Home Route](screenshots/home.png)

### 2. About Page
![About Route](screenshots/about.png)

### 3. Time Page
![Time Route](screenshots/time.png)

### 4. 404 Page
![404 Route](screenshots/404.png)

## Deployment

**Live URL:** Not deployed yet.

The application currently runs locally on port 3000. Deployment will be completed using a suitable hosting platform.

## GitHub Repository

[View Backend Labs Repository](https://github.com/pawantej2007-stack/backend-labs-)

## Learning Outcomes

- Understood how to initialize a Node.js project.
- Learned the purpose of `package.json` and `node_modules`.
- Created a web server using Node.js HTTP module.
- Installed and used Express.js.
- Implemented GET routes using Express.
- Learned to send text and JSON responses.
- Implemented 404 error handling.
- Tested API endpoints using a web browser.

## Conclusion

Successfully created a basic web server using Node.js and Express.js. Implemented multiple GET routes, handled HTTP requests and responses, and tested the endpoints with appropriate status codes.
-
-
-
-
-
-
-
-


# Lab 3: REST API, Query Parameters, Validation and Debugging

## Student Details

- **Name:** K. PAWAN TEJA
- **Registration Number:** 252U1R5060
- **Section:** AIDE - 2A
- **Lab Number:** 03
- **Lab Title:** REST API, Query Parameters, Validation and Debugging

## Objective

To develop a RESTful API using Node.js, Express.js and SQLite. Implement RESTful endpoints, query parameters for searching, sorting and filtering, input validation, proper HTTP status codes and error handling.

## Technologies Used

- Node.js
- Express.js
- SQLite3
- JavaScript
- Postman
- Visual Studio Code
- Git and GitHub

## Project Structure

```text
lab-03/
│
├── config/
│   └── db.js
│
├── database/
│
├── routes/
│   └── books.js
│
├── screenshots/
│   ├── API_HOMEE.png
│   ├── DELETE.png
│   ├── GET BOOKS.png
│   ├── INVALID ID.png
│   ├── INVALID POST.png
│   ├── PAGINATION.png
│   ├── POST CREATE.png
│   ├── SEARCH BOOK.png
│   └── SORT.png
│
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## Installation and Setup

### 1. Initialize the Node.js project

```bash
npm init -y
```

This creates a `package.json` file containing project information and configuration.

### 2. Install required dependencies

```bash
npm install express sqlite3 dotenv
```

Install Nodemon as a development dependency:

```bash
npm install --save-dev nodemon
```

### 3. Configure environment variables

Create a `.env` file in the project directory:

```env
PORT=3000
```

### 4. Configure the SQLite database

Create a database named `books.db` inside the `database` folder.

Create the `book` table using the following SQL query:

```sql
CREATE TABLE book (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    price INTEGER NOT NULL,
    pages INTEGER
);
```

### 5. Start the development server

```bash
npm run dev
```

The server runs on port 3000.

Open the following URL:

`http://localhost:3000`

Expected output:

```json
{
    "message": "Lab 03 REST API is running!"
}
```

## Explanation of package.json Fields

- **name:** Name of the project.
- **version:** Current version of the project.
- **description:** Short description of the project.
- **main:** Entry point of the application.
- **scripts:** Commands used to run project tasks.
- **keywords:** Keywords related to the project.
- **author:** Name of the project creator.
- **license:** License under which the project is distributed.
- **dependencies:** External packages required by the project, such as Express, SQLite3 and dotenv.
- **devDependencies:** Development tools such as Nodemon.

## Database Structure

The project uses an SQLite database named `books.db` with a table called `book`.

| Column | Data Type | Description |
|---|---|---|
| id | INTEGER | Primary key with auto-increment |
| title | TEXT | Book title |
| author | TEXT | Book author |
| price | INTEGER | Book price |
| pages | INTEGER | Number of pages |

## API Endpoints

The Express server provides the following RESTful endpoints:

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/books` | Retrieves all books |
| GET | `/books?search_q=Python` | Searches books by title |
| GET | `/books?order_by=price&order=DESC` | Sorts books by price |
| GET | `/books?limit=2&offset=0` | Limits and paginates results |
| GET | `/books?min_price=400&max_price=550` | Filters books by price range |
| POST | `/books` | Adds a new book |
| PUT | `/books/:id` | Updates an existing book |
| DELETE | `/books/:id` | Deletes an existing book |

## Example Requests and Responses

### 1. Retrieve All Books

Method: `GET`

URL: `http://localhost:3000/books`

Response:

```json
[
    {
        "id": 1,
        "title": "Python Programming",
        "author": "John Smith",
        "price": 450,
        "pages": 300
    }
]
```

Status Code: `200 OK`

### 2. Search Books

Method: `GET`

URL: `http://localhost:3000/books?search_q=Python`

This endpoint searches for books using partial title matching.

Status Code: `200 OK`

### 3. Sort Books

Method: `GET`

URL: `http://localhost:3000/books?order_by=price&order=DESC`

This endpoint sorts books according to the selected column and order.

Status Code: `200 OK`

### 4. Filter Books by Price

Method: `GET`

URL: `http://localhost:3000/books?min_price=400&max_price=550`

This endpoint retrieves books within the specified price range.

Status Code: `200 OK`

### 5. Create a New Book

Method: `POST`

URL: `http://localhost:3000/books`

Request Body:

```json
{
    "title": "Artificial Intelligence",
    "author": "Andrew Ng",
    "price": 700,
    "pages": 500
}
```

Response:

```json
{
    "message": "Book created successfully",
    "id": 6
}
```

Status Code: `201 Created`

### 6. Update an Existing Book

Method: `PUT`

URL: `http://localhost:3000/books/6`

Request Body:

```json
{
    "title": "Advanced Artificial Intelligence",
    "author": "Andrew Ng",
    "price": 850,
    "pages": 600
}
```

Response:

```json
{
    "message": "Book updated successfully"
}
```

Status Code: `200 OK`

### 7. Delete an Existing Book

Method: `DELETE`

URL: `http://localhost:3000/books/6`

Response:

```json
{
    "message": "Book deleted successfully"
}
```

Status Code: `200 OK`

## Input Validation and Error Handling

The API implements validation to handle invalid requests and missing resources.

- Checks whether title and author are provided.
- Validates that price is a numeric value.
- Validates the pages field.
- Checks valid sorting columns and sorting order.
- Validates limit and offset query parameters.
- Handles invalid price range values.
- Returns appropriate error messages in JSON format.
- Handles requests for non-existing book IDs.

### HTTP Status Codes

| Status Code | Description |
|---|---|
| 200 | Successful retrieval, update or deletion |
| 201 | Book created successfully |
| 400 | Bad Request – Invalid input or validation error |
| 404 | Not Found – Requested book does not exist |
| 500 | Internal Server Error |

### Example Error Response

```json
{
    "message": "Book not found"
}
```

## Postman Testing

All API endpoints were tested using Postman.

The following test cases were performed:

1. Retrieve all books.
2. Search books by title.
3. Sort books by price.
4. Limit and paginate results.
5. Filter books by price range.
6. Create a new book.
7. Update an existing book.
8. Delete an existing book.
9. Validate missing required fields.
10. Validate incorrect price data.
11. Test invalid sorting columns.
12. Test requests with non-existing book IDs.

## Screenshots

The following screenshots demonstrate the working API endpoints and validation tests.

### 1. API Home Page
![API Home Page](screenshots/API_HOMEE.png)

### 2. Retrieve All Books
![Get Books](screenshots/GET%20BOOKS.png)

### 3. Search Books
![Search Books](screenshots/SEARCH%20BOOK.png)

### 4. Sorting
![Sort Books](screenshots/SORT.png)

### 5. Pagination
![Pagination](screenshots/PAGINATION.png)

### 6. Create a Book
![Create Book](screenshots/POST%20CREATE.png)

### 7. Delete a Book
![Delete Book](screenshots/DELETE.png)

### 8. Invalid ID Validation
![Invalid ID](screenshots/INVALID%20ID.png)

### 9. Invalid POST Request
![Invalid POST](screenshots/INVALID%20POST.png)

## Deployment

**Live URL:** Not deployed yet.

The application currently runs locally on port 3000.

## GitHub Repository

[View Backend Labs Repository](https://github.com/pawantej2007-stack/backend-labs-)

## Learning Outcomes

- Understood RESTful API principles.
- Learned to create RESTful endpoints using Express.js.
- Implemented GET, POST, PUT and DELETE operations.
- Learned to work with SQLite databases.
- Implemented search, sorting and filtering using query parameters.
- Understood pagination using limit and offset.
- Learned input validation and error handling.
- Implemented appropriate HTTP status codes.
- Tested API endpoints using Postman.
- Learned to organize backend projects into routes, configuration and database files.

## Conclusion

Successfully developed a RESTful API using Node.js, Express.js and SQLite. Implemented CRUD operations, search functionality, sorting, filtering, pagination and input validation. Tested the API using Postman and handled different success and error responses with appropriate HTTP status codes.

