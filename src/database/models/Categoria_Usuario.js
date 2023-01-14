function categoria_usuario (sequelize, dataTypes) {

    const alias = "categoria_usuario"

    const cols = {
        id_categoria_usuario: {
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
        tableName: 'categorias_usuarios',
        timestamps: false
    }

    const Categoria_Usuario = sequelize.define(alias, cols, config)

    return Categoria_Usuario

}


module.exports = categoria_usuario;