const recordarMiddleware = (req, res, next) => {
    // Verificar si existe la cookie "recordar" y no hay una sesión de usuario activa
    if (req.cookies.recordar && !req.session.user) {
        const userRegistrado = arrayUsers.find((user) => user.email === req.cookies.recordar);

        if (userRegistrado) {
            // Establecer la sesión del usuario
            req.session.user = userRegistrado;

            console.log('Usuario autenticado desde la cookie:', userRegistrado);
        }
    }

    // Ejecutar el siguiente middleware o ruta
    next();
};

module.exports = recordarMiddleware;
