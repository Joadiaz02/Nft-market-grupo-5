function categoria_producto (sequelize, dataTypes) {

    const alias = "categorias_productos"

    const cols = {
        id_categorias_productos: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descripcion_categoria: {
            type: dataTypes.STRING(200)
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
        tableName: 'categorias_productos',
        timestamps: false
    }

    const Categoria_Producto = sequelize.define(alias, cols, config)

    return Categoria_Producto

}


module.exports = categoria_producto;