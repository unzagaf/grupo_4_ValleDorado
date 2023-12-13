const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')

// trae la vista
router.get('/', adminController.index);
// manda la informacion del formulario
router.post('/', adminController.crearPaquete); 

module.exports = router;