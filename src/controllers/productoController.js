const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const producto = require('../database/models/Producto');
const user = require("../models/user");

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const productsControllers = {
    index: (req, res) =>{
        products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('../views/productos/productos', {products});
    },
    indexsql: (req,res)=>{
        db.producto.findAll()
        .then(function(producto){
            res.render('../views/productos/productos', {producto});
        })
    },
    crear: (req, res) => {
        res.render('../views/productos/crearProducto');
    },
    store: (req,res) => {
        // guardamos el producto
        let nuevoProducto = {
            id: products[products.length - 1].id + 1,
            nombreProducto: req.body.nombre,
            descripcion: req.body.descripcion,
            imagen: req.file.filename,
            categoria: req.body.categoria,
            precioActual: req.body.precioActual,
            descuento: req.body.descuento
        }
        products.push(nuevoProducto);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
        res.redirect('/productos/crear');
    },
    crearsql: (req,res)=>{
        db.producto.findAll()
        .then(function(producto){
            res.render('../views/productos/crearProducto', {producto});
        })
    },
    storesql: (req,res)=>{
        db.producto.create({
           // id: producto[producto.length - 1].id + 1,
            nombre_producto: req.body.nombre_producto,
            descripcion_producto: req.body.descripcion_producto,
            imagen_producto: req.file.filename,
            id_categoria_producto: req.body.id_categoria_producto,
            unidad_token_precio_actual: req.body.unidad_token_precio_actual,
            descuento_producto: req.body.descuento_producto
        })
        res.redirect('/productos/crear');
    },
    editar: (req, res) => {
        const id = req.params.id;
        const producto = products.find(producto => producto.id == id);
        res.render('../views/productos/editarProducto', {
            producto
        })



        //res.render('producto', {id:id});
    },
    editarSql: (req,res)=>{
        db.producto.findByPk(req.params.id)
        .then(function(producto){
            res.render('../views/productos/editarProducto', {producto});
        })
    },

    update: (req, res) => {
        const id = req.params.id;
        const productToEdit = products.find(producto => producto.id == id);

        const editProduct = {
            id: id,
            nombreProducto: req.body.nombreProducto,
            descripcion: req.body.descripcion,
            imagen: req.file ? req.file.filename : productToEdit.imagen,
            categoria: req.body.categoria ,
            precioActual: req.body.precioActual,
            descuento: req.body.descuento,
        }

        // ya hemos modificado el array
        products.forEach((producto, index) => {
            if(producto.id == id) {
                products[index] = editProduct;
            }
        });
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
        res.redirect('/');
    },
    updateSql: (req,res)=>{
        db.producto.update({
           // id: producto[producto.length - 1].id + 1,
            nombre_producto: req.body.nombre_producto,
            descripcion_producto: req.body.descripcion_producto,
            imagen_producto: req.file.filename,
            id_categoria_producto: req.body.id_categoria_producto,
            unidad_token_precio_actual: req.body.unidad_token_precio_actual,
            descuento_producto: req.body.descuento_producto
        },{
            where: {
                id : req.params.id
            }
        })
        res.redirect('/')
    },

    eliminar: (req, res) => {
        // Eliminamos el heroe que llego por parametro id
        const id = req.params.id;

        const eliminarProducto = products.filter(producto => producto.id != id);
        fs.writeFileSync(productsFilePath, JSON.stringify(eliminarProducto, null, " "));
        res.redirect('/');
    },
    eliminarSql: function(req,res){
db.producto.destroy({
    where: {
        id : req.params.id
    }
})
res.redirect('/');
    },

    detalleProducto: (req, res) => {
        const id = req.params.id;
        const Products = products.find(producto => producto.id == id);
        res.render('../views/productos/productoDetalle', {producto});
    },
   detalleProductoSql: (req,res) => {
    db.producto.findByPk(req.params.id)
    .then(function(producto){
        res.render('../views/productos/productoDetalle', {producto})
    })
   }
}

module.exports = productsControllers;