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
var Category    = require('models/category');//add model

exports.read = function(req, res) {
    Category.find(function(err, threads) {
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
    res.send("update is not implemented now");
};

exports.create = function(req,res){
  new Category({
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
      active: req.body.active,
      parent_id: req.body.parent_id
  })
      .save(function(err){
        if(!err){
            log.info("article created");
            return res.send({ status: 'OK', article:category });
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
    return Category.findById(req.params.id, function (err, article) {
        if(!article) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }
        return article.remove(function (err) {
            if (!err) {
                log.info("article removed");
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
    Category.findById(req.params.id, function(err,category){
            if(!category) {
                res.statusCode = 404;
                return res.send({ error: 'Not found' });
            }
            if (!err) {
                return res.send({ status: 'OK', article:category });
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