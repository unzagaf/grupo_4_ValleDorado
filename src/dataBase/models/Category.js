const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

module.exports = (sequelize, DataTypes) => {
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
        tableName: 'category',
        timestamps: false
    };

    const Category = sequelize.define(alias, cols, config);

    Category.associate = models => {
        // por el momento no esta asociado a otra tabla
    };

    return Category;
}
