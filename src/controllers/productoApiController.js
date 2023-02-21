const db = require('../database/models');
const sequelize = db.sequelize;

product = db.producto;
categorias = db.categorias_productos;

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
        })},
    
        lastProduct: (req, res) => {
            product.findAll({
              limit: 1,
              order: [["id", "DESC"]],
            }).then((product) => {
              let response = {
                meta: {
                  status: 200,
                  url: "productosApi/lastProduct",
                },
                data: product,
              };
              res.json(response);
            });
          },
          categoriaLista: async (req, res) => {
            categorias.findAll()
            .then(categorias => {
                let respuesta = {
                   meta: {
                    status: 200,
                    total: categorias.length,
                    url: '/categorias'
                   },
                   data: categorias
                }
                res.json(respuesta)
            })
    },

    primerosNft: (req, res) => {
        product.findAll({
            limit: 3,
            order: [["id", "ASC"]],
        })
        .then(product => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: product.length,
                    url: '/primerosNft'
                },
                data: product
            }
                res.json(respuesta);
            })
      },
}


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