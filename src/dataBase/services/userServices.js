const db = require('../models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const path = require('path');

const userServices = {

    getAll: () => {
        db.Users.findAll()
            .then((user) => {
                console.log(user)
            })
    },










}

module.exports = userServices;