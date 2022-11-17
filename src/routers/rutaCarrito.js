let express = require('express');
let carritoController = require('../controllers/carritoController');
let router = express.Router();

router.get('/', carritoController.index);

module.exports = router;
