let express = require('express');
let error404Controller = require('../controllers/error404Controller');
let router = express.Router();
const uploadFile = require('../middlewares/multerMiddleware');

router.get('/', error404Controller.index)

module.exports = router;
