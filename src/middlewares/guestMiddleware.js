
const guestMiddleware = (req, res, next) => {
    if (req.session.isLogued) {
        // REDIRIGE AL HOME
        console.log('Ya estas registrado, ve a home');
        res.redirect('/');
    } else {
        next();
    }
}
module.exports = guestMiddleware;