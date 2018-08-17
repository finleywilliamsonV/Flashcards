const express = require('express');
const router = express.Router();  // mini app in express, add middleware and routes to it


// handle get requests to the home route
router.get('/', (req, res) => {
  //res.send("<h1>I Love Eating Ass!</h1>"); // sends a response to the client
  const name = req.cookies.username;
  if (name) {
    res.render('index', {name});  // same as {name: name}
  } else {
    res.redirect('/hello')
  }
});

// handle get requests to the hello route
router.get('/hello', (req, res) => {
  const name = req.cookies.username;
  if (!name){
    res.render('hello');
  } else {
    res.redirect('/');
  }
});

// handle post requests to the hello route
router.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect('/');
});

// handle POST requests to the goodbye route
router.post('/goodbye', (req, res) => {
  res.clearCookie('username');
  res.redirect('/hello');
});

// handle sandbox route to test/experiment with PUG features
router.get('/sandbox', (req, res) => {
  res.render('sandbox', {names}); 
});

// EXPORT ONLY THE ROUTER
module.exports = router;