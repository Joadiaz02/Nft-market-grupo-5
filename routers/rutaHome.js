let express = require('express');
let homeController = require('../controllers/homeController');
let router = express.Router();
const uploadFile = require('../middlewares/multerMiddleware');

router.get('/', homeController.index)


router.get('/edit/:id', homeController.editar);
router.put('/edit/:id', uploadFile.single('filename'), homeController.update);

module.exports = router;
