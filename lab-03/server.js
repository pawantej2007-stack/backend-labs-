require('dotenv').config();

const express = require('express');
const db = require('./config/db');
const booksRouter = require('./routes/books');

const app = express();

// Middleware
app.use(express.json());

// Books routes
app.use('/books', booksRouter);

// Home route
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Lab 03 REST API is running!'
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});