const path=require('path');

const registroController={
    registro: (req, res) =>{
        res.render('../views/usuarios/registro');
    },
    login: (req, res) =>{
        res.render('../views/usuarios/login');
    }
}

module.exports = registroController;