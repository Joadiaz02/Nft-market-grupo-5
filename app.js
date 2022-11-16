// ************ Require's ************
let ejs = require('ejs');
const express = require('express');

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
app.set('views', path.join(__dirname, '/views'));


// ************ Sistema de Rutas ************
const rutasHome = require('./routers/rutaHome.js');
const rutasProducto = require('./routers/rutaProducto.js');
const rutasCarrito = require('./routers/rutaCarrito.js');
const rutasUsuario = require('./routers/rutaUsuario.js');

app.use('/', rutasHome);
app.use('/producto', rutasProducto);
app.use('/usuario', rutasUsuario);
app.use('/carrito', rutasCarrito);



// ************ Creando servidor ************
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Servidor Funcionando')
});


//Pagina no encontrada


// ************ Modulo Exportado ************
module.exports = app;
