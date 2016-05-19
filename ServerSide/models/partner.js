var mongoose    = require('../lib/mongoose'),
    Schema = mongoose.Schema;

var partnerSchema = new Schema({
    id:{
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    full_name: {
        type: String,
        unique: true,
        required: true
    },
    logo: {
        type: String
    },
    credentials:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        unique: true,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    contact_people:{
        type: String,
        required: true
    },
    categories:{
        type: String,
        required: true
    },
    teachers:{
        type: String,
        required: true
    },
    offices_addresses:{
        type: String,
        required: true
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