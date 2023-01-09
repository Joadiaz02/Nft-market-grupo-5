function detalle_factura (sequelize, dataTypes) {

    const alias = "detalle_factura"

    const cols = {
        id_detalle: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cantidad: {
            type: dataTypes.INTEGER
        },
        id_producto: {
            type: dataTypes.INTEGER,
        },
        id_facturacion: {
            type: dataTypes.INTEGER
        },
        fecha_compra: {
            type: dataTypes.DATE
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
        tableName: 'detalles_factura',
        timestamps: false
    }

    const Detalle_Factura = sequelize.define(alias, cols, config)

    return Detalle_Factura

}


module.exports = detalle_factura;