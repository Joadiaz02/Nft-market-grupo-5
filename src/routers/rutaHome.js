let express = require('express');
let homeController = require('../controllers/homeController');
let router = express.Router();
const uploadFile = require('../middlewares/multerMiddleware');

router.get('/', homeController.index)


module.exports = router;
