const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const userController = require ('../controllers/userController.js')

//********     Middlewares   ********//
const userUpload = require('../middlewares/multerUsers'); // middleware que carga una imagén
const validacionRegister = require('../middlewares/validacionRegister.js');
const validacionLogin = require('../middlewares/validacionLogin.js');





//********     Sistema de Ruteo   ********//

router.get('/', userController.index);

router.get('/login', userController.login);
router.post('/login',validacionLogin, userController.processLogin);





//Ruta que muestra y procesa el formulario de Registracion

router.get('/register', userController.register);
router.post('/register', userUpload.single('imagenUsuario'),validacionRegister, userController.storeUser);





 module.exports = router;







