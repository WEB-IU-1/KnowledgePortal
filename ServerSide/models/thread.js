/**
 * Created by ixusv on 12.05.2016.
 */
// The Thread model

var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var threadSchema = new Schema({
    title:  String,
    postdate: {type: Date, default: Date.now},
    author: {type: String, default: 'Anon'}
});

module.exports = mongoose.model('Thread', threadSchema);