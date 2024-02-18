const db = require('../models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const path = require('path');

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
    }


}




module.exports = userServices;