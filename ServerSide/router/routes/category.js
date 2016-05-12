
var express = require('express');
var router = express.Router();

var api = require('controllers/category.controller');
router.post('', api.create);
router.get('/all', api.read);

module.exports = router;