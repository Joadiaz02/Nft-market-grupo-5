function facturacion (sequelize, dataTypes) {

    const alias = "facturacion"

    const cols = {
        id_factura: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_usuario: {
            type: dataTypes.INTEGER
        },
        id_orden_compra: {
            type: dataTypes.INTEGER
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        deleted_at: {
            type: dataTypes.DATE
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