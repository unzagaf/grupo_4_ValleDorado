const db = require('../models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const path = require('path');
const bcrypt = require('bcrypt');





const userServices = {

    // getAll: () => {
    //     db.User.findAll()
    //         .then((user) => {
    //             console.log(user)
    //         })
    // },

    // Método para crear un nuevo usuario
    createUser: (newUser) => {
        return db.User.create(newUser)
            .then((createdUser) => {
                return createdUser
            })
            .catch((error) => {
                console.error('Error creando usuario:', error);
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
    }


}




module.exports = userServices;