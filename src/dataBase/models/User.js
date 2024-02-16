

module.exports = (sequelize, DataTypes) => {
    const alias = 'User';

    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        dni: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };

    const config = {
        tableName: 'users',
        timestamps: true
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = models => {
        User.hasOne(models.Account, {
            as: 'account',
            foreignKey: 'user_id'
        });
        User.hasMany(models.Bookings, {
            as: 'booking',
            foreignKey: 'user_id'
        });
        User.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        });
    };

    return User;
}
