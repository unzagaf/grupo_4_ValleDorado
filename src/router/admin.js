const express = require('express');
const router = express.Router();
const path = require('path');

// ************ Controller Require ************
const adminController = require('../controllers/adminController')

//********     Middlewares   ********//

const fileUpload = require('../middlewares/multerConfig');// middleware que carga una imagén
const validacionAdminCreate = require('../middlewares/validacionAdminCreate.js');//middleware que hace las validaciones
//const authMiddleware=  require('../middlewares/authMiddleware.js');



// trae la vista
router.get('/', adminController.index);

// manda la informacion del formulario
router.post('/',fileUpload.array('imagen_producto', 5),validacionAdminCreate,adminController.paqueteCreate); 

// editar producto
router.get('/edit/:idProduct',adminController.paqueteSelect)

router.put('/edit/:idProduct',fileUpload.array('imagen_producto', 5), adminController.paqueteEdit)

router.post('/delete/:idProduct',adminController.paqueteDelete);

module.exports = router;