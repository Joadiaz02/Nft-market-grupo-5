let express = require('express');
let usuarioController = require('../controllers/usuarioController');
let router = express.Router();

//Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const autenticadorMiddleware = require('../middlewares/autenticadorMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
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
router.get('/login', validations, guestMiddleware, usuarioController.login);
router.post('/login', validations,uploadFile.single("filename"), usuarioController.loginProcess)

//Crear Usuario
router.get('/registro', guestMiddleware, usuarioController.registro);
router.post('/detalle', uploadFile.single("filename"), validations, usuarioController.store);


router.get('/profile/', authMiddleware, usuarioController.profile);
router.get('/logout/',  usuarioController.logout);
module.exports = router;
