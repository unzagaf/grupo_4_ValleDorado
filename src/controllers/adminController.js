const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const adminController = {
    index: (req, res) => {
        res.render('./admin/admin.ejs', {
             stylesheetPath: '/css/admin.css',
             products: products });
    },
    crearPaquete: (req, res) => {
        const datosFormulario = req.body;
        try {
            // se leen los datos del archivo JSON
            const data = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8');
            const datosExistente = JSON.parse(data);
            const newProduct = {id_producto: datosExistente.length + 1, ...req.body, fecha_creacion: obtenerFechaActual()};
            // Accede a la información de los archivos cargados por Multer
            const imagenesProductos = req.files;
            // revisa si hay imagenes
            if (imagenesProductos) {
            // Asigna las rutas de las imágenes al producto
            newProduct.imagenes_producto = imagenesProductos.map(img => img.path);
            }
            datosExistente.push(newProduct);
            const datosString = JSON.stringify(datosExistente, null, 2);
            fs.writeFileSync(productsFilePath, datosString, 'utf-8');
            res.redirect('/admin');
        } catch (error) {
            console.error('Error al procesar los datos:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
};

module.exports = adminController;

// Función para obtener la fecha actual
function obtenerFechaActual() {
    const fecha = new Date();
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const anio = fecha.getFullYear();
    return `${dia}/${mes}/${anio}`;
}