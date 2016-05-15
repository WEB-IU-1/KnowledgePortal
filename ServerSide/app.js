// The main application script, ties everything together.
require('app-module-path').addPath(__dirname);

var express         = require('express'),
    morgan          = require('morgan'),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    path            = require('path'),
    log             = require('lib/log')(module),
    config          = require('lib/config'),
    mongoose        = require('lib/mongoose');

var app = express();

app.use(morgan('dev'));     // log every request to the console
app.use(bodyParser());      // pull information from html in POST
app.use(methodOverride());  // simulate DELETE and PUT
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.listen(config.get('port'), function(){
    log.info('Express server listening on port ' + config.get('port'));
});

// set up the RESTful API, handler methods are defined in controllers
router = require('./router')(app);

// Error Handling
app.use(function(err, req, res, next){
    res.status(err.status || 500);
    log.error('Internal error(%d): %s',res.statusCode,err.message);
    res.send({ error: err.message });
});

app.use(function(req, res, next){
    res.status(404);
    log.debug('Not found URL: %s',req.url);
    res.send({ error: 'Not found' });
});

module.exports = app;