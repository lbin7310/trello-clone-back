const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const routes = require('./routes');
const router= require('./routers');
const cors = require('cors');

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));

app.use(cors());

app.use("/", router);
app.use(routes.username, router);

// board

app.use(routes.userIdBoard, router);
app.use(routes.boards + routes.create, router);
app.use(routes.boards + routes.update, router);
// container

app.use(routes.containerBoardId, router);
app.use(routes.containers + routes.create, router);
app.use(routes.containers + routes.update, router);


// card

app.use(routes.cards, router);
app.use(routes.cards + routes.create, router);
app.use(routes.cards + routes.is_active, router);
app.use(routes.cards + routes.is_active + '/completed', router);

// description

app.use(routes.descriptionCardId, router);
app.use(routes.description + routes.create, router);
app.use(routes.description + routes.update, router);

// signup

app.use(routes.signup + routes.email, router);
app.use(routes.signup + routes.nickName + routes.userNickName, router);
app.use(routes.signup + routes.create, router);

// login

app.use(routes.login + routes.attempt, router);
app.use(routes.login + routes.check, router);

module.exports = app;