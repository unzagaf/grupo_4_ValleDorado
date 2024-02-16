const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

module.exports = (sequelize, DataTypes) => {
    const alias = 'ProductImages';

    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        route: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };

    const config = {
        tableName: 'product_images',
        timestamps: true
    };

    const ProductImage = sequelize.define(alias, cols, config);

    ProductImage.associate = models => {
        ProductImage.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'product_id'
        });
    };

    return ProductImage;
}
