const express = require('express');
const userServices = require('../dataBase/services/userServices');


const apiUserController = {
  list: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const pageSize = 5; // Cambiamos el tamaño de página a 5

      // Suponiendo que userServices.getAll ya maneja la lógica para hasNext
      const { totalUsers, totalPages, userList, hasNext } = await userServices.getAll(page, pageSize);

      // Establecer el encabezado de la API
      res.setHeader('Content-Type', 'application/json');

      // Declaramos el objeto respuesta
      const response = {};

      // Construcción de la respuesta
      response.info = {
        count: totalUsers,
        totalPages: totalPages,
        actualPage: page,
        next: hasNext ? `?page=${page + 1}` : null,
        previous: page > 1 ? `?page=${page - 1}` : null
      }

      response.results = userList.map(user => ({
        id: user.id,
        username: user.username,
        name: user.user.name,
        surname: user.user.surname,
        email: user.email,
        detail: `/api/users/${user.id}` // URL para obtener el detalle del usuario
      }));

      // Enviar respuesta
      res.status(200).json(response);

    } catch (error) {
      console.error(error); // Buena práctica: registrar el error en el servidor
      res.status(500).json({ error: `Error al obtener los usuarios de la base de datos: ${error.message}` });
    }
  },

  detail: async (req, res) => {
    try {
      const id = req.params.id;

      // Obtener el usuario por su id
      const user = await userServices.getOneById(id);
      console.log(user);

      // Si no se encuentra el usuario
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      //se define el objeto response
      const response = {}

      response.info = {
        "actual": id,
        "next": `/api/users/${id + 1}`,
        "prev": id > 1 ? `/api/users/${id - 1}` : "No hay cuenta anterior",
        "list": `/api/users`
      }

      // Construir objeto literal del usuario con campos permitidos
      response.results = {
        'id': user.id,
        'username': user.username,
        'email': user.email,
        'avatar': user.avatar?  '/img/users/' + user.avatar : 'sin imagen de perfil' ,
        'name': user.user.name,
        'surname': user.user.surname,
        'dni':user.user.dni
      }

      // Enviar respuesta
      res.status(200).json(response)

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: `Error al obtener el usuario: ${error.message}` });
    }
  },
}

module.exports = apiUserController