const express = require('express');
const path = require('path');
const app = express();


const registerController = {
    index : app.get('/', (req, res) => {
        res.render('./users/register.ejs');
    }),
}
module.exports = registerController;