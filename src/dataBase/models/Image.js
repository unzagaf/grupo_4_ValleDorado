const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

module.exports = (sequelize, dataTypes) => {

    const alias = 'Image';
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        route: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };

    const config = {
        tableName: 'images',
        timestamps: true
    };

    const Image = sequelize.define(alias, cols, config);

    Image.associate = models => {
        Image.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'product_id'
        });
    };

    return Image;
}
