const fs = require('fs');
const path = require('path');


const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsControllers = {
    //index: (req, res) => {
       // products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
       // res.render('../views/home', {
         //   products
       // })
       // res.render('todos los productos'); // a confirmar
   // },
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
        res.redirect('/producto/crear');
    },
    editar: (req, res) => {
        const id = req.params.id;
        const producto = products.find(producto => producto.id == id);
        res.render('../views/productos/editarProducto', {
            producto
        })



        //res.render('producto', {id:id});
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
    eliminar: (req, res) => {
        // Eliminamos el heroe que llego por parametro id
        const id = req.params.id;

        const eliminarProducto = products.filter(producto => producto.id != id);
        fs.writeFileSync(productsFilePath, JSON.stringify(eliminarProducto, null, " "));
        res.redirect('/');
    },

    detalleProducto: (req, res) => {
        const id = req.params.id;
        const producto = products.find(producto => producto.id == id);
        res.render('../views/productos/producto', {producto});
    }
}

module.exports = productsControllers;