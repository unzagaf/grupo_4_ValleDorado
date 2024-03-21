const express = require('express');
const path = require('path');


const apiProductsController = {
    list: (req, res) => {
        res.send ('muestro lista de products')
    },

    details: (req, res) => {
        res.send ('muestro lista de products')
    },


}

module.exports =apiProductsController