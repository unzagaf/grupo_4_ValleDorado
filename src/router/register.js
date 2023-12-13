const express = require('express');
const router = express.Router();
const registerController = require ('../controllers/registerController.js')

router.get('/', registerController.index);
router.get('/register/:idUsuario', registerController.detail);
router.post('/', registerController.create);
router.patch('/:id/', registerController.edit); 
router.put('/:id', registerController.update); 


module.exports = router;

