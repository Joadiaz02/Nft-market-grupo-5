let express = require('express');
let carritoController = require('../controllers/carritoController');
let router = express.Router();

//Middlewares
const autenticadorMiddleware = require('../middlewares/autenticadorMiddleware');


router.get('/', autenticadorMiddleware, carritoController.index);

module.exports = router;
