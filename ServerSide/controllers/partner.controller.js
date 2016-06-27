/* The partner API controller
 Exports 4 methods:
 * read - Returns a list of Categories
 * update - Edits one by id
 * destroy - Delete one by id
 * create - Creates a new Partner
 *
 * additional methods:
 * readById
 * readByName
*/
var log         = require('lib/log')(module);//add module for server login
var Partner    = require('models/partner');//add model

exports.read = function(req, res) {
    Partner.find(function(err, threads) {
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
    return Partner.findById(req.body._id, function (err, partner) {
        if(!partner) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }
        partner.name = req.body.name;
        partner.full_name = req.body.full_name;
        partner.logo = req.body.logo;
        partner.credentials = req.body.credentials;
        partner.address = req.body.address;
        partner.phone = req.body.phone;
        partner.email = req.body.email;
        partner.contact_people = req.body.contact_people;
        partner.categories = req.body.categories;
        partner.teachers = req.body.teachers;
        partner.offices_addresses = req.body.offices_addresses;
        partner.active = req.body.active;
        partner.comment = req.body.comment;

        return partner.save(function (err) {
            if (!err) {
                log.info("partner updated");
                return res.send({ status: 'OK', article:partner });
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
  var partner = new Partner({
      id: req.body.id,
      name: req.body.name,
      full_name: req.body.full_name,
      logo: req.body.logo,
      credentials: req.body.credentials,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
      contact_people: req.body.contact_people,
      categories: req.body.categories,
      teachers: req.body.teachers,
      offices_addresses: req.body.offices_addresses,
      active: req.body.active,
      comment: req.body.comment
  });
    partner.save(function(err){
        if(!err){
            log.info("article created");
            return res.send({ status: 'OK', article:partner });
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
    return Partner.findById(req.params.id, function (err, partner) {
        if(!partner) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }
        return partner.remove(function (err) {
            if (!err) {
                log.info("partner removed");
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
    return Partner.findById(req.params.id, function(err,partner){
            if(!partner) {
                res.statusCode = 404;
                return res.send({ error: 'Not found' });
            }
            if (!err) {
                return res.send({ status: 'OK', article:partner });
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