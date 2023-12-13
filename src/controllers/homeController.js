const express = require('express');
const path = require('path');
const app = express();

const homeController = {
    index : (req, res) => {
        res.render('./products/home.ejs', { stylesheetPath: 'css/home.css' });
    }
}



module.exports = homeController;