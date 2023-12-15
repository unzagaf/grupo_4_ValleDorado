const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const homeController = {
    index: app.get('/', (req, res) => {
        res.render('./products/home.ejs', {
            stylesheetPath: 'css/home.css',
            products: products
        });
    }),
}



module.exports = homeController;