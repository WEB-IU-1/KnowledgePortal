// The main application script, ties everything together.
require('app-module-path').addPath(__dirname);
var express = require('express'),
    bodyParser = require('body-parser'),
    config  = require('./lib/config'),
    mongoose = require('./lib/mongoose');
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// set up the RESTful API, handler methods are defined in api.js


app.listen(config.get('port'), function(){
    console.log('Express server listening on port ' + config.get('port'));
});

router = require('./router')(app);

// Error Handling
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});

module.exports = app;