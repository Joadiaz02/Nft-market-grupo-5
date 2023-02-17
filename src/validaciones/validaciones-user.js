const { body } = require('express-validator');
const db = require("../database/models")

module.exports = {
    registerValidation: [
        body("nombre_usuario")
            .notEmpty()
            .withMessage("Debes introducir un nombre")
            .bail()
            .isLength({min: 3, max: 20})
            .withMessage("El nombre requiere entre 3 y 20 caracteres"),
            body("cuenta_usuario")
            .notEmpty()
            .withMessage("Debes introducir un nombre de cuenta")
            .bail()
            .isLength({min: 3, max: 20})
            .withMessage("El nombre de la cuenta requiere entre 3 y 20 caracteres"),
            body("contrasena_usuario")
            .notEmpty()
            .withMessage("Debes introducir una contraseña")
            .bail()
            .isLength({min: 6, max: 20})
            .withMessage("la contraseña requiere entre 6 y 20 caracteres"),
            body("contacto_usuario")
            .notEmpty()
            .withMessage("Debes introducir un contacto")
            .bail()
            .isLength({min: 3, max: 20}),
            body("apellido_usuario")
            .notEmpty()
            .withMessage("Debes introducir un apellido")
            .bail()
            .isLength({min: 3, max: 40}),
        body("correo_usuario")
            .notEmpty()
            .withMessage("Debes colocar un email")
            .isEmail()
            .withMessage("El email no es valido")
            .custom(function(value,{req}){
                return db.usuario.findOne({
                    where:{
                        correo_usuario: value
                    }
                }).then((correo_usuario) =>{
                    if(correo_usuario){
                        return Promise.reject("Email ya registrado")
                    }
                });           
            })
            .withMessage("EMAIL ya registrado"),
    ]
    ,
    loginValidation: [
        body("correo_usuario")
        .notEmpty()
        .withMessage("El email ingresado no se encuentra registrado"),
        body("contrasena_usuario")
        .notEmpty()
        .withMessage("contraseña no valida")
    ]
}