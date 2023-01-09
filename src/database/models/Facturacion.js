function facturacion (sequelize, dataTypes) {

    const alias = "facturacion"

    const cols = {
        id_factura: {
           
        },
        id_usuario: {
            
        },
        id_orden_compra: {
            
        },
        created_at: {
           
        },
        updated_at: {
            
        },
        deleted_at: {
            
        }
    }

    const config = {
        tableName: 'facturacion',
        timestamps: false
    }

    const Facturacion = sequelize.define(alias, cols, config)

    return Facturacion

}


module.exports = facturacion