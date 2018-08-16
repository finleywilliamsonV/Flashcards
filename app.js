const express = require('express');

const app = express();

app.set('view engine', 'pug');  // tells express which template engine to use (default -> '/views')

// handle get requests to the home route
app.get('/', (req, res) => {
  res.send("<h1>I Love Eating Ass!</h1>"); // sends a response to the client
});

// handle get requests to the hello route
app.get('/hello', (req, res) => {
  res.send("<h3>Hello, I Love Eating PEOPLE'S ASSES!</h3>"); // sends a response to the client
});

app.listen(3000, () => {
  console.log('The application is running on localhost:3000');
});