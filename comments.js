// Create web server
const express = require('express');
const app = express();

// Create a route
app.get('/comments', (req, res) => {
    res.send('Comments page');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});