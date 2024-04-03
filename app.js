const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const authMiddleware = require('./src/middlewares/authMiddleware');
const guestMiddleware = require('./src/middlewares/guestMiddleware');
const recordarMiddleware = require('./src/middlewares/recordar.Middleware.js')

const apiProductsRouter = require('./src/router/apiProducts');
const apiUsersRouter = require('./src/router/apiUsers');


// *** Middlewares *** 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
  secret: 'Mensaje Secreto',
  resave: false,
  saveUninitialized: false
}));

//Con esto se pasa el objeto session a TODAS las vistas
//Es un Middleware
app.use(function (req, res, next) {
  res.locals.session = req.session;
  next();
});

app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(recordarMiddleware);


//*** Carpeta PUBLIC *** 
const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));

//*** Rutas Importadas***
const rutaHome = require('./src/router/home.js');
const rutaProductDetail = require('./src/router/productDetail.js');
const rutaProductCart = require('./src/router/productCart.js');

const rutaAdmin = require('./src/router/admin.js');
const rutaUser = require('./src/router/users.js');



// *** Motor de Plantilla EJS *** 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// *** Configuracion de los Cors para React***
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Reemplaza esta URL con la URL de tu aplicación React
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

// *** Seccion HOME *** 
app.use('/', rutaHome);


// *** Seccion PRODUCTS ***
app.use('/productDetail', rutaProductDetail);
app.use('/productCart', rutaProductCart);

// *** Seccion USERS ***

app.use('/admin', rutaAdmin);
app.use('/users', rutaUser);

//** Seccion APIs*/
app.use('/api/products', apiProductsRouter);
app.use('/api/users', apiUsersRouter);




