// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
// Initialize Blog model (table) by extending off Sequelize's Model class
class Blog extends Model { }

// set up fields and rules for Blog model
Blog.init(
    {
        // Defines the columns id, title, content, date_created, and user_id
        id: {
            // Sets data type as Integer
            type: DataTypes.INTEGER,
            // Doesn't allow null values
            allowNull: false,
            // Set as primary key
            primaryKey: true,
            // Uses auto increment
            autoIncrement: true,
        },
        title: {
            // Sets data type as String
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        user_id: {
            type: DataTypes.INTEGER,
            // references the user model's id
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog',
    }
);

module.exports = Blog;