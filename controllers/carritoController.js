const path=require('path');

const carritoController={
    index: (req, res) => {
        res.render('../views/productos/carrito')
    }
}

module.exports = carritoController;
