const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarioApiController')


/*const fs = require("fs");
const path=require('path');
const db = require('../database/models');
const usuario = require('../database/models/Usuario');
const usuariosFile = path.join(__dirname, '../data/users.json');
let allUsuarios = JSON.parse(fs.readFileSync(usuariosFile, 'utf-8'));
let todosUsurios = db.usuario.findAll()*/

//Rutas
router.get('/', usuariosController.list)
router.get('/detalle/:id', usuariosController.detail)



module.exports = router; 