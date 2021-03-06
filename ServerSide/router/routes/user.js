var express = require('express');
var router = express.Router();

var api = require('controllers/user.controller');

router.get('/', api.read);                   //gets all

router.put('/', api.update);              //edit one by id

router.post('/', api.create);                //create new one

router.delete('/:id', api.destroy );         //delete one by id

module.exports = router;