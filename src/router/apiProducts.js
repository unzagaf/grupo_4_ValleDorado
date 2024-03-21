const express = require('express');
const router= express.Router();

const apiProductsController= require('../controllers/adminControllers/apiProductsController.js');

router.get('/', apiProductsController.list);
router.get('/:id', apiProductsController.detail);