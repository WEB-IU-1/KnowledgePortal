var mongoose    = require('mongoose');
var config      = require('./config');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open',function(){
   console.log('connection is opened')
});

mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'));

module.exports = mongoose;