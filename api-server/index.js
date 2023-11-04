// Import the necessary modules
const express = require('express');

// npm init
// npm install express

// Create an instance of express
const app = express();

// Set the port for the server
const port = 3000;

// Handling GET request to the root route
app.get('/', (req, res) => {
    res.send("API - server start! \n try http://localhost:(port)/usr");
});

// Handling POST request to the root route
// curl -X POST http://localhost:3000/
app.post('/', (req, res) => {
    res.send('POST request here');
});

// Handling PUT request to the /user route
app.put('/usr', (req, res) => {
    res.send('Got a PUT request at /usr');
});

// Handling DELETE request to the /user route
// curl -X DELETE http://localhost:3000/del/usr
app.delete('/del/usr', (req, res) => {
    res.send('DELETE request for /user');
});

// Start the server on the specified port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
