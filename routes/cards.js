const express = require('express');
const router = express.Router();  // mini app in express, add middleware and routes to it
const {data} = require('../data/flashcardData.json');   // same as [ const data = require('../data/flashcardData.json').data ]
// let {cards} = data;     // same as [ const cards = data.cards ]
let cards;

// handle post requests to the cards route
router.post('/', (req,res) => {
  let cardSet = req.body.cardSet;
  cards = data[`${cardSet}`].cards;
  res.redirect(`/cards?set=${cardSet}`);
});

// handle get requests to the cards route
router.get('/', (req,res) => {
  if (!cards) {
    return res.redirect('/');
  }
  const randNumber = Math.floor(Math.random() * cards.length);
  res.redirect(`/cards/${randNumber}`);   // ?side=question handled in next route
});

// handle get requests to the cards route WITH ID
// every route will start with cards since its being directed there from app.js
router.get('/:id', (req, res) => { // '/:id' tells express that [:id] is a variable, stored in req.params

  // handle if cards not designated
  if (!cards) {
    return res.redirect('/');
  }

  const {id} = req.params;  // cards/4
  const {side} = req.query; // [cards/4]?side=answer

  // handle if side is not designated
  if(!side) {
    return res.redirect(`/cards/${id}?side=question`);
  }
  const name = req.cookies.username;
  const text = cards[id][side];
  const { hint } = cards[id];
  
  const templateData = { id, text, name, side };

  if ( side === 'question' ) {
    templateData.hint = hint;
    templateData.sideToShow = 'answer';
    templateData.sideToShowDisplay = 'Answer';
  } else if ( side === 'answer' ) {
    templateData.sideToShow = 'question';
    templateData.sideToShowDisplay = 'Question';
  }

  res.render('card', templateData);
});


module.exports = router;