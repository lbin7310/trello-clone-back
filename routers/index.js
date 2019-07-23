const express = require('express');
const routes = require('../routes');
const { username, 
        board_userId, 
        container_boardId, 
        allCard,
        description,
        boardCreate,
        containerCreate,
        cardCreate,
        descriptionCreate } = require("../controllers/controllers")

const router = express.Router();

// user

router.get(routes.username, username);

// board

router.get(routes.userIdBoard, board_userId);
router.post(routes.boards + routes.create, boardCreate);

// container

router.get(routes.containerBoardId, container_boardId);
router.post(routes.containers + routes.create, containerCreate);


// card

router.get(routes.cards, allCard);
router.post(routes.cards + routes.create, cardCreate);

// description

router.get(routes.descriptionCardId, description);
router.post(routes.description + routes.create, descriptionCreate);

module.exports = router;