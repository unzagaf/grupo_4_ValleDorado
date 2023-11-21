const express = require('express');
const path = require('path');
const app = express();


const productCartController = {
    index : app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/productCart.html'))
    }),
}



module.exports = productCartController;