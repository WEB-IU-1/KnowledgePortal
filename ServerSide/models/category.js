var mongoose    = require('lib/mongoose'),
    Schema = mongoose.Schema;

var categorySchema = new Schema({
    id:{
        type: String,
        unique: true,
        required:true
    },
    name:{
        type: String,
        unique: true,
        required: true
    },
    description:{
        type: String
    },
    created_date:{
        type: Date,
        default: Date.now
    },
    updated_date:{
        type: Date,
        default: Date.now
    },
    active:{
        type:Boolean
    },
    parent_id:{
        type: String
    }
});

module.exports = mongoose.model('Category',categorySchema);