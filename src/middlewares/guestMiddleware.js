
const guestMiddleware = (req, res, next) => {
    if (req.session.usuarioLogueado != undefined) {
        // REDIRIGE AL HOME
        console.log('Ya estas registrado, ve a home');
        res.redirect('/');
    } else {
        next();
    }
}
module.exports = guestMiddleware;