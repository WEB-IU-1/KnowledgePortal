/**
 * Created by Andre on 19.05.2016.
 */
/* The customer API controller
 Exports 4 methods:
 * read - Returns a list of Customers
 * update - Edits by id
 * destroy - Delete by id
 * create - Creates a new Customer entity
 * i love to copypaste, yeah
 * additional methods:
 * readById
 * readByName
 */
var log         = require('lib/log')(module);//add module for server login
var Customer    = require('models/customer');//add model



exports.read = function(req, res) {
    Customer.find(function(err, threads) {
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
    return Customer.findById(req.body._id, function (err, customer) {
        if(!customer) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }

        customer.LastName = req.body.LastName;
        customer.FirstName = req.body.FirstName;
        customer.Gender = req.body.Gender;
        customer.Address = req.body.Address;
        customer.Phone = req.body.Phone;
        customer.BirthDate = req.body.BirthDate;
        customer.Email = req.body.Email;
        customer.RegistrationDate = req.body.RegistrationDate;
        customer.UpdatedDate = Date.now();
        customer.UserToken = req.body.UserToken;

        return customer.save(function (err) {
            if (!err) {
                log.info("customer updated");
                return res.send({ status: 'OK', article:customer });
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
    var customer = new Customer({
        id: req.body.id,
        LastName :req.body.LastName,
        FirstName : req.body.FirstName,
        Gender : req.body.Gender,
        Address : req.body.Address,
        Phone : req.body.Phone,
        BirthDate : req.body.BirthDate,
        Email : req.body.Email,
        RegistrationDate : Date.now(),
        UpdatedDate : Date.now(),
        UserToken : req.body.UserToken
    });
    customer.save(function(err){
        if(!err){
            log.info("entity created");
            return res.send({ status: 'OK', article:customer });
        }
        else {
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
    return Customer.findById(req.params.id, function (err, customer) {
        if(!customer) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }
        return customer.remove(function (err) {
            if (!err) {
                log.info("customer removed");
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
    return Customer.findById(req.params.id, function(err,customer){
            if(!customer) {
                res.statusCode = 404;
                return res.send({ error: 'Not found' });
            }
            if (!err) {
                return res.send({ status: 'OK', article:customer });
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