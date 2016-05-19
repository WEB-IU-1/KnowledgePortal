/* The category API controller
 Exports 4 methods:
 * read - Returns a list of Categories
 * update - Edits one by id
 * destroy - Delete one by id
 * create - Creates a new Category
 *
 */

var log         = require('lib/log')(module);//add module for server login
var Manager    = require('models/manager');//add model

exports.read = function(req, res) {
    Manager.find(function(err, threads) {
        if(!err){
            res.send(threads.filter(function(value){
                return (value.Role.RoleId == 1 || value.Role.RoleId == 2)
            }));
        }
        else {
            res.statusCode = 500;
            log.error('Internal error(%d): %s',res.statusCode,err.message);
            return res.send({ error: 'Server error' });
        }
    });
};

exports.update = function(req,res){
    return Manager.findById(req.body._id, function (err, manager) {
        if(!manager) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }

        manager.FirstName = req.body.FirstName;
        manager.LastName = req.body.LastName;
        manager.Phone = req.body.Phone;
        manager.Email = req.body.Email;
        manager.Status = req.body.Status;
        manager.Role.RoleId = req.body.Role.RoleId;
        manager.Role.RoleName = req.body.Role.RoleName;
        manager.PartnerLink = req.body.PartnerLink;

        return manager.save(function (err) {
            if (!err) {
                log.info("manager is updated");
                return res.send({ status: 'OK', article:manager });
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
    console.log(req.body.FirstName);
    var manager = new Manager({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Phone: req.body.Phone,
        Email: req.body.Email,
        Status: req.body.Status,
        Role: {
            RoleId: req.body.Role.RoleId,
            RoleName: req.body.Role.RoleName
        },
        PartnerLink: req.body.PartnerLink
    });
    manager.save(function(err){
        if(!err){
            log.info("manager created");
            return res.send({ status: 'OK', article:manager });
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
    return Manager.findById(req.params.id, function (err, manager) {
        if(!manager) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }
        return manager.remove(function (err) {
            if (!err) {
                log.info("manager removed");
                return res.send({ status: 'OK' });
            } else {
                res.statusCode = 500;
                log.error('Internal error(%d): %s',res.statusCode,err.message);
                return res.send({ error: 'Server error' });
            }
        });
    });
};