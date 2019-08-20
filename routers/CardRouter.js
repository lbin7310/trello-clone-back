const express = require('express');
const routes = require('../routes');

const CardRouter = express.Router();
const {
  cardCreate,
  cardIsActive,
  completedCards,
  allCard
} = require('../controllers');

CardRouter.post(routes.create, cardCreate);
CardRouter.post(routes.is_active, cardIsActive);
CardRouter.get(routes.is_active + routes.completed, completedCards);
CardRouter.get(routes.init, allCard);

module.exports = CardRouter;
