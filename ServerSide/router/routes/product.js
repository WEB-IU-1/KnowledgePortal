var express = require('express');
var router = express.Router();

var api = require('controllers/product.controller');


router.get('/', api.read);                   //gets all

router.put('/', api.update);              //edit one by id

router.put('/:id', api.view);              //edit one by id and increment views

router.post('/', api.create);                //create new one

router.delete('/:id', api.destroy );         //delete one by id

router.get('/:id', api.readById);             //gets one by id

module.exports = router;