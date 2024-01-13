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



// <label for="" class="input__txt__places section__login--label">Email</label>
// <input type="email" name = "email"placeholder="Ingrese su email"
// class ="form-control <%= locals.errors && errors.email? 'is-invalid': null %>" value = "<%= locals.oldData? oldData.email: null %>">
// <% if(locals.errors && errors.email){%>
//     <div class="text-danger">
//         <%=locals.errors.email.msg %>
//     </div>
//     <% }%>


//mostrar el detalle de un usuario
// router.get('/:id', userController.detail);

//Modificar datos del usuario
// router.put('/:id', userController.edit); 
// router.patch('/:id', userController.update); 

//Eliminar datos del usuario
// router.delete('/:id', userController.delete); 


 module.exports = router;







