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
