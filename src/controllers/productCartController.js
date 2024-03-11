const express = require('express');
const path = require('path');
const app = express();


const productCartController = {
    index : app.get('/', (req, res) =>{
        res.render('./products/productCart.ejs',
         { usuarioLogueado: req.session.usuarioLogueado});
    }),
}



module.exports = productCartController;