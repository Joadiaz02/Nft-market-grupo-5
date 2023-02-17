const fs = require('fs');
const path=require('path');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const user = require("../models/user");
const db = require('../database/models');
const usuario = require('../database/models/Usuario');
const usuariosFilePath = path.join(__dirname, '../data/users.json');
let usuariosJson = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

const registroController={
    registro: (req, res) =>{
        
        res.render('../views/usuarios/registro');
    },
    login: (req, res) =>{
        res.render('../views/usuarios/login');
    },

    loginsql:(req,res) =>{
        db.usuario.findAll()
        .then(function(usuario){
            console.log(req.session)
            res.render('../views/usuarios/login', {usuario});
        })
    },

    loginProcess: (req,res)=>{
      let userToLogin = user.findByField("mail", req.body.mail);

      if (userToLogin){
        let correctPassword = bcrypt.compareSync(req.body.password, userToLogin.password);
        if(correctPassword){
            delete userToLogin.password;
            req.session.userLogged = userToLogin;
            if(req.body.remember_usuario){
               res.cookie("userEmail",req.body.mail,{maxAge:(1000*60)*2})
            }
           // return res.render('../views/usuarios/profile');
           return res.redirect("profile")
        }
      }
      return res.render('../views/usuarios/login',{
        errors: {
            mail:{
                msg:"El mail ingresado no se encuentra registrado"
            }
        }
      });
    },
    loginProcessSql: (req,res)=>{
       // const error = validationResult(req);

      //if (!error.isEmpty()) {
        //return res.render('../views/usuarios/login', { errors: error.mapped() });
     // }
     const errorLogin = validationResult(req);
  
        if (errorLogin.errors.length>0) {
          return res.render('../views/usuarios/login', {
            errors: errorLogin.mapped(),
            oldData: req.body
          });
        }else{
        let userToLogin =  db.usuario.findOne({
            where: {
                correo_usuario : req.body.correo_usuario,
                contrasena_usuario: req.body.contrasena_usuario
            }
        })

        //if (userToLogin){
          //let correctPassword = bcrypt.compareSync(req.body.contrasena_usuario, userToLogin.contrasena_usuario);
          if(userToLogin){
              delete userToLogin.contrasena_usuario;
              req.session.userLogged = userToLogin;
              if(req.body.remember_usuario){
                 res.cookie("userEmail",req.body.correo_usuario,{maxAge:(1000*60)*2})
              }
             // return res.render('../views/usuarios/profile');
             return res.redirect("profile")
          //}
        }
    }
        return res.render('../views/usuarios/login',{
          //errors: {
            //correo_usuario:{
              //    msg:"El mail ingresado no se encuentra registrado"
              //}
         // }
        });
    },
     loginProcessSql2: function(req,res){
        
        db.usuario.findOne({
            where: {
                correo_usuario : req.body.correo_usuario,
                contrasena_usuario: req.body.correo_usuario
            }
        })
        return res.redirect("profile")
     },

    profile: (req,res)=>{
        
        return res.render('../views/usuarios/profile', { user: req.session.userLogged });
        
        
            
          
    },

    logout: (req,res)=>{
        res.clearCookie("userEmail");
        req.session.destroy();
       
        
      return res.redirect("/")
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
        password: bcrypt.hashSync(req.body.password, 10)
    }
    usuariosJson.push(nuevoUsuario);
    fs.writeFileSync(usuariosFilePath, JSON.stringify(usuariosJson, null, " "));
   return res.render('../views/usuarios/login')
    //res.redirect('/usuario/login')
    ;}


},
crearsql: (req,res)=>{
    db.usuario.findAll()
    .then(function(usuario){
        res.render('../views/usuarios/registro', {usuario});
    })
},
storeSql:  (req, res)=>{
    
        const errorRegistro = validationResult(req);
  
        if (errorRegistro.errors.length>0) {
          return res.render('../views/usuarios/registro', {
            errors: errorRegistro.mapped(),
            oldData: req.body
          });
        } else {
 db.usuario.create({
    nombre_usuario: req.body.nombre_usuario,
        apellido_usuario: req.body.apellido_usuario,
        cuenta_usuario: req.body.cuenta_usuario,
        correo_usuario: req.body.correo_usuario,
        fecha_nacimiento: req.body.fecha_nacimiento,
        residencia_usuario: req.body.residencia_usuario,
        id_categoria_preferida: req.body.id_categoria_preferida,
        imagen_perfil: req.file.filename,
        contacto_usuario: req.body.contacto_usuario,
        contrasena_usuario: bcrypt.hashSync(req.body.contrasena_usuario, 10)
})

    res.redirect('/usuario/login')
}
/*res.render('../views/usuarios/login')*/

}

}


module.exports = registroController;