const express = require('express'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));  // look this up every time? Used to parse the body of the response from the server
app.use(cookieParser());

app.set('view engine', 'pug');  // tells express which template engine to use (default -> '/views')

// handle get requests to the home route
app.get('/', (req, res) => {
  //res.send("<h1>I Love Eating Ass!</h1>"); // sends a response to the client
  const name = req.cookies.username;
  if (name) {
    res.render('index', {name});  // same as {name: name}
  } else {
    res.redirect('/hello')
  }
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
  const name = req.cookies.username;
  if (!name){
    res.render('hello');
  } else {
    res.redirect('/');
  }
});

// handle post requests to the hello route
app.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect('/');
});

// handle POST requests to the goodbye route
app.post('/goodbye', (req, res) => {
  res.clearCookie('username');
  res.redirect('/hello');
});

// handle sandbox route to test/experiment with PUG features
app.get('/sandbox', (req, res) => {
  res.render('sandbox', {names}); 
});

// 404
app.use((req,res,next)=>{
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.locals.error = err;   // when using a view engine with Express, you can set intermediate data on res.locals
  res.status(err.status);
  res.render('error');
  next();
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