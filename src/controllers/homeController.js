const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const productServices = require('../dataBase/services/productServices.js');

const homeController = {
    index:(req, res) => {
        productServices.getAll()
            .then(products=>{
                res.render('./products/home.ejs', {
                    stylesheetPath: 'css/home.css',
                    products: products,
                    usuarioLogueado: req.session.logined
                });
            })
    }
}



module.exports = homeController;