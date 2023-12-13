const express = require('express');
const path = require('path');
const app = express();
// const productsFilePath = path.join(__dirname, '/data/user.json');
// const usuarios = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const registerController = {
    index: app.get('/', (req, res) => {
        res.render('./users/register.ejs', { stylesheetPath: 'css/register.css' });
    }),

    detail: (req, res) => {
		let  idUsuario  = req.params.idUsario;
		res.render('register.ejs', { usuarios, idUsario} )
		
	},


    // Crear 
    create: (req, res) => {

        res.render()
    },


    // Update - Form to edit
    edit: (req, res) => {
        // Do the magic
    },
    // Update - Method to update
    update: (req, res) => {
        // Do the magic
    },

    // Delete - Delete one product from DB
    destroy: (req, res) => {
        // Do the magic
    }
};






module.exports = registerController;