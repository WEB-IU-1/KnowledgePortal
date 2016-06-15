var mongoose    = require('../lib/mongoose'),
    Schema = mongoose.Schema;

var partnerSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        default: ''
    },
    full_name: {
        type: String,
        unique: true,
        required: true,
        default: ''
    },
    logo: {
        type: String
    },
    credentials:{
        type: String,
        required: true,
        default: ''
    },
    address:{
        type: String,
        required: true,
        default: ''
    },
    phone:{
        type: String,
        unique: true,
        required: true,
        default: ''
    },
    email:{
        type: String,
        unique: true,
        required: true,
        default: ''
    },
    contact_people:{
        type: String,
        required: false,
        default: ''
    },
    categories:{
        type: String,
        required: true,
        default: ''
    },
    teachers:{
        type: String,
        required: false,
        default: ''
    },
    offices_addresses:{
        type: String,
        required: false,
        default: ''
    },
    comment:{
        type: String
    },
    active:{
        type: Number,
        default: 1
    }
},{
    versionKey: false   //If you don't need version_key
});

module.exports = mongoose.model('Partner',partnerSchema);