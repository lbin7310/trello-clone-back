const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const {
  Users,
  Boards,
  Containers,
  Cards,
  Description
} = require('../model/sequelize');

const username = (req, res) => {
  const name = req.params.username;
  Users.findOne({ where: { nickname: name } }).then(userInfo =>
    res.json(userInfo)
  );
};

// board ---------------------------------------------------------------------------------------------------

const board_userId = (req, res) => {
  const id = req.params.board_userId;
  // const boards = Boards.findAll({ where: { userId: id } });
  // boards
  // .then( boards => {
  //   res.json(boards);
  // })
  Boards.findAll({ where: { userId: id } }).then(boards => res.json(boards));
};

const boardCreate = (req, res) => {
  const addBoardInfo = req.body;
  Boards.create(addBoardInfo)
    .then(() => Boards.findAll({ where: { userId: addBoardInfo.userId } }))
    .then(boards => res.json(boards));
};

const boardUpdate = (req, res) => {
  Boards.update(
    { title: req.body.title },
    { where: { id: req.body.id }, returning: true }
  )
    .then(result => res.send(result))
    .catch(() =>
      res.json({
        success: false
      })
    );
};

const deleteBoard = (req, res) => {
  const { id } = req.body;
  Boards.destroy({ where: { id } }).then(() => {
    res.json({});
  });
};

// container ---------------------------------------------------------------------------------------------------

const container_boardId = (req, res) => {
  const boardId = req.params.container_boardId;
  Containers.findAll({ where: { boardId } }).then(containers =>
    res.json(containers)
  );
};

const containerCreate = (req, res) => {
  const addContainer = req.body;
  Containers.create(addContainer)
    .then(() =>
      Containers.findAll({ where: { boardId: addContainer.boardId } })
    )
    .then(containers => res.json(containers));
};

const containerUpdate = (req, res) => {
  Containers.update(
    { title: req.body.title },
    { where: { id: req.body.id }, returning: true }
  )
    .then(result => res.send(result))
    .catch(() => res.json({ success: false }));
};

// card ---------------------------------------------------------------------------------------------------

const allCard = (req, res) => {
  Cards.findAll({ where: { isActive: false } }).then(cards => res.json(cards));
};

const cardCreate = (req, res) => {
  const addCard = req.body;
  Cards.create(addCard)
    .then(() => Cards.findAll({ where: { isActive: false } }))
    .then(cards => res.json(cards));
};

const cardIsActive = (req, res) => {
  Cards.update(
    { isActive: req.body.isActive },
    { where: { id: req.body.id }, returning: false }
  )
    .then(() => Cards.findAll({ where: { isActive: !req.body.isActive } }))
    .then(cards => res.json(cards))
    .catch(() => res.json({ success: false }));
};

const completedCards = (req, res) => {
  Cards.findAll({ where: { isActive: true } })
    .then(cards => {
      res.json(cards);
    })
    .catch(() => res.json({ success: false }));
};

// description ---------------------------------------------------------------------------------------------------

const description = (req, res) => {
  const { cardId } = req.params;
  const card = Description.findOne({ where: { cardId } });
  card
    .then(description => {
      res.json(description);
    })
    .catch(error => {
      res.status(403).json({
        success: false
      });
    });
};

const descriptionCreate = (req, res) => {
  const createDescripiton = req.body;
  const description = Description.create(createDescripiton);
  description
    .then(() =>
      Description.findOne({ where: { cardId: createDescripiton.cardId } })
    )
    .then(description => {
      res.json(description);
    });
};

const descriptionUpdate = (req, res) => {
  const description = Description.update(
    { title: req.body.title },
    { where: { id: req.body.id }, returning: true }
  );
  description
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.json({
        success: false
      });
    });
};

// signup

const checkEmail = (req, res) => {
  const { email } = req.params;
  const user = Users.findOne({ where: { email } });
  user.then(email => {
    res.send({ check: email });
  });
};

const checkNickName = (req, res) => {
  const { nickname } = req.params;
  const user = Users.findOne({ where: { nickname } });
  user.then(result => {
    res.send({ check: result });
  });
};

const createUser = (req, res) => {
  crypto.pbkdf2(
    req.body.password,
    process.env.SALT,
    124356,
    64,
    'sha512',
    (err, key) => {
      const user = Users.create({
        email: req.body.email,
        password: key.toString('base64'),
        nickname: req.body.nickname
      });

      user.then(result => {
        res.send({ result: !!result });
      });
    }
  );
};

// login ----------------------------------------------------------------------------------

const login = (req, res) => {
  crypto.pbkdf2(
    req.body.password,
    process.env.SALT,
    124356,
    64,
    'sha512',
    (err, key) => {
      const user = Users.findOne({
        where: {
          email: req.body.email,
          password: key.toString('base64')
        }
      });
      user
        .then(async user => {
          const { nickname } = user.dataValues;
          const token = await new Promise((resolve, reject) => {
            jwt.sign(
              {
                id: user.dataValues.id,
                nickname: user.dataValues.nickname
              },
              process.env.JWT_SECRET,
              {
                expiresIn: '2d',
                subject: 'userInfo'
              },
              (err, token) => {
                if (err) reject(err);
                resolve(token, nickname);
              }
            );
          });
          return { token, nickname };
        })
        .then(result => {
          res.send(result);
        })
        .catch(error => {
          res.status(403).json({
            message: 'login failed'
          });
        });
    }
  );
};

const loginCheck = (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.status(403).json({
      success: false,
      message: 'not logged in'
    });
  }

  const p = new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) reject(err);
      resolve(decoded);
    });
  });

  p.then(token => {
    res.json({
      success: true,
      info: token
    });
  }).catch(error => {
    res.json({
      success: false,
      message: 'failed'
    });
  });
};

module.exports = {
  username,
  board_userId,
  boardCreate,
  boardUpdate,
  container_boardId,
  allCard,
  description,
  containerCreate,
  containerUpdate,
  cardCreate,
  descriptionCreate,
  checkEmail,
  checkNickName,
  createUser,
  login,
  loginCheck,
  descriptionUpdate,
  cardIsActive,
  completedCards,
  deleteBoard
};
