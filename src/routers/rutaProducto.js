let express = require('express');
let productoController = require('../controllers/productoController');
let homeController = require('../controllers/homeController');
let router = express.Router();

//Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const autenticadorMiddleware = require('../middlewares/autenticadorMiddleware');


// Productos Home
router.get('/', productoController.indexsql);


// Crear Productos
router.get('/crear', autenticadorMiddleware, productoController.crearsql);
router.post('/detalle', uploadFile.single('filename'), productoController.storesql);


// Detalle Producto
router.get('/detalle/:id', productoController.detalleProductoSql);


//Editar Productos
router.get('/edit/:id', autenticadorMiddleware, productoController.editarSql);
router.put('/edit/:id', uploadFile.single('filename'), productoController.updateSql);

//Eliminar Productos
router.delete('/delete/:id', autenticadorMiddleware, productoController.eliminarSql);


module.exports = router;
