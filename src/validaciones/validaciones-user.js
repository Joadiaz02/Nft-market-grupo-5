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
        body("correo_usuario")
            .notEmpty()
            .withMessage("Debes colocar un email")
            .isEmail()
            .withMessage("El email no es valido")
            .custom(function(value,{req}){
                return db.Users.findOne({
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
        body("contraseña_usuario")
            .notEmpty()
            .withMessage("contraseña incorrecta")
    ]
    ,
    loginValidation: [
        body("correo_usuario")
        .notEmpty()
        .withMessage("El email ingresado no se encuentra registrado"),
        body("contraseña_usuario")
        .notEmpty()
        .withMessage("contraseña no valida")
    ]
}