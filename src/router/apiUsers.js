const express = require('express');
const router= express.Router();

const apiUserController= require('../controllers/apiUsersController.js');

router.get('/', apiUserController.list);
router.get('/:id', apiUserController.detail);

module.exports= router