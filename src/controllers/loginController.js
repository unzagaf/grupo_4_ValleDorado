const express = require('express');
const path = require('path');
const app = express();


const loginController = {
    index : app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/login.html'))
    }),
}



module.exports = loginController;