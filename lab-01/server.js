
const express = require('express');

const app = express();

// Route 1: Home page
app.get('/', (req, res) => {
    res.status(200).send('Welcome to my Backend Lab 1!');
});

// Route 2: About page
app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'K. Pawan Teja',
        section: 'AIDE - 2A'
    });
});

// Route 3: Current date and time
app.get('/time', (req, res) => {
    res.status(200).send(new Date().toString());
});

// Route 4: Handle unknown routes
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Start the server
app.listen(3000, () => {
    console.log('Express server running at http://localhost:3000');
});
