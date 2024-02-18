const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

module.exports = (sequelize, dataTypes) => {

    const alias = 'ProductInclude';
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        include_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };

    const config = {
        tableName: 'product_includes',
        timestamps: true
    };

    const ProductInclude = sequelize.define(alias, cols, config);

    ProductInclude.associate = models => {
        ProductInclude.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'product_id'
        });
        ProductInclude.belongsTo(models.Include, {
            as: 'include',
            foreignKey: 'include_id'
        });
    };

    return ProductInclude;
}

