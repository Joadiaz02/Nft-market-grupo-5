const db = require('../database/models');
const sequelize = db.sequelize;

product = db.producto;

module.exports = {
    list: async (req, res) => {
        product.findAll()
        .then(product => {
            let respuesta = {
               meta: {
                status: 200,
                total: product.length,
                url: '/productosApi'
               },
               data: product
            }
            res.json(respuesta)
        })
       
        /*let response = {
            info: {
                status: 200,
            }
        }
        try {
            const listaProductos = await db.producto.findAll({attributes: ['id', 'nombre_producto', 'descripcion_producto']})
            response.info.total = listaProductos.length
            response.data = listaProductos
            res.json(response)
        }
        catch (e) {
            response.info.status = 400
            response.info.msg = e.message
            res.json(response)
        }*/
    },
    detail: (req, res) => {
        product.findByPk(req.params.id )
            .then(product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: 'api/product/'+req.params.id
                    },
                    data: product
                }
            res.json(respuesta)
        })}}



/*detail: async (req, res) => {
        let response = {
            info: {
                status: 200,
            }
        }
        try {
            const listaProductos = await db.producto.findByPk(req.params.id,  {
                attributes: {
                   exclude: ['contrasena_usuario', 'id_categoria_usuario' ]
                }})
            //throw new Error("Probando un error")
            response.data = listaProductos
            res.json(response)
        }
        catch (e) {
            response.info.status = 400
            response.info.msg = e.message
            res.json(response)
        }*/  