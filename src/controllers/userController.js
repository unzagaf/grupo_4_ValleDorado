const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const usersFilePath = path.join(__dirname, '../data/users.json');
const arrayUsers = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const userServices = require('../dataBase/services/userServices.js')


const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const userController = {
    index: (req, res) => {

    },

    // **** Formulario de registro/creación del usuario

    register: (req, res) => {
        res.render('./users/register.ejs',
            {
                stylesheetPath: '/css/register.css',
                usuarioLogueado: req.session.usuarioLogueado
            });
    },

    // **** Formulario de login, para el usuario
    login: (req, res) => {

        //userServices.getAll();

        res.render('./users/login.ejs',
            {
                stylesheetPath: '/css/login.css',
                usuarioLogueado: req.session.usuarioLogueado
            });

    },

    // **** Implementación del formulario de login
    processLogin: (req, res) => {

        const validacion = validationResult(req);
        let usuarioALoguearse;

        if (validacion.errors.length > 0) {
            console.log('hubo un error');
            return res.render('./users/login.ejs', {
                stylesheetPath: 'css/login.css',
                errors: validacion.mapped(),
                oldData: req.body,
            });
        } else {
            for (let i = 0; i < arrayUsers.length; i++) {
                if (arrayUsers[i].email == req.body.email) {
                    if (bcrypt.compareSync(req.body.password, arrayUsers[i].password)) {
                        usuarioALoguearse = arrayUsers[i];
                        break;
                    }
                }
            }

            if (usuarioALoguearse == undefined) {
                return res.send('no se pudo');
            }

            req.session.usuarioLogueado = usuarioALoguearse;
            req.session.save(err => {
                if (err) {
                    console.log(err);
                } else {
                    res.redirect('/');
                }
            })
            // console.log('Usuario logueado:', usuarioALoguearse);
            //     res.render('./products/home.ejs', {
            //     stylesheetPath: 'css/home.css',
            //     products: products,
            //     usuarioLogueado: req.session.usuarioLogueado
            // });
        }

    },

    //**************************************************************************************** */

    storeUser: (req, res) => {
        let newUser = { ...req.body };

        //newUser.id = arrayUsers.length + 1;
        newUser.name = req.body.name || "";
        newUser.surname = req.body.surname || "";
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
        // arrayUsers.push(newUser);
        // Guardar la persistencia de datos (archivo JSON)
        // const datosUsers = JSON.stringify(arrayUsers, null, 8);
        // fs.writeFileSync(usersFilePath, datosUsers, 'utf-8');
        res.redirect('/users/login');

        // Persistir el nuevo usuario en la base de datos
        userServices.createUser(newUser);


    },

    //***************************************************************************************** */

    profile: (req, res) => {
        // const user = req.session.user;
        res.render('./users/profile.ejs', {
            stylesheetPath: 'css/home.css',
            usuarioLogueado: req.session.usuarioLogueado
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