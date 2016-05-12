
var express = require('express');
var router = express.Router();

var api = require('controllers/api');
router.post('', api.post);
router.get('/:title.:format?', api.findId);
router.get('', api.show);

module.exports = router;