const db = require('../models');
const Product = require('../models/Product');
const sequelize = db.Sequelize;

const productService = {
    getAll: async () => {
        try {
            const products = await db.Product.findAll({
                include: [{association: "images"}, {association: "includes"}]
            });
            return products;
        } catch (error) {
            throw new Error('Error al obtener los productos de la base de datos: ' + error);
        }
    },
    getOne: async(product_id)=>{
        try {
            const product = await db.Product.findByPk(product_id, {
                include: [{association: "images"}, {association: "includes"}]
            });
            console.log("ESTE ES EL GET ONE: ", product);
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
            if(imagenes && imagenes.length > 0){
                for(let imagen of imagenes){
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
    editProduct: async(productId,data)=>{
        try {
            const existingProduct = await db.Product.findByPk(productId);
            if (!existingProduct) {
                throw new Error('Producto no encontrado');
            }
            await db.Product.update(data,{
                where:{
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
            return { producto: existingProduct };
        } catch (error) {
            console.error('Error al editar el producto:', error);
            throw error;
        }
    },
    deteleProduct: async(productId)=>{
        // busca el producto con el id que llega del controller
       try {
            db.Product.destroy({
                where:{
                    id: productId
                }
            })
            return console.log("Producto: ",productId, " eliminado exitosamente!.");
       } catch (error) {
        console.error('Error al borrar el producto: ', error);
            throw error;
       }
    }
}
module.exports = productService;
