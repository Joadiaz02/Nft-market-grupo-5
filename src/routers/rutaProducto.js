let express = require('express');
let productoController = require('../controllers/productoController');
let homeController = require('../controllers/homeController');
let router = express.Router();


const uploadFile = require('../middlewares/multerMiddleware');


// Productos Home
router.get('/', productoController.index);


// Crear Productos
router.get('/crear', productoController.crear);
router.post('/detalle', uploadFile.single("filename"), productoController.store);


// Detalle Producto
router.get('/detalle/:id', productoController.detalleProducto);


//Editar Productos
router.get('/edit/:id', productoController.editar);
router.put('/edit/:id', uploadFile.single('filename'), productoController.update);

//Eliminar Productos
router.delete('/delete/:id', productoController.eliminar);


module.exports = router;
