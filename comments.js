// Create web server
// Create a new web server using the Express.js framework. It will listen on port 3000.
// The server should respond to the root route with “Hello, World!”.
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});