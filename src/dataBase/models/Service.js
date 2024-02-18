const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

module.exports = (sequelize, dataTypes) => {

    const alias = 'Service';
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        type_of_room: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        travel_insurance: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
        airport_transportation: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
        rent_a_car: {
            type: DataTypes.TINYINT,
            allowNull: false
        }
    };

    const config = {
        tableName: 'services',
        timestamps: true
    };

    const Service = sequelize.define(alias, cols, config);

    return Service;
}
