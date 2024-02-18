const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

module.exports = (sequelize, dataTypes) => {

    const alias = 'Booking';
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        pagada: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
        account_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };

    const config = {
        tableName: 'bookings',
        timestamps: true
    };

    const Booking = sequelize.define(alias, cols, config);

    Booking.associate = models => {
        Booking.belongsTo(models.Account, {
            as: 'account',
            foreignKey: 'account_id'
        });
        Booking.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'product_id'
        });
    };

    return Booking;
}

