const express = require('express');
const path = require('path');
const app = express();

const homeController = {
    index : app.get('/', (req, res) => {
        res.render('./products/home.ejs');
    }),
}



module.exports = homeController;