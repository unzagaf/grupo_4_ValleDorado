const express = require('express');
const path = require('path');
const app = express();

const adminController = {
    index : app.get('/', (req, res) => {
        res.render('./admin/admin.ejs');
    }),
}



module.exports = adminController;