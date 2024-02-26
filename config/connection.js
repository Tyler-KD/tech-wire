// Imports Sequelize that makes it easy to work with MySQL
const Sequelize = require('sequelize');
// Imports Dotenv zero-dependency module that loads environment
// variables from a .env file into process.env
require('dotenv').config();

// Sequelize instance connects to the database
// Passing parameters separately (sqlite)
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    }
);

module.exports = sequelize;