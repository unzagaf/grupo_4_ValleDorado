const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const userController = require ('../controllers/userController.js')




router.get('/', userController.index);
router.get('/login',userController.login)


//falta crear la vista con todos los usuarios?

//Enviar los datos del Usuario

router.get('/register', userController.register);
router.post('/register', userController.storeUser);

//mostrar el detalle de un usuario
// router.get('/:id', userController.detail);

//Modificar datos del usuario
// router.put('/:id', userController.edit); 
// router.patch('/:id', userController.update); 

//Eliminar datos del usuario
// router.delete('/:id', userController.delete); 


module.exports = router;







