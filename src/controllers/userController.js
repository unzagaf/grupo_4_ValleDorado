const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const usersFilePath = path.join(__dirname, '../data/users.json');
const arrayUsers = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');


const userController = {
    index: (req, res) => {

    },

    // **** Formulario de registro/creación del usuario

    register: (req, res) => {
        res.render('./users/register.ejs', { stylesheetPath: 'css/register.css' });
    },

    // **** Formulario de login, para el usuario
    login: (req, res) => {
        res.render('./users/login.ejs', { stylesheetPath: 'css/login.css' });
    },

     // **** Implementación del formulario de login
    processLogin: (req, res) => {

        const validacion = validationResult(req);

        if (validacion.errors.length > 0) {
            
            return res.render('./users/login.ejs', {
                stylesheetPath: 'css/login.css',
                errors: validacion.mapped(),  
                oldData: req.body,
            });
        }

        const { email, password } = req.body;
        const userRegistrado = arrayUsers.find((user) => user.email === email);

        if (userRegistrado && bcrypt.compareSync(password, userRegistrado.password)) {
            
            req.session.user = userRegistrado; // Guarda el usuario en la sesión

            console.log('Usuario autenticado:', userRegistrado);
            if(req.body.recordar != undefined){

                res.cookie('recordar', userRegistrado.email,{maxAge:80000})

            }

            return res.redirect('/');
            
        } else {

            // Credenciales incorrectas
            return res.render('./users/login.ejs', {
                stylesheetPath: 'css/login.css',
                errors: { password: { msg: 'Credenciales incorrectas' } },
                oldData: req.body,
            });
        }
        
        
        
    },


    //**************************************************************************************** */

    storeUser: (req, res) => {
        let newUser = { ...req.body };

        newUser.id = arrayUsers.length + 1;
        newUser.nombre = req.body.nombre || "";
        newUser.apellido = req.body.apellido || "";
        newUser.dni = req.body.dni || "";
        newUser.categoria = "";
        newUser.image = "";

        // Verifica si se ha subido una imagen
        if (req.file && req.file.filename) {
            newUser.image = req.file.filename;
        }

        // Validación de errores
        const resultadoValidacion = validationResult(req);

        if (resultadoValidacion.errors.length > 0) {
            
            return res.render('./users/register.ejs', {
                stylesheetPath: 'css/register.css',
                errors: resultadoValidacion.mapped(),
                oldData: req.body,
                newUser: newUser
            });
        }

        // Generar hash bcrypt para la contraseña
        const saltRounds = 10;
        newUser.password = bcrypt.hashSync(req.body.password, saltRounds);

        // Persistir el nuevo usuario en el array/JSON
        arrayUsers.push(newUser);

        // Guardar la persistencia de datos (archivo JSON)
        const datosUsers = JSON.stringify(arrayUsers, null, 8);
        fs.writeFileSync(usersFilePath, datosUsers, 'utf-8');

        res.redirect('/users/login');
    },

 //***************************************************************************************** */

 profile: (req, res) => {
    
    const user = req.session.user;

    if (user) {
        res.render('users/profile', { user });
    } else {
        // Usuario no autenticado, redirigir al login
        res.redirect('/users/login');
    }

  
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