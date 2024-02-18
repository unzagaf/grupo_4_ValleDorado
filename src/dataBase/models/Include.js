const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

module.exports = (sequelize, dataTypes) => {

    const alias = 'Include';
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        include: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        details: {
            type: DataTypes.STRING(350),
            allowNull: false
        }
    };

    const config = {
        tableName: 'includes',
        timestamps:true
    };

    const Include = sequelize.define(alias, cols, config);

    return Include;
}
