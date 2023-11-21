const express = require('express');
const path = require('path');
const app = express();


const registerController = {
    index : app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/register.html'))
    }),
}



module.exports = registerController;