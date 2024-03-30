// const express = require('express');
// const path = require('path');
// const productServices = require('../dataBase/services/productServices');



// const apiProductsController = {

//     list: async (req, res) => {
//         try{

//             const listProducts = await productServices.getAll();
//             // establecer el encabezado de la API
//             res.setHeader('content-Type', 'application/json');

//             const page= parseInt(req.query.page) ||1;

//             //se define el objeto response
//             const response={}
            
//             response.info={
//                 "count": listProducts.length,
//                 "pages":page,
//                 "next":listProducts.length > 5 ? `pages=${pages +1}`: null,
//                 "prev": pag > 1? `?page=${page - 1}`: null
//             } 

//             response.results=listProducts

//             res.status(200).json(response)
//         }catch (error) {
//             // Manejar el error enviando una respuesta HTTP
//             res.status(500).json({ error: 'Error al obtener los productos de la base de datos: ' + error.message });
//         }
//     },

//     details: (req, res) => {
//         res.send('muestro lista de products')
//     },


// }

// module.exports = apiProductsController