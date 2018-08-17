const express = require('express');
const router = express.Router();  // mini app in express, add middleware and routes to it

// handle get requests to the cards route
router.get('/', (req, res) => { // every route will start with cards since its being directed there from app.js
  res.render('card', {
                      prompt: 'Who is inside my urethra?',
                      hint: 'Think about my favorite dinger buddy.'
                    }); // automatically looks for files with a .pug extension
});

module.exports = router;