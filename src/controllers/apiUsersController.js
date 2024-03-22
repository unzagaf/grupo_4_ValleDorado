const express = require('express');
const userServices = require('../dataBase/services/userServices');


const apiUserController = {
    list: async (req, res) => {

        try {
            const page = parseInt(req.query.page) || 1;
            const pageSize = 5;

            const { totalUsers, totalPages, userList, hasNext } = await userServices.getAll(page, pageSize);

            // establecer el encabezado de la API
            res.setHeader('Content-Type', 'application/json');

            //definimos el objeto response
            const response = {}

            response.info = {
                "totalUsers": totalUsers,
                "totalPages": totalPages,
                "count": userList.length,
                "pages": page,
                "next": hasNext ? `?page=${page + 1}` : null,
                "prev": page > 1 ? `?page=${page - 1}` : null
            }

            response.results = userList

            res.status(200).json(response);

        } catch (error) {
            res.status(500).json({ error: `Error al obtener los usuarios de la base de datos: ${error.message}` });
        }
    },

    detail: (req, res) => {
        res.send('muestro lista de users')
    },


}

module.exports = apiUserController