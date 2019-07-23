require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize( "trello-clone", process.env.DB_USERNAME, process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
)

const Users = sequelize.define('Users', {
  username: {
    type: Sequelize.STRING,
  }
});

const Boards = sequelize.define('Boards', {
  title: {
    type: Sequelize.STRING
  },
  userId: {
    type: Sequelize.INTEGER
  }
});

const Containers = sequelize.define('Containers', {
  title: {
    type: Sequelize.STRING
  },
  boardId: {
    type: Sequelize.INTEGER
  }
});

const Cards = sequelize.define('Cards', {
  title: {
    type: Sequelize.STRING
  },
  containerId: {
    type: Sequelize.INTEGER
  }
})

const Description = sequelize.define('Description', {
  title: {
    type: Sequelize.STRING
  },
  cardId: {
    type: Sequelize.INTEGER
  }
})

sequelize.sync({force: false})

module.exports = { Users, Boards, Containers, Cards, Description, sequelize }