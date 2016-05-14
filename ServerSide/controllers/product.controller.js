/* The category API controller
 Exports 4 methods:
 * read - Returns a list of Categories
 * update - Edits one by id
 * destroy - Delete one by id
 * create - Creates a new Category
 *
 * additional methods:
 * readById
 * readByName
*/
var log         = require('lib/log')(module);//add module for server login
var Product    = require('models/product');//add model

exports.read = function(req, res) {
    Product.find(function(err, threads) {
        if(!err){
            res.send(threads);
        }
        else {
            res.statusCode = 500;
            log.error('Internal error(%d): %s',res.statusCode,err.message);
            return res.send({ error: 'Server error' });
        }
    });
};

exports.update = function(req,res){
    return Product.findById(req.params.id, function (err, product) {
        if(!product) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }

        product.name = req.body.name;
        product.description = req.body.description;
        product.updated_date = req.body.updated_date; //some how need stay it default
        product.active = req.body.active;
        product.product_types = req.body.product_types;
        product.parent_id = req.body.parent_id;
        product.teacher = req.body.teacher;
        product.seats_count = req.body.seats_count;
        product.assigned_user_id = req.body.assigned_user_id;
        product.location = req.body.location;
        
        return product.save(function (err) {
            if (!err) {
                log.info("product updated");
                return res.send({ status: 'OK', article:product });
            } else {
                if(err.name == 'ValidationError') {
                    res.statusCode = 400;
                    res.send({ error: 'Validation error' });
                } else {
                    res.statusCode = 500;
                    res.send({ error: 'Server error' });
                }
                log.error('Internal error(%d): %s',res.statusCode,err.message);
            }
        });
    });
};

exports.create = function(req,res){
  var product = new Product({
      name: req.body.name,
      description: req.body.description,
      updated_date: req.body.updated_date,
      active: req.body.active,
      types: req.body.types,
      parent_id: req.body.parent_id,
      teacher: req.body.teacher,
      seats_count: req.body.seats_count,
      assigned_user_id: req.body.assigned_user_id,
      location: req.body.location
  });
    product.save(function(err){
        if(!err){
            log.info("product created");
            return res.send({ status: 'OK', article:product });
        }
          else{
            log.error(err);
            if(err.name == 'ValidationError') {
                res.statusCode = 400;
                res.send({ error: 'Validation error' });
            }
            else {
                res.statusCode = 500;
                res.send({ error: 'Server error' });
            }
            log.error('Internal error(%d): %s',res.statusCode,err.message);
        }
    });
};

exports.destroy = function(req,res){
    return Product.findById(req.params.id, function (err, product) {
        if(!product) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }
        return product.remove(function (err) {
            if (!err) {
                log.info("product removed");
                return res.send({ status: 'OK' });
            } else {
                res.statusCode = 500;
                log.error('Internal error(%d): %s',res.statusCode,err.message);
                return res.send({ error: 'Server error' });
            }
        });
    });
};

exports.readById = function(req,res){
    return Product.findById(req.params.id, function(err,product){
            if(!product) {
                res.statusCode = 404;
                return res.send({ error: 'Not found' });
            }
            if (!err) {
                return res.send({ status: 'OK', article:product });
            } else {
                res.statusCode = 500;
                log.error('Internal error(%d): %s',res.statusCode,err.message);
                return res.send({ error: 'Server error' });
            }
        }
    );
};

exports.readByName = function(req,res){
    res.send("destroy is not implemented now");
};