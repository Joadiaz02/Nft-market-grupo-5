let express = require('express');
let moviesController = require('../controllers/moviesController');
let router = express.Router();

router.get('/', moviesController.list);

module.exports = router;
