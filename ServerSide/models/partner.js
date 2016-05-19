var mongoose    = require('../lib/mongoose'),
    Schema = mongoose.Schema;

var partnerSchema = new Schema({
    _id:{
        type: String,
        unique: true,
        required: false, default: ''
    },
    name: {
        type: String,
        unique: true,
        required: false, default: ''
    },
    full_name: {
        type: String,
        unique: true,
        required: false, default: ''
    },
    logo: {
        type: String
    },
    credentials:{
        type: String,
        required: false, default: ''
    },
    address:{
        type: String,
        required: false, default: ''
    },
    phone:{
        type: String,
        unique: true,
        required: false, default: ''
    },
    email:{
        type: String,
        unique: true,
        required: false, default: ''
    },
    contact_people:{
        type: String,
        required: false, default: ''
    },
    categories:{
        type: String,
        required: false, default: ''
    },
    teachers:{
        type: String,
        required: false, default: ''
    },
    offices_addresses:{
        type: String,
        required: false, default: ''
    },
    comment:{
        type: String
    },
    active:{
        type:Boolean,
        default: true
    }
},{
    versionKey: false   //If you don't need version_key
});

module.exports = mongoose.model('Partner',partnerSchema);