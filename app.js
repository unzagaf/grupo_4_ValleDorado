const express = require ('express');
const path = require ('path');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');

// *** Middlewares *** 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
    secret: 'Mensaje Secreto',
    resave: false,
    saveUninitialized: false
  }));
  

// *** Dependencias *** 
app.use(methodOverride('_method'));

//*** Carpeta PUBLIC *** 
const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));

//*** RUTAS ***
const rutaHome = require('./src/router/home.js');
const rutaProductDetail = require('./src/router/productDetail.js');
const rutaProductCart = require('./src/router/productCart.js');

const rutaAdmin= require('./src/router/admin.js');
const rutaUser= require('./src/router/users.js');



// *** Motor de Plantilla EJS *** 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.listen(3000,()=> {
    console.log("Servidor corriendo en el puerto 3000");
});

// *** Seccion HOME *** 
app.use ('/', rutaHome);

// *** Seccion PRODUCTS ***
app.use ('/productDetail', rutaProductDetail);
app.use ('/productCart', rutaProductCart);

// *** Seccion USERS ***

app.use('/admin', rutaAdmin);

app.use('/users',rutaUser);



