let express = require('express');
let usuarioController = require('../controllers/usuarioController');
let router = express.Router();

const uploadFile = require('../middlewares/multerMiddleware');

//validation
const { body } = require('express-validator');

const validations = [
    body('nombre').notEmpty().withMessage('Tienes que escribir tu nombre'),
    body('apellido').notEmpty().withMessage('Tienes que escribir tu apellido'),
    body('usuario').notEmpty().withMessage('Tienes que escribir un usuario'),
    body('mail').notEmpty().withMessage('Tienes que escribir un correo electrónico'),
    body('nacimiento').notEmpty().withMessage('Tenes que indicar tu fecha de nacimiento'),
    body('pais_residencia').notEmpty().withMessage('Tienes elegir un país'),
    body('password').notEmpty().withMessage('Tienes colocar una contraseña'),
    body('confirmar_contrasena').notEmpty().withMessage('Tienes que confirmar la contraseña')
];


//Rutas
router.get('/login', usuarioController.login);

router.post('/login', validations,uploadFile.single("filename"), usuarioController.loginProcess)

//Crear Usuario
router.get('/registro', usuarioController.registro);
router.post('/detalle', uploadFile.single("filename"), validations, usuarioController.store);

module.exports = router;
