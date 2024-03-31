const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

const productServices = require('../dataBase/services/productServices.js');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const obtenerIcono = (opcion) => {
  // Lógica para asociar opciones con iconos
  // Puedes personalizar esto según tus necesidades
  const iconos = {
    'Asistencia al Viajero': 'fa-user-doctor',
    'Hoteles 5 estrellas': 'fa-hotel',
    'Coordinador y guias locales': 'fa-user',
    'Régimen de comidas todo incluido': 'fa-utensils',
    'Excursiones según programa': 'fa-map-location-dot',
    'Traslados de ingreso y egreso': 'fa-bus',
  };

  return iconos[opcion] || 'fa-question'; // 'fa-question' para opciones sin icono asociado
};

const productDetailController = {
  index: async (req, res) => {
    try {
      const productId = req.params.id;

      let product = await productServices.getOne(productId)

      const products = await productServices.getAll()

      // Asocia opciones con iconos
      const incluyeConIconos = product.includes.map(opcion => ({
        opcion: opcion.include, // Asumiendo que el include de lo que incluye está en la propiedad 'include'
        icono: obtenerIcono(opcion.include),
      }));

      res.render('./products/productDetail.ejs', {
        product: product,
        products: products.products,
        usuarioLogueado: req.session.logined,
        incluyeConIconos: incluyeConIconos
      });
    } catch {
      error => {
        console.error('Error al obtener el producto:', error);
        // Manejar el error adecuadamente
      };
    }
  }
}

module.exports = productDetailController;