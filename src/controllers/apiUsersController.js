const express = require('express');
const userServices = require('../dataBase/services/userServices');


const apiUserController = {
    list: async (req, res) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const pageSize = 5; // Cambiamos el tamaño de página a 5

            // Suponiendo que userServices.getAll ya maneja la lógica para hasNext y hasPrevious
            const { totalUsers, totalPages, userList, hasNext, hasPrevious } = await userServices.getAll(page, pageSize);

            // Establecer el encabezado de la API
            res.setHeader('Content-Type', 'application/json');

            // Construcción de la respuesta
            const response = {
                count: totalUsers,
                users: userList.map(user => ({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    detail: `/api/users/${user.id}` // URL para obtener el detalle del usuario
                }))
            };

            // Asumiendo que req.baseUrl te da la ruta base correcta, por ejemplo "/api/users"
            // Si no es así, ajusta esta parte según sea necesario.
            const baseUrl = req.baseUrl;

            // Calcular las URLs para la paginación
            response.next = hasNext ? `${baseUrl}?page=${page + 1}` : null;
            response.previous = page > 1 ? `${baseUrl}?page=${page - 1}` : null;

            // Enviar respuesta
            res.status(200).json(response);
        } catch (error) {
            console.error(error); // Buena práctica: registrar el error en el servidor
            res.status(500).json({ error: `Error al obtener los usuarios de la base de datos: ${error.message}` });
        }
    
    },



    detail: async (req, res) => {
        try {
            const userId = req.params.id;

            // Obtener el usuario por su id
            const user = await userServices.getOneById(userId);

            // Si no se encuentra el usuario
            if (!user) {
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }

            // Construir objeto literal del usuario con campos permitidos
            const userDetail = {
                id: user.id,
                name: user.name,
                email: user.email,
                avatarUrl: user.avatar ? `/api/users/avatar/${user.id}` : null // URL de la imagen de perfil si está disponible
                // Agrega más campos según sea necesario
            };

            // Enviar respuesta
            res.status(200).json(userDetail);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: `Error al obtener el usuario: ${error.message}` });
        }
    },



}

module.exports = apiUserController