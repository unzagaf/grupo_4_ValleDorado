const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

module.exports = (sequelize, dataTypes) => {

    const alias = 'Include';
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        include: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    };

    const config = {
        tableName: 'includes',
        timestamps:true
    };

    const Include = sequelize.define(alias, cols, config);
    // Asociación con el modelo Product
    Include.associate = (model)=>{
        Include.belongsToMany(model.Product,{
            as:"products",
            through: "product_includes",
            foreignKey: "include_id",
            otherKey: "product_id",
            timestamps: true
        })
    }
    return Include;
}
