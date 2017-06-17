var express = require('express');
var router = express.Router();
var apiController = require('../controllers/apiController');

/* GET users listing. */
router.get('/', apiController.getUsers);
router.post('/newUser', apiController.newUser);

module.exports = router;