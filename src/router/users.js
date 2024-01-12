const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const userController = require ('../controllers/userController.js')

//********     Middlewares   ********//
const userUpload = require('../middlewares/multerUsers'); // middleware que carga una imagén
const validacionRegister = require('../middlewares/validacionRegister.js');



//********     Sistema de Ruteo   ********//

router.get('/', userController.index);
router.get('/login', userController.login);
router.post('/login/:userId', userController.loginAcceso);



//Ruta que muestra y procesa el formulario de Registracion

router.get('/register', userController.register);
router.post('/register', userUpload.single('imagenUsuario'),validacionRegister, userController.storeUser);






//mostrar el detalle de un usuario
// router.get('/:id', userController.detail);

//Modificar datos del usuario
// router.put('/:id', userController.edit); 
// router.patch('/:id', userController.update); 

//Eliminar datos del usuario
// router.delete('/:id', userController.delete); 


 module.exports = router;







