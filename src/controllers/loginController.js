const express = require('express');
const path = require('path');
const app = express();


const loginController = {
    index : (req, res) => {
        res.render('./users/login.ejs', { stylesheetPath: 'css/login.css' });
    }
}



module.exports = loginController;