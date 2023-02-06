// ************ Require's ************
let ejs = require('ejs');
const express = require('express');
const cookies = require('cookie-parser');
// ********** express () **********
const app = express();
const methodOverride =  require('method-override'); // Para poder usar los métodos PUT y DELETE

// ************ Middlewares ************
const path = require('path');
const publicPath = path.join(__dirname, '/public');
app.use(express.static(__dirname + '/public')); // Necesario para los archivos estáticos en el folder /public

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method')); // Para poder pisar el method="POST" en el formulario por PUT y DELETE

// ************ Template Engine ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));

// ************ Implementación Session ************

const session = require('express-session');
const userLoggedMiddleware = require("./src/middlewares/userLoggedMiddleware")
app.use(session({
  secret: "Nuestro mensaje secreto",
   resave: false,
   saveUninitialized: false,
}));
// ************ Implementación cookie ************
app.use(cookies());
app.use(userLoggedMiddleware);
// ************ Sistema de Rutas ************
const rutasHome = require('./src/routers/rutaHome.js');
const rutasProducto = require('./src//routers/rutaProducto.js');
const rutasCarrito = require('./src//routers/rutaCarrito.js');
const rutasUsuario = require('./src//routers/rutaUsuario.js');
const rutasError = require('./src//routers/rutaError404.js')
const moviesRouter = require('./src//routers/moviesRouter.js')
const apiUsuarioRouter = require('./src//routers/usuariosApi.js')

app.use('/', rutasHome);
app.use('/productos', rutasProducto);
app.use('/usuario', rutasUsuario);
app.use('/carrito', rutasCarrito);
app.use('/error', rutasError);
app.use('/movies', moviesRouter);
app.use('/usuariosApi', apiUsuarioRouter);


// ************ Creando servidor ************
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Servidor Funcionando')
});


//Pagina no encontrada
//app.use ( async (req, res, next) => {
  //  res.status(404).render('error404');
//})

// ************ Modulo Exportado ************
module.exports = app;
