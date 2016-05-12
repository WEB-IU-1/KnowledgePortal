var mongoose     = require('mongoose'),
    Schema       = mongoose.Schema;

var bearSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Bear', bearSchema);