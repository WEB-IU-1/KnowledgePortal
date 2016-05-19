var express = require('express');
var router = express.Router();

var api = require('controllers/manager.controller');

router.get('/', api.read);                   //gets all

router.put('/:id', api.update);              //edit one by id

router.post('', api.create);                //create new one

router.delete('/:id', api.destroy );         //delete one by id

router.get('/:id', api.readById);             //gets one by id

module.exports = router;