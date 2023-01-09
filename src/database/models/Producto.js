function producto (sequelize, dataTypes) {

    const alias = "producto"

    const cols = {
        id_productos: {
        },
        nombre_producto: {
        },
        id_categoria_producto: {
        },
        unidad_token_precio_actual: {
        },
        token: {
        },
        id_usuario_dueno: {
        },
        unidad_token_precio_maximo: {
        },
        descripcion_producto: {
        },
        created_at: {
        },
        updated_at: {
        },
        deletd_at: {
        }
    }

    const config = {
        tableName: 'productos',
        timestamps: false
    }

    const producto = sequelize.define(alias, cols, config)

    return producto

}

module.exports = producto;