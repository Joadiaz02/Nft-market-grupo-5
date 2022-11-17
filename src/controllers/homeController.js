const fs = require('fs');
const path=require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const mainController={
    index: (req, res) =>{
        products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('home', {products})
    },


editar: (req, res) => {
    const id = req.params.id;
    const productoEdit = products.find(producto => producto.id === id);
    res.render('../views/productos/editarProducto', {
        productoEdit
    })



    //res.render('producto', {id:id});
},

update: (req, res) => {
    const id = req.params.id;
    const productToEdit = products.find(product => product.id === id);

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
    products.forEach((product, index) => {
        if(product.id == id) {
            products[index] = editProduct;
        }
    });
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
    res.redirect('/edit/:id');
},
}
module.exports = mainController