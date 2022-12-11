let express = require('express');
let productoController = require('../controllers/productoController');
let homeController = require('../controllers/homeController');
let router = express.Router();

//Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const autenticadorMiddleware = require('../middlewares/autenticadorMiddleware');


// Productos Home
router.get('/', productoController.index);


// Crear Productos
router.get('/crear', autenticadorMiddleware, productoController.crear);
router.post('/detalle', uploadFile.single('filename'), productoController.store);


// Detalle Producto
router.get('/detalle/:id', productoController.detalleProducto);


//Editar Productos
router.get('/edit/:id', autenticadorMiddleware, productoController.editar);
router.put('/edit/:id', uploadFile.single('filename'), productoController.update);

//Eliminar Productos
router.delete('/delete/:id', autenticadorMiddleware, productoController.eliminar);


module.exports = router;
