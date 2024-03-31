const productServices = require('../dataBase/services/productServices');



const apiProductsController = {

  list: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;

      const { productsCount, totalPages, products, hasNext } = await productServices.getAll(page, 5);
      // establecer el encabezado de la API
      res.setHeader('content-Type', 'application/json');

      //se define el objeto response
      const response = {}

      response.info = {
        "count": productsCount,
        "pages": totalPages,
        "actualPage": page,
        "next": hasNext ? `?page=${page + 1}` : null,
        "prev": page > 1 ? `?page=${page - 1}` : null
      }

      response.results = products.map((element) => {

        return {
          "id": element.id,
          "destination": element.destination,
          "city_depart": element.city_depart,
          "start_date": element.start_date,
          "finish_date": element.finish_date,
          "price": element.price,
          "images": element.images[0].route,
          "details": "/api/products/" + element.id
        }
      }
      )

      res.status(200).json(response)

    } catch (error) {
      // Manejar el error enviando una respuesta HTTP
      res.status(500).json({ error: 'Error al obtener los productos de la base de datos: ' + error.message });
    }
  },

  details: async (req, res) => {
    try {

      const id = req.params.id;

      const product = await productServices.getOne(id);

      // establecer el encabezado de la API
      res.setHeader('content-Type', 'application/json');

      //se define el objeto response
      const response = {}

      response.info = {
        "actual": id,
        "list": `/api/products`
      }
      
      response.results = {
        "id": product.id,
        "destination": product.destination,
        "start_date": product.start_date,
        "finish_date": product.finish_date,
        "price": product.price,
        "city_depart": product.city_depart,
        "group_size": product.group_size,
      }
      
      const imagesArray = []
      product.images.map(image => {
        imagesArray.push(image.route)
      })
      response.results.images = imagesArray;

      const includesArray = []
      product.includes.map ( element => {
        includesArray.push(element.include)
      })
      response.results.includes = includesArray;


      res.status(200).json(response)

    } catch (error) {
      // Manejar el error enviando una respuesta HTTP
      res.status(500).json({ error: 'Error al obtener los productos de la base de datos: ' + error.message });
    }
  }

}

module.exports = apiProductsController