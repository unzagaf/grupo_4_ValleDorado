const db = require('../models');
const Product = require('../models/Product');
const sequelize = db.Sequelize;

const productService = {

  getAll: async (page = 1, pageSize = 5) => {

    try {
      //Calcuo de cuantos productios saltarse segun la hoja del pedido
      const offset = (page - 1) * pageSize;

      // Metodo sequelize para contar todos los registros
      const productsCount = await db.Product.count();


      //Metodo sequelize para tomar todos los registros
      const allProducts = await db.Product.findAll(
        {
          include: [{ association: "images" }, { association: "includes" }],
          offset: offset,
          limit: pageSize
        }
      );

      // Calcula si hay más cuentas después de la página actual
      //Con ceil nos da la parte entera del resultado de la division
      const totalPages = Math.ceil(productsCount / pageSize);
      const hasNext = page < totalPages;

      // Devuelve tanto las cuentas de la página actual como el indicador hasNext    
      return { productsCount, totalPages, products: allProducts, hasNext }


    } catch (error) {
      throw new Error('Error al obtener los productos de la base de datos: ' + error);
    }
  },
  getOne: async (product_id) => {
    try {
      const product = await db.Product.findByPk(product_id, {
        include: [{ association: "images" }, { association: "includes" }]
      });

      return product; // Devolver el producto correctamente

    } catch (error) {
      console.error('Error al obtener el producto:', error);
      throw error; // Lanzar el error para manejarlo en el código que llama a getOne
    }
  },
  createProduct: async (data) => {
    try {
      // Crear el producto en la tabla 'products'
      const createdProduct = await db.Product.create(data);

      // Obtener las inclusiones seleccionadas del cuerpo de la solicitud
      const includes = data.incluye;

      // Verificar si se han seleccionado inclusiones
      if (includes && includes.length > 0) {
        // Buscar las inclusiones correspondientes en la tabla 'includes'
        const selectedIncludes = await db.Include.findAll({
          where: {
            include: includes
          }
        });

        // Verificar si se encontraron inclusiones seleccionadas
        if (selectedIncludes && selectedIncludes.length > 0) {
          await createdProduct.addIncludes(selectedIncludes);
        } else {
          console.log('No se encontraron inclusiones seleccionadas.');
        }
      } else {
        console.log('No se han seleccionado inclusiones.');
      }
      // solicitamos las imagenes que vienen de data y las cargamos en la tabla image
      const imagenes = data.imagenes_producto;
      if (imagenes && imagenes.length > 0) {
        for (let imagen of imagenes) {
          await db.Image.create({
            route: imagen,
            product_id: createdProduct.id
          });
        }
      }
      return { producto: createdProduct };
    } catch (error) {
      console.error('Error al crear el producto: ', error);
      throw error;
    }
  },
  editProduct: async (productId, data) => {
    try {
      const existingProduct = await db.Product.findByPk(productId);
      if (!existingProduct) {
        throw new Error('Producto no encontrado');
      }
      await db.Product.update(data, {
        where: {
          id: productId
        }
      });
      // Verificar si se han enviado inclusiones en los nuevos datos
      if (data.incluye) {
        let inclusionIds = [];
        // Obtener los identificadores de las inclusiones correspondientes a los nombres enviados
        for (const includeName of data.incluye) {
          const include = await db.Include.findOne({ where: { include: includeName } });
          if (include) {
            inclusionIds.push(include.id);
          }
        }
        // Actualizar las inclusiones del producto con los nuevos identificadores
        await existingProduct.setIncludes(inclusionIds);
      } else {
        // Si no se han enviado inclusiones, eliminar todas las asociaciones de inclusiones del producto
        await existingProduct.setIncludes([]);
      }
      // Verificar si se han enviado nuevas imágenes
      if (data.imagenes_producto) {
        // Guardar las nuevas imágenes en el sistema de archivos o en el servidor de almacenamiento en la nube
        const newImagePaths = [];
        for (const image of data.imagenes_producto) {
          const newPath = await saveImage(image); // Implementa esta función según tus necesidades
          newImagePaths.push(newPath);
        }
        // Actualizar las referencias de las imágenes en la base de datos
        existingProduct.images = newImagePaths;
        await existingProduct.save();
      }
      return { producto: existingProduct };
    } catch (error) {
      console.error('Error al editar el producto:', error);
      throw error;
    }
  },
  deteleProduct: async (productId) => {
    // busca el producto con el id que llega del controller
    try {
      db.Product.destroy({
        where: {
          id: productId
        }
      })
      return console.log("Producto: ", productId, " eliminado exitosamente!.");
    } catch (error) {
      console.error('Error al borrar el producto: ', error);
      throw error;
    }
  }
}
module.exports = productService;
