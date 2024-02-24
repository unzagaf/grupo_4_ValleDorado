const db = require('../models');
const sequelize = db.Sequelize;

const productService = {
    getAll: async () => {
        try {
            const products = await db.Product.findAll();
            return products.map(product => ({
                id: product.id,
                destination: product.destination,
                start_date: product.start_date,
                finish_date: product.finish_date,
                price: product.price,
                city_depart: product.city_depart,
                group_size: product.group_size
            }));
        } catch (error) {
            throw new Error('Error al obtener los productos de la base de datos: ' + error);
        }
    },
    getOne: async(product_id)=>{
        try {
            const product = await db.Product.findByPk(product_id);
            return product; // Devolver el producto correctamente
        } catch (error) {
            console.error('Error al obtener el producto:', error);
            throw error; // Lanzar el error para manejarlo en el código que llama a getOne
        }
    },
    createProduct: async(data) => {
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
                // Crear registros en la tabla intermedia 'product_includes' para vincular el producto con las inclusiones seleccionadas
                 // Verificar si se encontraron inclusiones seleccionadas
                if (selectedIncludes && selectedIncludes.length > 0) {
                    
                    // Crear registros en la tabla intermedia 'product_includes' para vincular el producto con las inclusiones seleccionadas
                    const productIncludes = selectedIncludes.map(include => ({
                        product_id: createdProduct.id,
                        include_id: include.id
                    }));
                    // console.log('ESTO ES productIncludes en if: '+ productIncludes);

                    // Insertar los registros en la tabla 'product_includes'
                    await db.ProductInclude.bulkCreate(productIncludes);
                }else {
                    console.log('No se encontraron inclusiones seleccionadas.');
                }
            }else {
                console.log('No se han seleccionado inclusiones.');
            }

            return { producto: createdProduct };
        } catch (error) {
            console.error('Error al crear el producto: ', error);
            throw error;
        }
    },
    
    // createProductIncludes: async (productId, incluye) => {
    //     try {
    //       // Crea las inclusiones asociadas al producto
    //       const inclusiones = incluye.map(item => {
    //         return { nombre_inclusion: item, productId: productId }; // Asocia cada inclusión con el ID del producto
    //       });
    //       console.log('ESTO ES INCLUSIONES: '+inclusiones);
    //       await ProductInclude.bulkCreate(inclusiones); // Inserta todas las inclusiones en la base de datos
    //     } catch (error) {
    //       console.error('Error al crear las inclusiones del producto: ', error);
    //       throw error; // Lanza el error para que sea manejado en el controlador
    //     }
    //   }

}
module.exports = productService;
