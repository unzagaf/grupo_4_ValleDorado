const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

module.exports = (sequelize, dataTypes) => {

    const alias = 'Category';
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(60),
            allowNull: false
        }
    };

    const config = {
        tableName: 'categories',
        timestamps: true
    };

    const Category = sequelize.define(alias, cols, config);

    return Category;
}
