
const guestMiddleware = (req, res, next) => {
    if (!req.session.user) {
        
        next();
    } else {
        
        res.redirect('/');///profile
    }
};

module.exports = guestMiddleware;