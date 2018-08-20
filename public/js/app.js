const express = require('express'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));  // look this up every time? Used to parse the body of the response from the server
app.use(cookieParser());
app.use('/static', express.static('public'));

app.set('view engine', 'pug');  // tells express which template engine to use (default -> '/views')

const mainRoutes = require('../../routes'); // bc file is index.html it is automatically selected
const cardRoutes = require('../../routes/cards');

app.use(mainRoutes);
app.use('/cards', cardRoutes);

// 404
app.use((req,res,next)=>{
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
  // res.status(404).send("FUCK");
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