// Imports Sequelize that makes it easy to work with MySQL
const Sequelize = require('sequelize');
// Imports Dotenv zero-dependency module that loads environment
// variables from a .env file into process.env
require('dotenv').config();

// Sequelize instance connects to the database
// Passing parameters separately (sqlite)

let sequelize;

// Access Heroku's process.env.JAWSDB_URL variable and use that value to connect
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    // localhost configuration
    // Still use local database when running locally
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306,
        },
    );
};

module.exports = sequelize;