const express = require('express');
const path = require('path');
const app = express();


const productDetailController = {
    index : app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/productDetail.html'))
    }),
}



module.exports = productDetailController;