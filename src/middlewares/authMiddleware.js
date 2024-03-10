
const authMiddleware = (req, res, next) => {


    console.log('------------------------------------------------');
    console.log('---------------Middleware auth------------------');
    console.log('------------------------------------------------');
    console.log('usuario: '+ req.session.username);
    console.log('req.session.isLogued: '+ req.session.isLogued);
    console.log('------------------------------------------------');
    console.log('');
    
    if (req.session.isLogued) {
        next();
    } else {
        console.log('Redirecting to login');
        res.send('Esta pagina es solo para logueados');
        // res.redirect('/users/login');
    }
};

module.exports = authMiddleware;
