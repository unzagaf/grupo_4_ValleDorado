const { body } = require('express-validator');
const path = require('path');

const validacionRegister = [

    body('nombre').notEmpty().withMessage('Cpmpletar con tu nombre').bail().isLength({ min: 3 }).withMessage('El nombre debe tener al minimo 3 letras'),

    body('apellido').notEmpty().withMessage('Completar con tu apellido').bail().isLength({ min: 3 }).withMessage('El apellido debe tener al menos 3 letras'),

    body('fechaNacimiento').notEmpty().withMessage('Cpmpletar con tu fecha de nacimiento').bail(),

    body('dni').notEmpty().withMessage('Completar tu dni').bail().isLength({ min: 6 }).withMessage('El dni debe tener como mínimo 3 números'),

    body('email').notEmpty().withMessage('Completar con tu email').bail().isEmail().withMessage ('Debes escribir un formato válido'),

    body('password').notEmpty().withMessage('Debes ingresar tu clave').bail().isLength({ min: 6 }).withMessage('La clave deber tener al menos 6 números'),

    body('confirmarPassword').notEmpty().withMessage('Confirmar tu clave').bail().isLength({ min: 6 }).withMessage('La clave deber tener al menos 6 números'),


    body('imagenUsuario').custom((value, { req }) => {
        const file = req.file;
        const acceptedExtension = ['.jpg', '.png', '.gif']
        const fileExtension =path.extname(file.originalname);

        if (!file) {
            throw new Error('Tienes que subir una imagen');
        } else {
            const fileExtension = path.extname(file.originalname);
            if (!acceptedExtension.includes(fileExtension)) {
                throw new Error(`Las extensiones permitidas de archivo son  ${acceptedExtension.join(',')}`);

            }

        }
        return true;
    })

]

module.exports = validacionRegister;