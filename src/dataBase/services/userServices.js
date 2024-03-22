const db = require('../models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const path = require('path');
const bcrypt = require('bcrypt');

const userServices = {

    getAll: async (page = 1, pageSize = 5) => {

        try {

            const offset = (page - 1) * pageSize;

            // Usa count() para obtener el total de cuentas
            const totalAccounts = await db.Account.count();

            //Metodo que nos da Sequelize
            let allAccounts = await db.Account.findAll(
                {
                    include: ['user'],
                    offset: offset,
                    limit: pageSize
                }

            );


            // Calcula si hay más cuentas después de la página actual
            const totalPages = Math.ceil(totalAccounts / pageSize);
            const hasNext = page < totalPages;

            // Devuelve tanto las cuentas de la página actual como el indicador hasNext
            return { totalUsers: totalAccounts, totalPages: totalPages ,userList: allAccounts, hasNext: hasNext };

        } catch (error) {
            console.error('Error al obtener todas las cuentas:', error.message);
            throw new Error('No se pudieron obtener todos los usuarios. Detalle: ' + error.message);
        }

    },


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
    getOneById: async (account_id) => {
        try {
            const account = await db.Account.findByPk(account_id, {
                include: [{ association: "user" }]
            });
            // console.log("ESTE ES EL GET ONE: ", account);
            return account; // Devolver el usuario correctamente
        } catch (error) {
            console.error('Error al obtener el usuario:', error);
            throw error; // Lanzar el error para manejarlo en el código que llama a getOne
        }
    },
    generatePasswordHash: (password) => {
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds);
    },
    login: async (username) => {
        try {
            // Buscar el usuario por el username
            const account = await db.Account.findOne({ where: { username } });
            // Verificar si se encontró el usuario
            if (!account) {
                throw new Error('Usuario no encontrado');
            }
            // Si se encontro el usuario,buscamos datos de usuario
            const user = await db.User.findByPk(account.user_id);
            if (!user) {
                throw new Error('Datos de usuario no encontrados');
            }
            return { account, user };
        } catch (error) {
            throw error;
        }
    }
}
module.exports = userServices;