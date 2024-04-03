const express = require('express');
const path = require('path');
const app = express();

const productServices = require('../dataBase/services/productServices.js');

const homeController = {

  index: (req, res) => {
    
    productServices.getAll(1, 100)
      .then(rto => {
        console.log(rto);
        res.render('./products/home.ejs', {
          products: rto.products,
          usuarioLogueado: req.session.logined
        });
      })
  }
}


module.exports = homeController;