function producto (sequelize, dataTypes) {

    const alias = "producto"

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_producto: {
            type: dataTypes.STRING(50)
        },
        id_categoria_producto: {
            type: dataTypes.INTEGER
        },
        unidad_token_precio_actual: {
            type: dataTypes.DECIMAL(10,0)
        },
        token: {
            type: dataTypes.STRING(20)
        },
        id_usuario_dueno: {
            type: dataTypes.INTEGER
        },
        unidad_token_precio_maximo: {
            type: dataTypes.DECIMAL(10,0)
        },
        descripcion_producto: {
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
        },
        imagen_producto:{
            type: dataTypes.STRING(200)
        },
        descuento_producto:{
            type: dataTypes.STRING(10)
        }
    }

    const config = {
        tableName: 'productos',
        timestamps: false
    }

    const producto = sequelize.define(alias, cols, config)
    
   // producto.associate= function(models){
    //    producto.belongsTo(models.usuario,{
      //      as: "usuarios",
        //    foreingKey: "id_usuario_dueno",
          //  foreingKey: "id_categoria_producto"
       // });
  //  }

    return producto

}

module.exports = producto;