const session = require('express-session');
const Sequelize = require('sequelize');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Create a new Sequelize instance
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    });

// Define your SequelizeStore
const sessionStore = new SequelizeStore({
  db: sequelize, // Use the Sequelize instance here
});

// Export your Sequelize instance and the session store
module.exports.sequelize = sequelize;
module.exports.sessionStore = sessionStore;

// Export the development configuration separately
module.exports.development = {
  username: 'collins',
  password: 'Ryanloveus1234!@#$', 
  database: 'tech_blog_db', 
  host: 'localhost',
  dialect: 'mysql',
};
