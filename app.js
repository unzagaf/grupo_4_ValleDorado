const express = require ('express');
const path = require ('path');
const app = express();
const methodOverride = require('method-override');

// *** Middlewares ***
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// *** Dependencias ***
app.use(methodOverride('_method'));

//*** RUTAS ***
const rutaHome = require('./src/router/home.js');
const rutaProductDetail = require('./src/router/productDetail.js');
const rutaProductCart = require('./src/router/productCart.js');
//const rutaLogin= require('./src/router/login.js');
// const rutaRegister= require('./src/router/register.js');

const rutaAdmin= require('./src/router/admin.js');
const rutaUser= require('./src/router/users.js');

//*** Carpeta PUBLIC ***
const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));

// *** Motor de Plantilla EJS ***
app.set('view engine', 'ejs');
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));


app.listen(3000,()=> {
    console.log("Servidor corriendo en el puerto 3000");
});

// *** Seccion HOME *** 
app.use ('/', rutaHome);

// *** Seccion PRODUCTS ***
app.use ('/productDetail', rutaProductDetail);
app.use ('/productCart', rutaProductCart);

// Seccion USER
// app.use ('/login', rutaLogin);
// app.use ('/register', rutaRegister);
app.use('/admin', rutaAdmin);

app.use('/users',rutaUser);



