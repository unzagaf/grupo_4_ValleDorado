
const authMiddleware = (req, res, next) => {
    if (req.session.user) {
      
        next();
    } else {

        console.log('Redirecting to login');
        
        res.redirect('/users/login');
    }
};

module.exports = authMiddleware;
