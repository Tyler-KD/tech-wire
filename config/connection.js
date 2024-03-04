// Imports Sequelize that makes it easy to work with MySQL
const Sequelize = require('sequelize');
// Imports Dotenv zero-dependency module that loads environment
// variables from a .env file into process.env
require('dotenv').config();

// Sequelize instance connects to the database
// Passing parameters separately (sqlite)

let sequelize;

// Access Heroku's process.env.JAWSDB_URL variable and use that value to connect.
// Checks to see if the application is deployed.  If JAWSDB_URL environment variable exists, then that is used.  
// If not, it determines that you're on your local machine and utilizes the environment variables from the .env file to set up Sequelize.
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