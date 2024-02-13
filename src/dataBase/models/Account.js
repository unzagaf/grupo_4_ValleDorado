const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

module.exports = (sequelize, DataTypes) => {
    const alias = 'Account';

    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };

    const config = {
        tableName: 'account',
        timestamps: true
    };

    const Account = sequelize.define(alias, cols, config);

    Account.associate = models => {
        Account.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        });
    };

    return Account;
}
