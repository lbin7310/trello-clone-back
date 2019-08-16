const express = require('express');
const routes = require('../routes');
const SignupRouter = require('./SignupRouter');
const CardRouter = require('./CardRouter');
const LoginRouter = require('./LoginRouter');
const containerRouter = require('./ContainerRouter');
const descriptionRouter = require('./DescriptionRouter');
const boardRouter = require('./BoardRouter');
const { username } = require('../controllers');

const router = express.Router();

router.get(routes.username, username);

module.exports = {
  router,
  SignupRouter,
  CardRouter,
  LoginRouter,
  containerRouter,
  descriptionRouter,
  boardRouter
};
