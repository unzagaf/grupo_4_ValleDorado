const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');
const { validationResult } = require('express-validator');
const productServices = require('../dataBase/services/productServices.js');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const adminController = {

    //-----------------------------
    //      CREATE PRODUCT
    //-----------------------------

    //Formulario de creacion
    //GET
    index: (req, res) => {
        const products = productServices.getAll()
            .then(products => {
                res.render('./admin/admin.ejs', {
                    stylesheetPath: '/css/admin.css',
                    products: products,
                    usuarioLogueado: req.session.logined
                });
            }).catch(error => {
                console.error('Error al obtener productos:', error);
                res.status(500).send('Error interno del servidor');
            });
    },
    paqueteCreate: async (req, res) => {

        const resultadoValidacion = validationResult(req);

        if (resultadoValidacion.errors.length > 0) {

            const errores = resultadoValidacion.mapped();
            console.log('Errores de validación:', errores);
            res.render('./admin/admin.ejs', {
                stylesheetPath: 'css/admin.css',
                errors: errores,
                oldData: req.body,
            });
        }else {
            try {
                const newProduct = {
                    destination: req.body.destination || "",
                    start_date: req.body.start_date || "",
                    finish_date: req.body.finish_date || "",
                    price: req.body.price || "",
                    city_depart: req.body.city_depart || "",
                    group_size: req.body.group_size || "",
                    incluye: req.body.incluye || "",
                };
                const imagenesProductos = req.files;
                // Revisa si hay imágenes
                if (imagenesProductos) {
                    // Asigna las rutas de las imágenes al producto
                    newProduct.imagenes_producto = imagenesProductos.map(img => `/img/${img.filename}`);
                }
        
                // Guardar el producto en la base de datos
                const createdProduct = await productServices.createProduct(newProduct);
        
                // Obtener todos los productos actualizados
                const products = await productServices.getAll();
                console.dir(createdProduct);
                // Renderizar la vista del administrador con los productos actualizados
                return res.render('./admin/admin.ejs', {
                    stylesheetPath: '/css/admin.css',
                    products: products
                });
            } catch (error) {
                console.error('Error al procesar los datos:', error);
                return res.status(500).send('Error interno del servidor');
            }

        }

    },
    paqueteEdit: async(req, res) => {
        try{
            const productEdit = {
                destination: req.body.destination || "",
                start_date: req.body.start_date || "",
                finish_date: req.body.finish_date || "",
                price: req.body.price || "",
                city_depart: req.body.city_depart || "",
                group_size: req.body.group_size || "",
                incluye: req.body.incluye || "",
            };
            if (req.files) {
                productEdit.imagenes_producto = req.files.filename;
            }
            const editedProduct = await productServices.editProduct(req.params.idProduct,productEdit);

            return res.render('./admin/admin.ejs', {
                stylesheetPath: '/css/admin.css',
                products: products,
                usuarioLogueado: req.session.usuarioLogueado
            });
            
        }catch(error){
            console.error('No se pudo editar el producto:', error);
            res.status(500).json({ mensaje: 'Error interno del servidor' });
        }
    },
    paqueteSelect: async (req, res) => {
        const idProduct = req.params.idProduct;
        const product = await productServices.getOne(idProduct);
        // console.log(product);
        // const product = products.find(product => product.id === Number(idProduct));

        res.render('./admin/productEdit.ejs', {
            stylesheetPath: '/css/admin.css',
            product: product,
            usuarioLogueado: req.session.usuarioLogueado
        });
    },
    paqueteDelete: async(req, res) => {
        try {
            const productId = req.params.idProduct;
            await productServices.deteleProduct(productId);

            return res.redirect('/admin');
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
