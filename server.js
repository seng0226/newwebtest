const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const port = process.env.PORT || 8099;

// Logging middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Use the whole root as static files to be able to serve the html file and
// the build folder
app.use(express.static(path.join(__dirname, '/')));

// Send html on '/'path
app.get('/', (req, res) => {
    console.log('Serving index.html');
    res.sendFile(path.join(__dirname, '/index.html'));
});

// Create the server and listen on port
http.createServer(app).listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});
