const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const userController = require ('../controllers/userController.js')

//********     Middlewares   ********//
const userUpload = require('../middlewares/multerUsers'); // middleware que carga una imagén
const validacionRegister = require('../middlewares/validacionRegister.js');
const validacionLogin = require('../middlewares/validacionLogin.js');
const guestMiddleware= require('../middlewares/guestMiddleware');
const authMiddleware=  require('../middlewares/authMiddleware.js');




//********     Sistema de Ruteo   ********//

router.get('/', userController.index);

router.get('/login',userController.login); //aqui debe haber un middleware
router.post('/login',validacionLogin, userController.processLogin);

router.get('/viendo', function(req, res) {
    if (req.session.usuarioLogueado == undefined || req.session.usuarioLogueado === null) {
        res.send("No estás logueado");
    } else {
        console.log('Usuario logueado:', req.session.usuarioLogueado);
        res.send("El usuario logueado es correcto " + req.session.usuarioLogueado.nombre);
    }
});


//Ruta que muestra y procesa el formulario de Registracion

router.get('/register', guestMiddleware,userController.register);
router.post('/register', userUpload.single('imagenUsuario'),validacionRegister, userController.storeUser);

// ** no FUNCIONA Rutas accesibles solo con login (por ejemplo, la página del perfil)//
router.get('/profile',authMiddleware, userController.profile);




module.exports = router;







