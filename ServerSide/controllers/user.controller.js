var log         = require('lib/log')(module);//add module for server login
var User    = require('models/user');//add model

exports.read = function(req, res) {
    User.find(function(err, threads) {
        if(!err){
            console.log(threads);
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
    return User.findById(req.body._id, function (err, user) {
        if(!user) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }
        user.FirstName = req.body.FirstName;
        user.LastName = req.body.LastName;
        user.Phone = req.body.Phone;
        user.Email = req.body.Email;
        user.Status = req.body.Status;
        user.Role.RoleId = req.body.Role.RoleId;
        user.Role.RoleName = req.body.Role.RoleName;
        user.PartnerLink = req.body.PartnerLink;
        user.password = req.body.password;

        return user.save(function (err) {
            if (!err) {
                log.info("user is updated");
                return res.send({ status: 'OK', article:user });
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
    var user = new User({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Phone: req.body.Phone,
        Email: req.body.Email,
        username: req.body.Email,
        Status: req.body.Status,
        Role: {
            RoleId: req.body.Role.RoleId,
            RoleName: req.body.Role.RoleName
        },
        PartnerLink: req.body.PartnerLink,
        password: req.body.password
    });
    user.save(function(err){
        if(!err){
            log.info("user created");
            return res.send({ status: 'OK', article:user });
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
    return User.findById(req.params.id, function (err, user) {
        if(!user) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }
        return user.remove(function (err) {
            if (!err) {
                log.info("user removed");
                return res.send({ status: 'OK' });
            } else {
                res.statusCode = 500;
                log.error('Internal error(%d): %s',res.statusCode,err.message);
                return res.send({ error: 'Server error' });
            }
        });
    });
};