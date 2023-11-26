const express = require('express');
const path = require('path');
const app = express();


const loginController = {
    index : app.get('/', (req, res) => {
        res.render('./users/login.ejs');
    }),
}



module.exports = loginController;