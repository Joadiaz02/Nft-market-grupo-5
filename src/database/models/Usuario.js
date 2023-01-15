function usuario (sequelize, dataTypes) {

    const alias = "usuario"

    const cols = {
        id_usuarios: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_categoria_usuario:{
            type: dataTypes.INTEGER
        },
        cuenta_usuario: {
            type: dataTypes.STRING(20)
        },
        correo_usuario: {
            type: dataTypes.STRING(30)
        },
        nombre_usuario: {
            type: dataTypes.STRING(15)
        },
        apellido_usuario: {
            type: dataTypes.STRING(15)
        },
        contrasena_usuario: {
            type: dataTypes.STRING(200)
        },
        contacto_usuario: {
            type: dataTypes.STRING(20)
        },
        residencia_usuario: {
            type: dataTypes.STRING(20)
        },
        id_categoria_preferida: {
            type: dataTypes.INTEGER
        },
        imagen_perfil: {
            type: dataTypes.STRING(45)
        },
        fecha_nacimiento: {
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
        tableName: 'usuarios',
        timestamps: false
    }
    const usuario = sequelize.define(alias, cols, config)
    //const Usuario = sequelize.define(alias, cols, config)
    //Usuario.associate= function(models){
        //Usuario.hasMany(models.producto,{
         //   as: "productos",
       //     foreingKey: "id_categoria_preferida"
     //   });
   // }

    return usuario

}


module.exports = usuario;