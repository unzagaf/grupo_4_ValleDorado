const { body } = require('express-validator');
const path = require('path');

const validacionAdminCreate = [
    body('destination').notEmpty().withMessage('El nombre del paquete es requerido'),
    body('city_depart').notEmpty().withMessage('La provincia de salida es requerida'),
    body('price').notEmpty().withMessage('El precio es requerido').isNumeric().withMessage('El precio debe ser un número'),
    body('group_size').notEmpty().withMessage('La cantidad de personas es necesaria').isNumeric().withMessage('La cantidad de personas debe ser un número'),
    body('start_date').notEmpty().withMessage('La fecha de inicio es requerida').isISO8601().withMessage('La fecha de inicio debe ser válida'),
    body('finish_date').notEmpty().withMessage('La fecha de finalización es requerida').isISO8601().withMessage('La fecha de finalización debe ser válida'),
    
    body('imagen_producto').custom((value, { req }) => {
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
    }),

    body('incluye').notEmpty().isArray({ min: 1 }).withMessage('Debe seleccionar al menos una opción de incluye')
];

module.exports = validacionAdminCreate;
