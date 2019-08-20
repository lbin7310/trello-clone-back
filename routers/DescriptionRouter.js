const express = require('express');
const routes = require('../routes');
const {
  description,
  descriptionCreate,
  descriptionUpdate
} = require('../controllers');

const descriptionRouter = express.Router();

descriptionRouter.get(routes.cardId, description);
descriptionRouter.post(routes.create, descriptionCreate);
descriptionRouter.post(routes.update, descriptionUpdate);

module.exports = descriptionRouter;
