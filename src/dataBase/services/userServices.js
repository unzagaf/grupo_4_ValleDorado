const db = require('../models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const path = require('path');
const bcrypt = require('bcrypt');





const userServices = {
    createUser: (userData, accountData) => {
        let createdUser;
        let createdAccount;

        return sequelize.transaction(async (t) => {
            // Crear el usuario en la tabla User
            createdUser = await db.User.create(userData, { transaction: t });

            // Asociar el usuario a la cuenta
            accountData.user_id = createdUser.id;

            // Crear la cuenta en la tabla Account asociada al usuario creado
            createdAccount = await db.Account.create(accountData, { transaction: t });

            // Devolver el usuario y la cuenta creados
            return { user: createdUser, account: createdAccount };
        }).catch((error) => {
            console.error('Error creando usuario completo:', error);
            throw error;
        });
    },

    getOne: (email) => {
        return new Promise((resolve, reject) => {
            db.User.findOne({ where: { email: email } })
                .then(user => {
                    if (user) {
                        resolve(user);
                    } else {
                        reject('Usuario no encontrado');
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    generatePasswordHash: (password) => {
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds);
    },
    login: async (username, password) => {
        try {
        // Buscar el usuario por su correo electrónico
        const user = await db.Account.findOne({ where: { username } });
        
        // Verificar si se encontró el usuario
        if (!user) {
            throw new Error('Usuario no encontrado');
        }

        // Verificar si la contraseña proporcionada coincide con la contraseña almacenada
        const account = await db.Account.findOne({ where: { userId: user.id } });
        if (!account) {
            throw new Error('Cuenta no encontrada');
        }
        const passwordMatch = await bcrypt.compare(password, account.password);
        if (!passwordMatch) {
            throw new Error('Contraseña incorrecta');
        }

        // Si el usuario y la contraseña son válidos, devolver el usuario
        return user;
        } catch (error) {
        throw error;
        }
    }

    


}




module.exports = userServices;