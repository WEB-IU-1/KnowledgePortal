var mongoose    = require('mongoose'),
    log         = require('./log')(module),
    config      = require('./config');

var db = mongoose.connection;

db.on('error', function (err) {
    log.error('connection error:', err.message);
});

db.once('open',function(){
    log.info("Connected to DB!");
});

mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'));

module.exports = mongoose;