let express = require('express');
let usuarioController = require('../controllers/usuarioController');
let router = express.Router();

router.get('/login', usuarioController.login);
router.get('/registro', usuarioController.registro);

module.exports = router;
