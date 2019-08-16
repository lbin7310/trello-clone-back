const express = require('express');
const routes = require('../routes');
const { login, loginCheck } = require('../controllers');

const LoginRouter = express.Router();

LoginRouter.post(routes.attempt, login);
LoginRouter.post(routes.check, loginCheck);

module.exports = LoginRouter;
