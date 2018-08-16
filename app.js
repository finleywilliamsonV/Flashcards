const express = require('express');

const app = express();

const names = [
              {firstName:'Linder', lastName:'Begins'},
              {firstName:'Sheepy', lastName:'Fordmespo'},
              {firstName:'Dargris', lastName:'Plomind'},
              {firstName:'Queet', lastName:'Vros-McDab'},
              {firstName:'Chimdobu', lastName:'Skiffnancy'},
            ];

app.set('view engine', 'pug');  // tells express which template engine to use (default -> '/views')

// handle get requests to the home route
app.get('/', (req, res) => {
  //res.send("<h1>I Love Eating Ass!</h1>"); // sends a response to the client
  res.render('index');
});

// handle get requests to the cards route
app.get('/cards', (req, res) => {
  res.render('card', {
                      prompt: 'Who is inside my urethra?',
                      hint: 'Think about my favorite dinger buddy.'
                    }); // automatically looks for files with a .pug extension
});

// sandbox route to test/experiment with PUG features
app.get('/sandbox', (req, res) => {
  res.render('sandbox', {names}); 
});

app.listen(3000, () => {
  console.log('The application is running on localhost:3000');
});