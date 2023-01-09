function usuario (sequelize, dataTypes) {

    const alias = "usuario"

    const cols = {
        id_usuarios: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_categoria_usuario:{
            type: dataTypes.STRING
        },
        cuenta_usuario: {
        },
        correo_usuario: {
        },
        nombre_usuario: {
        },
        apellido_usuario: {
        },
        contrasena_usuario: {
        },
        contacto_usuario: {
        },
        residencia_usuario: {
        },
        id_categoria_preferida: {
        },
        imagen_perfil: {
        },
        fecha_nacimiento: {
        },
        created_at: {
        },
        updated_at: {
        },
        deleted_at: {
        }
    }

    const config = {
        tableName: 'usuarios',
        timestamps: false
    }

    const Usuario = sequelize.define(alias, cols, config)

    return Usuario

}


module.exports = usuario;