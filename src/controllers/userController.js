const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const usersFilePath = path.join(__dirname, '../data/users.json');
const arrayUsers = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const userController = {
    index: (req, res) => {

    },

    login: (req, res) => {
        res.render('./users/login.ejs');
    },

    // formulario de registro/creacion de usuario
    register: (req, res) => {
        res.render('./users/register.ejs');
    },

    // recibe los datos del formulario de registro y crea el usuario en el array/JSON
    storeUser: (req, res) => {
        let newUser = { ...req.body };

        newUser.id = arrayUsers.length + 1;

        newUser.image = null;

        console.log(newUser);
        arrayUsers.push(newUser)

        

        res.redirect('/users/login')
    },


    detail: (req, res) => {



    },


    // Update - Form to edit
    edit: (req, res) => {
        // Do the magic
    },
    // Update - Method to update
    update: (req, res) => {
        // Do the magic
    },

    // Delete - Delete one product from DB
    delete: (req, res) => {
        // Do the magic
    }
};




module.exports = userController;