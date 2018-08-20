const express = require('express');
const router = express.Router();  // mini app in express, add middleware and routes to it
const {data} = require('../data/flashcardData.json');   // same as [ const data = require('../data/flashcardData.json').data ]
const {cards} = data;     // same as [ const cards = data.cards ]


// handle get requests to the cards route
router.get('/', (req,res) => {
  const randNumber = Math.floor(Math.random() * cards.length);
  res.redirect(`/cards/${randNumber}`);   // ?side=question handled in next route
});

// handle get requests to the cards route WITH ID
// every route will start with cards since its being directed there from app.js
router.get('/:id', (req, res) => { // '/:id' tells express that [:id] is a variable, stored in req.params
  const {id} = req.params;  // cards/4
  const {side} = req.query; // [cards/4]?side=answer

  // handle if side is not designated
  if(!side) {
    return res.redirect(`/cards/${id}?side=question`);
  }

  const name = req.cookies.username;
  const text = cards[id][side]; // shows either question or answer, @ sideß
  const {hint} = cards[id]; // shows cards[id].hint

  const querylessUrl = req.baseUrl + req.path;

  const templateData = {querylessUrl, text, name}; // creates JSON object to pass to render

  if (side === 'question') {
    templateData.hint = hint;
  }

  res.render('card', templateData); // automatically looks for files with a .pug extension

});







module.exports = router;