const express = require('express');
const router = express.Router();
const path = require('path');
const adminController = require('../controllers/adminController')
const fileUpload = require('../middlewares/multerConfig');
const authMiddleware=  require('../middlewares/authMiddleware.js');


// trae la vista
router.get('/',authMiddleware, adminController.index);
// manda la informacion del formulario
router.post('/', fileUpload.array('imagen_producto', 5), adminController.paqueteCreate); 

// editar producto
router.get('/edit/:idProduct',adminController.paqueteSelect)
router.put('/edit/:idProduct',fileUpload.array('imagen_producto', 5), adminController.paqueteEdit)
router.delete('/delete/:idProduct',adminController.paqueteDelete);

module.exports = router;