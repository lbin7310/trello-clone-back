const express = require('express');
const routes = require('../routes');
const {
  container_boardId,
  containerCreate,
  containerUpdate
} = require('../controllers');

const containerRouter = express.Router();

containerRouter.post(routes.create, containerCreate);
containerRouter.post(routes.update, containerUpdate);
containerRouter.get(routes.containerBoardId, container_boardId);

module.exports = containerRouter;
