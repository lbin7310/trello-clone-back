const express = require('express');
const routes = require('../routes');
const {
  board_userId, boardCreate, boardUpdate, deleteBoard
} = require('../controllers');

const boardRouter = express.Router();

boardRouter.get(routes.boardUserId, board_userId);
boardRouter.post(routes.create, boardCreate);
boardRouter.post(routes.update, boardUpdate);
boardRouter.post(routes.delete, deleteBoard);

module.exports = boardRouter;
