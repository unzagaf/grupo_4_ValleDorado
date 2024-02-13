const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

module.exports = (sequelize, DataTypes) => {
    const alias = 'Service';

    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        service: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        details: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    };

    const config = {
        tableName: 'service',
        timestamps: true
    };

    const Service = sequelize.define(alias, cols, config);

    Service.associate = models => {
        Service.hasMany(models.ProductService, {
            as: 'product_services',
            foreignKey: 'service_id'
        });
    };

    return Service;
}
