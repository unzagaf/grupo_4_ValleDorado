const express = require('express');
const path = require('path');
const app = express();


const productCartController = {
    index : app.get('/', (req, res) =>{
        res.render('./products/productCart.ejs', { stylesheetPath: 'css/productCart.css' });
    }),
}



module.exports = productCartController;