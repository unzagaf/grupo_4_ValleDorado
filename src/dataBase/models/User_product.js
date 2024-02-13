const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

module.exports = (sequelize, DataTypes) => {
    const alias = 'UserProduct';

    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };

    const config = {
        tableName: 'user_product',
        timestamps: true
    };

    const UserProduct = sequelize.define(alias, cols, config);

    UserProduct.associate = models => {
        UserProduct.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        });
        UserProduct.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'product_id'
        });
    };

    return UserProduct;
}
