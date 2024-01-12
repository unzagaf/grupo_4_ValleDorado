const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const usersFilePath = path.join(__dirname, '../data/users.json');
const arrayUsers = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const { validationResult } = require('express-validator');


const userController = {
    index: (req, res) => {

    },

    // **** Formulario de login, para el usuario del usuario registrado
    login: (req, res) => {
        res.render('./users/login.ejs', { stylesheetPath: 'css/login.css' });
    },

    // **** Formulario de registro/creacion del usuario
    register: (req, res) => {
        res.render('./users/register.ejs', { stylesheetPath: 'css/register.css' });
    },

    // ****Recibe los datos del formulario de registro y crea el usuario en el array/JSON

    storeUser: (req, res) => {
        let newUser = { ...req.body };

        //Configuracion inicial de las propiedades del nuevo usuario

        newUser.id = arrayUsers.length + 1;
        newUser.nombre = req.body.nombre || "";
        newUser.apellido = req.body.apellido || "";
        newUser.dni = req.body.dni || "";
        newUser.password = req.body.password || "";
        newUser.confirmarPassword = req.body.confirmarPassword || "";
        newUser.categoria = "";
        newUser.image = "";

        // Verificar si se ha sibido una imagen

        if (req.file && req.file.filename) {
            newUser.image = req.file.filename;
        }

//Validación de errores

        const resultadoValidacion = validationResult(req);

        if (resultadoValidacion.errors.length > 0) {
            //mostrar la vista de registro con los errores
            return res.render('./users/register.ejs', {
                stylesheetPath: 'css/register.css',
                errors: resultadoValidacion.mapped(),
                oldData:req.body,
                newUser: newUser
            });
        }

        console.log(newUser);

        //Persistir en nuevo usuario en el array/Json
        arrayUsers.push(newUser);

        console.log(req.file);

        // Guardar la persistencia de datos (archivo JSON)
        const datosUsers = JSON.stringify(arrayUsers, null, 8);
        fs.writeFileSync(usersFilePath, datosUsers, 'utf-8');

        // Redireccionar a la pagina de login
        res.redirect('/users/login')
    },


    loginAcceso: (req, res) => {

        res.render('./products/home.ejs', {
            stylesheetPath: 'css/home.css',
            products: products
        });

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