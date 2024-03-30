const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

module.exports = (sequelize, dataTypes) => {

    const alias = 'Product';
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        destination: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        finish_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(11, 0),
            allowNull: false
        },
        city_depart: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        group_size: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };

    const config = {
        tableName: 'products',
        timestamps: true
    };

    const Product = sequelize.define(alias, cols, config);
    Product.associate = (models) => {
        // Asociación con el modelo Include
        Product.belongsToMany(models.Include,{
            as:"includes",
            through: "product_includes",
            foreignKey: "product_id",
            otherKey: "include_id",
            timestamps: true
        })

        // Asociación con el modelo Image
        Product.hasMany(models.Image,{
            as: 'images',
            foreignKey: 'product_id'
        });
    };
    return Product;
}
