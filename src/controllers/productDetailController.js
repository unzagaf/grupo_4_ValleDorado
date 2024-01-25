const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const obtenerIcono = (opcion) => {
  // Lógica para asociar opciones con iconos
  // Puedes personalizar esto según tus necesidades
  const iconos = {
    'Asistencia al Viajero':'fa-user-doctor',
    'Hoteles 5 estrellas': 'fa-hotel',
    'Coordinador y guias locales': 'fa-user',
    'Régimen de comidas todo incluido': 'fa-utensils',
    'Excursiones según programa': 'fa-map-location-dot',
    'Traslados de ingreso y egreso': 'fa-bus',
  };

  return iconos[opcion] || 'fa-question'; // 'fa-question' para opciones sin icono asociado
};

const productDetailController = {
    index:(req, res) => {
        const productId = req.params.id;
        const product = products.find(product => product.id_producto === Number(productId));
        // Asocia opciones con iconos
        const incluyeConIconos = product.incluye.map(opcion => ({
          opcion: opcion,
          icono: obtenerIcono(opcion),
        }));
        res.render('./products/productDetail.ejs',
         { stylesheetPath: '/css/productDetail.css',
        //  producto especifico
          product: product,
        products: products,
        usuarioLogueado: req.session.usuarioLogueado,
        incluyeConIconos: incluyeConIconos, });  //todos los productos
    }
}



module.exports = productDetailController;