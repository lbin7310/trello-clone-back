const express = require('express');
const routes = require('../routes');
const { username, 
        board_userId, 
        container_boardId, 
        allCard,
        description,
        boardCreate,
        containerCreate,
        containerUpdate,
        cardCreate,
        descriptionCreate,
        checkEmail,
        checkNickName,
        createUser,
        login,
        loginCheck,
        boardUpdate,
        descriptionUpdate,
        cardIsActive,
        completedCards,
        deleteBoard } = require("../controllers/controllers")

const router = express.Router();

// user

router.get(routes.username, username);

// board

router.get(routes.userIdBoard, board_userId);
router.post(routes.boards + routes.create, boardCreate);
router.post(routes.boards + routes.update, boardUpdate);
router.post(routes.boards + routes.delete, deleteBoard);

// container

router.get(routes.containerBoardId, container_boardId);
router.post(routes.containers + routes.create, containerCreate);
router.post(routes.containers + routes.update, containerUpdate);


// card

router.get(routes.cards, allCard);
router.post(routes.cards + routes.create, cardCreate);
router.post(routes.cards + routes.is_active, cardIsActive);
router.get(routes.cards + routes.is_active + '/completed', completedCards);

// description

router.get(routes.descriptionCardId, description);
router.post(routes.description + routes.create, descriptionCreate);
router.post(routes.description + routes.update, descriptionUpdate);

// signup

router.get(routes.signup + routes.email, checkEmail)
router.get(routes.signup + routes.nickName + routes.userNickName, checkNickName);
router.post(routes.signup + routes.create, createUser)

// login

router.post(routes.login + routes.attempt, login);
router.post(routes.login + routes.check, loginCheck);

module.exports = router;