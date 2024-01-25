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
             products: products,
             usuarioLogueado: req.session.usuarioLogueado });
    },
    paqueteCreate: (req, res) => {
        try {
            const newProduct = {id_producto: products.length + 1, ...req.body, fecha_creacion: obtenerFechaActual()};

            // Accede a la información de los archivos cargados por Multer
            const imagenesProductos = req.files;
            // revisa si hay imagenes
            if (imagenesProductos) {
            // Asigna las rutas de las imágenes al producto
            newProduct.imagen_producto = imagenesProductos.map(img => `/img/${img.filename}`);
            }
            products.push(newProduct);
            const datosString = JSON.stringify(products, null, 2);
            fs.writeFileSync(productsFilePath, datosString, 'utf-8');
            res.redirect('/admin');
        } catch (error) {
            console.error('Error al procesar los datos:', error);
            res.status(500).send('Error interno del servidor');
        }
    },
    paqueteSelect:(req, res)=>{
        const idProduct = req.params.idProduct;
        const product = products.find(product => product.id_producto === Number(idProduct));

        res.render('./admin/productEdit.ejs',{
            stylesheetPath: '/css/admin.css',
             product: product,
             usuarioLogueado: req.session.usuarioLogueado });
    },
    paqueteEdit:(req, res)=>{
        const idProduct = req.params.idProduct;
        const productIndex = products.findIndex(product => product.id_producto === Number(idProduct));

        if (productIndex === -1) {
            return res.status(404).json({ mensaje: 'Paquete no encontrado' });
        }
        const existingProduct = products[productIndex];

        Object.assign(existingProduct, req.body);

        const nuevasImagenes = req.files;

        if (nuevasImagenes) {
            // se asignan las rutas de las nuevas imágenes al paquete
            existingProduct.imagen_producto = nuevasImagenes.map(img => `/img/${img.filename}`);
        }

         // Verifica si hay valores en req.body.incluye y actualiza el producto
        if (req.body.incluye) {
            existingProduct.incluye = Array.isArray(req.body.incluye) ? req.body.incluye : [req.body.incluye];
        } else {
            existingProduct.incluye = [];
        }

        // Actualiza el archivo JSON con los nuevos datos
        const newData = JSON.stringify(products, null, 2);
        fs.writeFileSync(productsFilePath, newData, 'utf-8');

        res.redirect('/admin');
    },
    paqueteDelete:(req,res)=>{
        try {
            const productId = req.params.idProduct;
            const productIndex = products.findIndex(product => product.id_producto === Number(productId));

            if (productIndex === -1) {
                return res.status(404).json({ mensaje: 'Paquete no encontrado' });
            }
            // Elimina el paquete del array de productos
            const deletedProduct = products.splice(productIndex, 1)[0];

            const newData = JSON.stringify(products, null, 2);
            fs.writeFileSync(productsFilePath, newData, 'utf-8');

            res.json({ mensaje: 'Paquete eliminado correctamente', paqueteEliminado: deletedProduct });
        } catch (error) {
            console.error('Error al procesar la solicitud:', error);
            res.status(500).json({ mensaje: 'Error interno del servidor' });
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