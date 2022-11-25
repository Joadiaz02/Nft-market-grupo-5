const fs = require('fs');
const path=require('path');
const bcrypt = require('bcryptjs');

const { validationResult } = require('express-validator');

const usuariosFilePath = path.join(__dirname, '../data/users.json');
let usuariosJson = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

const registroController={
    registro: (req, res) =>{
        res.render('../views/usuarios/registro');
    },
    login: (req, res) =>{
        res.render('../views/usuarios/login');
    },
    /*processRegister: (req, res) =>
    {
        const resultValidation = validationReuslt(req);
        if(resultValidation.errors.length > 0){
            return res.render('../views/usuarios/registro', {
                errors: resultValidation.mapped()})
            }
        }
    ,*/
    store: (req, res) => { 
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0){
            return res.render('../views/usuarios/registro', {
                errors: resultValidation.mapped()})
                /*return res.send(req.body)*/
                /*return res.send(resultValidation.mapped())*/
            }else{

        let nuevoUsuario = {
        id: usuariosJson[usuariosJson.length - 1].id + 1,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        usuario: req.body.usuario,
        mail: req.body.mail,
        nacimiento: req.body.nacimiento,
        pais_residencia: req.body.pais_residencia,
        intereses: req.body.intereses,
        foto: req.file.filename,
        contraseña: bcrypt.hashSync(req.body.contrasena, 10)
    }
    usuariosJson.push(nuevoUsuario);
    fs.writeFileSync(usuariosFilePath, JSON.stringify(usuariosJson, null, " "));
    res.redirect('/usuario/registro');}


}
}

module.exports = registroController;