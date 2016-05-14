var mongoose    = require('../lib/mongoose'),
    Schema = mongoose.Schema;

var categorySchema = new Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    description:{
        type: String,
        default: ''
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
        type:Boolean,
        default: true
    },
    parent_id:{
        type: String,
        default:''
    }
},{
    versionKey: false   //If you don't need version_key
});

module.exports = mongoose.model('Category',categorySchema);