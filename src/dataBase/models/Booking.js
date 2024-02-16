const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

module.exports = (sequelize, DataTypes) => {
    const alias = 'Booking';

    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        reservation_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };

    const config = {
        tableName: 'bookings',
        timestamps: true
    };

    const Bookings = sequelize.define(alias, cols, config);

    Bookings.associate = models => {
        Bookings.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        });
        Bookings.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'product_id'
        });
    };

    return Bookings;
}
