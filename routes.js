const INIT = '/';
const USERNAME = '/user/:username';
const BOARD_USERID = '/:board_userId';
const CONTAINER_BOARDID = '/:container_boardId';
const CARDS = '/cards';
const CARDID = '/:cardId';
const BOARDS = '/boards';
const CREATE = '/create';
const UPDATE = '/update';
const CONTAINERS = '/containers';
const DESCRIPTION = '/description';
const EMAIL = '/:email';
const SIGNUP = '/signup';
const NICK_NAME = '/nickname';
const USER_NICK_NAME = '/:nickname';
const LOGIN = '/login';
const ATTEMPT = '/attempt';
const CHECK = '/check';
const IS_ACTIVE = '/isactive';
const DELETE = '/delete';
const COMPLETED = '/completed';

// routes

const routes = {
  init: INIT,
  username: USERNAME,
  boardUserId: BOARD_USERID,
  containerBoardId: CONTAINER_BOARDID,
  cards: CARDS,
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
  is_active: IS_ACTIVE,
  delete: DELETE,
  completed: COMPLETED,
  cardId: CARDID
};

module.exports = routes;
