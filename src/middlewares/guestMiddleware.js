
const guestMiddleware = (req, res, next) => {
    if (!req.session.user) {
        
        next();
    } else {
        
        res.redirect('/');/// DEBE ENVIAR A LA VISTA PROFILE
    }
};

module.exports = guestMiddleware;