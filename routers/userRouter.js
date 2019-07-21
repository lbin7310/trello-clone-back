const express = require('express');
const routes = require("../routes");
const { user } = require("../controllers/userControllers")

const userRouter = express.Router();

userRouter.get(routes.users, user);

module.exports = userRouter;