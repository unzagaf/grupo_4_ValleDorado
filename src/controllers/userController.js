const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const usersFilePath = path.join(__dirname, '../data/users.json');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const userServices = require('../dataBase/services/userServices.js');
const { log } = require('console');
const arrayUsers = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const userController = {
    index: (req, res) => {

    },

    // **** Formulario de registro/creación del usuario
    register: (req, res) => {
        res.render('./users/register.ejs',
            {
                usuarioLogueado: req.session.usuarioLogueado
            });
    },

    //---------------------------
    //          LOGIN
    //---------------------------

    // **** Formulario de login, para el usuario
    //GET
    login: (req, res) => {
        res.render('./users/login.ejs',
        {
            usuarioLogueado: req.session.usuarioLogueado
        });

    },

    // **** Implementación del formulario de login
    //POST
    processLogin: async (req, res) => {
        try{
            const validacion = validationResult(req);
            let usuarioALoguearse;

            if (validacion.errors.length > 0) {
                console.log('hubo un error');
                res.render('./users/login.ejs', {
                    stylesheetPath: 'css/login.css',
                    errors: validacion.mapped(),
                    oldData: req.body,
                });
            }
            const { username, password } = req.body; 
            const user = await userServices.login(username);

            if(!user){
                throw new Error('Usuario no encontrado');
            }
            const passwordMatch = await bcrypt.compare(password, user.account.password);
            if (!passwordMatch) {
                throw new Error('Contraseña incorrecta');
            }
            req.session.logined = true;
            req.session.userid = user.account.id
            req.session.username = user.account.username
            req.session.name = user.user.name
            req.session.save(err => {
                if (err) {
                    console.log("Error al guardar la sesión", err);
                } else {
                    console.log("Sesión guardada correctamente");
                    console.log("Usuario logueado:" +user.account.username);
                    res.redirect('/');
                }
            });
        } catch (error) {
            console.log("Error al iniciar sesión:", error.message);
            return res.status(500).send("Error al iniciar sesión");
        }
    },

    //**************************************************************************************** */

    storeUser: async (req, res) => {
        let newUser = { ...req.body };
        let newAccount = { ...req.body };
    
        newUser.name = req.body.name || "";
        newUser.surname = req.body.surname || "";
        newUser.dni = req.body.dni || "";

        newAccount.email = req.body.email
        newAccount.username = req.body.username || ""; 
        newAccount.avatar = req.body.avatar || "";

        // / Verifica si se ha subido una imagen
        if (req.file && req.file.filename) {
            newAccount.avatar = req.file.filename;
        }
        const resultadoValidacion = validationResult(req);

        if (resultadoValidacion.errors.length > 0) {
            const errores = resultadoValidacion.mapped();
            console.log('Errores de validación:', errores);
            return res.render('./users/register.ejs', {
                stylesheetPath: 'css/register.css',
                errors: errores,
                oldData: req.body,
                newUser: newUser,
                usuarioLogueado: req.session.usuarioLogueado
            });
        }
    
        try {
            const hashedPassword = await userServices.generatePasswordHash(req.body.password);
            newAccount.password = hashedPassword;
            const { user, account } = await userServices.createUser(newUser, newAccount);
            console.log('Usuario creado con éxito:', user);
            res.render('./users/login.ejs', {
                stylesheetPath: '/css/login.css',
                usuarioLogueado: req.session.usuarioLogueado
            });
        } catch (error) {
            console.error('Error al crear usuario:', error);
            res.status(500).send('Error al crear usuario');
        }
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
    },

    logout:(req, res)=>{
        req.session.logined = false;

        res.redirect('/');
    }
};




module.exports = userController;