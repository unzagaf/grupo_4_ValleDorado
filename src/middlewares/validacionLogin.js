const { body } = require('express-validator');
const path = require('path');

const validacionLogin = [


    body('email').notEmpty().withMessage('Completar con tu email').bail().isEmail().withMessage('Debes escribir un formato válido'),

    body('password').notEmpty().withMessage('Debes ingresar tu clave').bail().isLength({ min: 6 }).withMessage('La clave deber tener al menos 6 números'),


]

module.exports = validacionLogin;