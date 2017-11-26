const Sequelize = require('sequelize');
const db = require('./db.js').sequelize;

// Postgres table name: 'users'
exports.User = db.define('user', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  img_url: {
    type: Sequelize.STRING
  },
  goog_id: {
    type: Sequelize.STRING
  }
});

// Postgres table name: 'movies'
exports.Movie = db.define('movie', {
  title: {
    type: Sequelize.STRING
  },
  year: {
    type: Sequelize.STRING
  }
});
