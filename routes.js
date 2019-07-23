
const USERS = "/";
const USERNAME = "/user/:username";
const BOARD_USERID = "/board/:board_userId";
const CONTAINER_BOARDID = "/container/:container_boardId";
const CARDS = "/cards";
const DESCRIPTION_CARDID = "/description/:cardId";
const BOARDS = "/boards";
const CREATE = "/create";
const CONTAINERS = "/containers";
const DESCRIPTION = "/description";

// routes

const routes = {
  users: USERS,
  username: USERNAME,
  userIdBoard: BOARD_USERID,
  containerBoardId: CONTAINER_BOARDID,
  cards: CARDS,
  descriptionCardId: DESCRIPTION_CARDID,
  boards: BOARDS,
  create: CREATE,
  containers: CONTAINERS,
  description: DESCRIPTION
}

module.exports = routes;