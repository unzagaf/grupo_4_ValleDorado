const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const adminController = {
    index: (req, res) => {
        res.render('./admin/admin.ejs', {
             stylesheetPath: '/css/admin.css',
             products: products });
    },
    crearPaquete: (req, res) => {
        const datosFormulario = req.body;
        // console.log('Datos del formulario:', datosFormulario);

        // const data = fs.readFileSync(productsFilePath, 'utf-8');
        // const datosExistente = JSON.parse(data);
        // console.log(data);
        // console.log(datosExistente);
        // res.redirect('/admin');
        try {
            // Lee los datos existentes del archivo JSON
            const data = fs.readFileSync(path.join(__dirname, '../../data/products.json'), 'utf-8');
            const datosExistente = JSON.parse(data);

            // Agrega nuevos datos al array existente
            datosExistente.push(datosFormulario);

            // Guarda los datos actualizados en el archivo JSON
            const datosString = JSON.stringify(datosExistente, null, 2);
            fs.writeFileSync(path.join(__dirname, '../../data/products.json'), datosString, 'utf-8');

            console.log('Datos del formulario:', datosFormulario);
            res.send('Datos del formulario recibidos con éxito');
        } catch (error) {
            console.error('Error al procesar los datos:', error);
            res.status(500).send('Error interno del servidor');
        }

        
    },
    // crearPaquete: (req, res) => {
    //     const datosFormulario = req.body;

    //     try {
    //         // Lee los datos existentes del archivo JSON
    //         const data = fs.readFileSync('../../data/products.json', 'utf-8');
    //         const datosExistente = JSON.parse(data);

    //         // Agrega nuevos datos al array existente
    //         datosExistente.push(datosFormulario);

    //         // Guarda los datos actualizados en el archivo JSON
    //         const datosString = JSON.stringify(datosExistente);
    //         fs.writeFileSync('../../data/products.json', datosString, 'utf-8');

    //         console.log('Datos del formulario:', datosFormulario);
    //         res.send('Datos del formulario recibidos con éxito');
    //         res.redirect('/admin');
    //     } catch (error) {
    //         console.error('Error al procesar los datos:', error);
    //         res.status(500).send('Error interno del servidor');
    //     }
    // }
};

module.exports = adminController;