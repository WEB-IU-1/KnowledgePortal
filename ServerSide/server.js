var express = require('express'),
    bodyParser = require('body-parser'),
    config  = require('./lib/config'),
    mongoose = require('./lib/mongoose');
    //log     = require('./lib/log')(module);

    var app     = express(),
        router  = express.Router();

//connect models
var Category    = require('./models/category');


//operations
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//routes

router.use(function(req,res,next){
    console.log('routing is fine...');
    next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/',function(req,res){
    res.json({message:"looks fine"});
});


//app.use('/bears',require('./routes/bearRoute'));

///


// all of our routes will be prefixed with /api
app.use('/api', router);

//Start server
app.listen(config.get('port'), function(){
    console.log('Express server listening on port ' + config.get('port'));
});

router = require('./router')(app);

// Error Handling
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});

module.exports = app;