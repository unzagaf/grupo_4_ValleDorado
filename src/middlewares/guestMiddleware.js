
const guestMiddleware = (req, res, next) => {
    if (req.session.usuarioLogueado == undefined) {
        next();
    } else {
        // REDIRIGE AL HOME
        console.log('Vas para home');
        res.redirect('/');
    }
}
module.exports = guestMiddleware;