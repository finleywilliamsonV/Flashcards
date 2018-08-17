const express = require('express');
const router = express.Router();  // mini app in express, add middleware and routes to it
const {data} = require('../data/flashcardData.json');   // same as [ const data = require('../data/flashcardData.json').data ]
const {cards} = data;     // same as [ const cards = data.cards ]



// handle get requests to the cards route
// every route will start with cards since its being directed there from app.js
router.get('/:id', (req, res) => { // '/:id' tells express that [:id] is a variable, stored in req.params
  const {id} = req.params;  // cards/4
  const {side} = req.query; // [cards/4]?side=answer
  const text = cards[id][side]; // shows either question or answer, @ side
  const {hint} = cards[id]; // shows cards[id].hint

  const querylessUrl = req.baseUrl + req.path;

  const templateData = {querylessUrl, side, text}; // creates JSON object to pass to render

  if (side === 'question') {
    templateData.hint = hint;
  }

  res.render('card', templateData); // automatically looks for files with a .pug extension
});







module.exports = router;