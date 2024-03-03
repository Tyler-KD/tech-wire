const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    // Use checkPassword method and 'bcrypt.compareSync' to compare the provided password and hashed password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        // Defines columns id, username, and password
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            // The len validation property validates password length of 8 characters or greater
            validate: {
                len: [8],
            },
        },
    },
    {
        // When adding hooks via the init() method, they go below
        hooks: {
            // Use the beforeCreate hook to work with data before a new instance is created
            beforeCreate: async (newUserData) => {
                // In this case, we are taking the user's password, hashing the password, and saving to newUserData
                // Use 'bcrypt.hash' to hash the provided newUserData.password
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            // Here, use the beforeUpdate hook to make sure the user's password is hashed in an updated password, before updating the database
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;