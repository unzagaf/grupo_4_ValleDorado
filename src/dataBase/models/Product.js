const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

module.exports = (sequelize, DataTypes) => {
    const alias = 'Product';

    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        destination: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 0),
            allowNull: false
        },
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        ending_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        province_of_departure: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        peoples: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };

    const config = {
        tableName: 'products',
        timestamps: true
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = models => {
        Product.hasMany(models.ProductService, {
            as: 'product_services',
            foreignKey: 'product_id'
        });
        Product.hasMany(models.ProductImage, {
            as: 'product_images',
            foreignKey: 'product_id'
        });
    };

    return Product;
}
