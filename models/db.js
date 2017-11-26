const Sequelize = require('sequelize');

exports.sequelize = new Sequelize(
  /*database=*/'movielist',
  /*user=*/'user',
  /*password=*/'',
  {
    host: 'localhost',
    dialect: 'postgres',

    // TODO
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
});


// Test the connection
exports.sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});
