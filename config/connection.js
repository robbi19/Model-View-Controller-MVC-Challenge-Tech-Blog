const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Load environment variables from a .env file if available
dotenv.config();

let sequelize;

try {
  if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
  } else {
    sequelize = new Sequelize(
      process.env.DB_NAME || 'your_default_db_name',
      process.env.DB_USER || 'your_default_db_user',
      process.env.DB_PASSWORD || 'your_default_db_password',
      {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
        port: process.env.DB_PORT || 3306
      }
    );
  }
} catch (error) {
  console.error('Error connecting to the database:', error);
  process.exit(1); // Terminate the application on a database connection error
}

module.exports = { sequelize };

