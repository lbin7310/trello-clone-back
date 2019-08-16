const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes');
const router = require('./routers');

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('dev'));

app.use(cors());


// board
app.use(routes.boards, router.boardRouter);

// container
app.use(routes.containers, router.containerRouter);

// card
app.use(routes.cards, router.CardRouter);

// description
app.use(routes.description, router.descriptionRouter);

// signup
app.use(routes.signup, router.SignupRouter);

// login
app.use(routes.login, router.LoginRouter);

app.use(routes.init, router.router);

module.exports = app;
