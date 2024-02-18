const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

module.exports = (sequelize, dataTypes) => {

    const alias = 'Account';
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    };

    const config = {
        tableName: 'accounts',
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
