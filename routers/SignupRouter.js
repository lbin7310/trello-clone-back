const express = require('express');
const routes = require('../routes');

const SignUpRouter = express.Router();
const { checkEmail, checkNickName, createUser } = require('../controllers');

SignUpRouter.get(routes.email, checkEmail);
SignUpRouter.get(routes.nickName + routes.userNickName, checkNickName);
SignUpRouter.post(routes.create, createUser);

module.exports = SignUpRouter;
