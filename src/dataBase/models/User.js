const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

module.exports = (sequelize, dataTypes) => {

    const alias = 'User';
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        dni: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            unique: true
        }
    };

    const config = {
        tableName: 'users',
        timestamps: true
    };

    const User = sequelize.define(alias, cols, config);

    return User;
}


