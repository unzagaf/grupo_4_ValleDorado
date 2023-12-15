const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productDetailController = {
    index:(req, res) => {
        const productId = req.params.id;
        const product = products.find(product => product.id_producto === Number(productId));
        
        res.render('./products/productDetail.ejs',
         { stylesheetPath: '/css/productDetail.css',
        //  producto especifico
          product: product,
        products: products });  //todos los productos
    }
}



module.exports = productDetailController;