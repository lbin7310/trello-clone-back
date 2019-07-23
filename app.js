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

// container

app.use(routes.containerBoardId, router);
app.use(routes.containers + routes.create, router);

// card

app.use(routes.cards, router);
app.use(routes.cards + routes.create, router);

// description

app.use(routes.descriptionCardId, router);
app.use(routes.description + routes.create, router);

module.exports = app;