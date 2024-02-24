const { body } = require('express-validator');
const path = require('path');

const validacionLogin = [


    body('username').notEmpty().withMessage('Completar con tu username').bail().withMessage('Debes escribir un formato válido'),

    body('password').notEmpty().withMessage('Debes ingresar tu clave').bail().isLength({ min: 6 }).withMessage('La clave deber tener al menos 8 dígitos'),


]

module.exports = validacionLogin;