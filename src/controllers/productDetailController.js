const express = require('express');
const path = require('path');
const app = express();


const productDetailController = {
    index : app.get('/', (req, res) => {
        res.render('./products/productDetail.ejs');
    }),
}



module.exports = productDetailController;