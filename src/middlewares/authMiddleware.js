
const authMiddleware = (req, res, next) => {
    console.log('usuario: '+ req.session.usuarioLogueado);
    if (req.session.usuarioLogueado != undefined) {
        next();
    } else {
        console.log('Redirecting to login');
        res.send('Esta pagina es solo para logueados');
        // res.redirect('/users/login');
    }
};

module.exports = authMiddleware;
