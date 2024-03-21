const express = require('express');
const path = require('path');
const userServices= require('../dataBase/services/userServices');


const apiUserController = {
    list: async (req, res) => {

        let listUsers=  await userServices.getAll();

        res.status(200).json(listUsers)
    },

    detail: (req, res) => {
        res.send ('muestro lista de users')
    },


}

module.exports =apiUserController