
/*const usuario = require('../database/models/Usuario');*/
/*const usuariosFilePath = path.join(__dirname, '../data/users.json');
let usuariosJson = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));*/

const db = require('../database/models');
const sequelize = db.sequelize;



module.exports = {
    cantidad:async (req, res) => {
        let response = {
            info: {
                status: 200,
            }
        }
        try {
            const listaUsuarios = await db.usuario.count()
            response.info.total = listaUsuarios.length
            response.data = listaUsuarios
            res.json(response)
        }
        catch (e) {
            response.info.status = 400
            response.info.msg = e.message
            res.json(response)
        }
    },
    
    list: async (req, res) => {
        let response = {
            info: {
                status: 200,
            }
        }
        try {
            const listaUsuarios = await db.usuario.findAll({attributes: ['id_usuarios', 'nombre_usuario', 'correo_usuario']})
            response.info.total = listaUsuarios.length
            response.data = listaUsuarios
            res.json(response)
        }
        catch (e) {
            response.info.status = 400
            response.info.msg = e.message
            res.json(response)
        }
    },
    detail: async (req, res) => {
        let response = {
            info: {
                status: 200,
            }
        }
        try {
            const listaUsuarios = await db.usuario.findByPk(req.params.id,  {
                attributes: {
                   exclude: ['contrasena_usuario', 'id_categoria_usuario' ]
                }})
            //throw new Error("Probando un error")
            response.data = listaUsuarios
            res.json(response)
        }
        catch (e) {
            response.info.status = 400
            response.info.msg = e.message
            res.json(response)
        }
        

}

}

