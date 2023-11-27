const express = require('express');
const path = require('path');
const app = express();


const registerController = {
    index : app.get('/', (req, res) => {
        res.render('./users/register.ejs', { stylesheetPath: 'css/register.css' });
    }),
}
module.exports = registerController;