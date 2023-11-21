const express = require('express');
const path = require('path');
const app = express();

const homeController = {
    index : app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/home.html'))
    }),
}



module.exports = homeController;