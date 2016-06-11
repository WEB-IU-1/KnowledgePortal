/**
 * Created by Andre on 19.05.2016.
 */
var express = require('express');
var router = express.Router();

var api = require('controllers/customer.controller');


router.get('/', api.read);                   //gets all

router.put('/', api.update);              //edit one by id

router.post('/', api.create);                //create new one

router.delete('/:id', api.destroy );         //delete one by id

router.get('/:id', api.readById);             //gets one by id

router.get('/:name', api.readByName);     //gets one by name


module.exports = router;
