const { Users, Boards, Containers, Cards, Description } = require("../model/sequelize");

const username = (req, res) => {
  const name = req.params.username;
  Users.sync()
    .then( () => {
      return Users.findAll({where: {username: name}});
    })
    .then( userInfo => {
      res.json(userInfo);
    })
}

// board ---------------------------------------------------------------------------------------------------

const board_userId = (req, res) => {
  const id = req.params.board_userId;
  Boards.sync()
    .then( () => {
      return Boards.findAll({where: {userId: id}})
    })
    .then( boards => {
      res.json(boards);
    })
}

const boardCreate = (req, res) => {
  const addBoardInfo = req.body;
  Boards.sync()
    .then( () => {
      return Boards.create(addBoardInfo)
    })
    .then( () => {
      return Boards.findAll({where: {userId: addBoardInfo.userId}})
    })
    .then( boards => {
      res.json(boards);
    })
}
// container ---------------------------------------------------------------------------------------------------

const container_boardId = (req, res) => {
  const boardId = req.params.container_boardId;
  Containers.sync()
    .then( () => {
      return Containers.findAll({where: {boardId: boardId}})
    })
    .then ( containers => {
      res.json(containers);
    })
}

const containerCreate = (req, res) => {
  const addContainer = req.body;
  Containers.sync()
    .then( () => {
      return Containers.create(addContainer);
    })
    .then( () => {
      return Containers.findAll({where: {boardId: addContainer.boardId}})
    })
    .then( containers => {
      res.json(containers);
    })
}

// card ---------------------------------------------------------------------------------------------------

const allCard = (req, res) => {
  Cards.sync()
    .then( () => {
      return Cards.findAll();
    })
    .then( cards => {
      res.json(cards);
    })
}

const cardCreate = (req, res) => {
  const addCard = req.body;
  Cards.sync()
    .then( () => {
      return Cards.create(addCard);
    })
    .then( () => {
      return Cards.findAll();
    })
    .then( cards => {
      res.json(cards);
    })
}

// description ---------------------------------------------------------------------------------------------------

const description = (req, res) => {
  const cardId = req.params.cardId;
  Description.sync()
    .then( () => {
      return Description.findOne({where: {cardId: cardId}})
    })
    .then( description => {
      res.json(description);
    })
}

const descriptionCreate = (req, res) => {
  const createDescripiton = req.body;
  Description.sync()
    .then( () => {
      return Description.create(createDescripiton);
    })
    .then( () => {
      return Description.findOne({where: {cardId: createDescripiton.cardId}})
    })
    .then( description => {
      res.json(description);
    })
}
module.exports = { username,
                   board_userId, 
                   boardCreate, 
                   container_boardId, 
                   allCard, 
                   description,
                   containerCreate,
                   cardCreate,
                   descriptionCreate };