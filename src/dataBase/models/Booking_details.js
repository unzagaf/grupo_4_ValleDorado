const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

module.exports = (sequelize, DataTypes) => {
    const alias = 'BookingDetails';

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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        airport_transportation: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rent_a_car: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        booking_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };

    const config = {
        tableName: 'bookings_details',
        timestamps: true
    };

    const BookingDetails = sequelize.define(alias, cols, config);

    BookingDetails.associate = models => {
        BookingDetails.belongsTo(models.Bookings, {
            as: 'booking',
            foreignKey: 'booking_id'
        });
    };

    return BookingDetails;
}
