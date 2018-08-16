const express = require('express'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser');

const app = express();

app.set('view engine', 'pug');  // tells express which template engine to use (default -> '/views')
app.use(bodyParser.urlencoded({extended: false}));  // look this up every time?
app.use(cookieParser());

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

// handle get requests to the hello route
app.get('/hello', (req, res) => {
  res.render('hello', {name: req.cookies.username});
});

// handle post requests to the hello route
app.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  res.render('hello', {name: req.body.username});
});

// handle sandbox route to test/experiment with PUG features
app.get('/sandbox', (req, res) => {
  res.render('sandbox', {names}); 
});

app.listen(3000, () => {
  console.log('The application is running on localhost:3000');
});



// FOR USE IN SANDBOX
const names = [
  {firstName:'Linder', lastName:'Begins'},
  {firstName:'Sheepy', lastName:'Fordmespo'},
  {firstName:'Dargris', lastName:'Plomind'},
  {firstName:'Queet', lastName:'Vros-McDab'},
  {firstName:'Chimdobu', lastName:'Skiffnancy'},
];