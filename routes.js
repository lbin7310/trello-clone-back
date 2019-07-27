
const USERS = "/";
const USERNAME = "/user/:username";
const BOARD_USERID = "/board/:board_userId";
const CONTAINER_BOARDID = "/container/:container_boardId";
const CARDS = "/cards";
const DESCRIPTION_CARDID = "/description/:cardId";
const BOARDS = "/boards";
const CREATE = "/create";
const UPDATE = "/update";
const CONTAINERS = "/containers";
const DESCRIPTION = "/description";
const EMAIL = "/:email";
const SIGNUP = "/signup";
const NICK_NAME = "/nickname";
const USER_NICK_NAME = "/:nickname";
const LOGIN = "/login";
const ATTEMPT = "/attempt";
const CHECK = "/check";
const IS_ACTIVE = "/isactive";

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
  update: UPDATE,
  containers: CONTAINERS,
  description: DESCRIPTION,
  email: EMAIL,
  signup: SIGNUP,
  nickName: NICK_NAME,
  userNickName: USER_NICK_NAME,
  login: LOGIN,
  attempt: ATTEMPT,
  check: CHECK,
  is_active: IS_ACTIVE
}

module.exports = routes;