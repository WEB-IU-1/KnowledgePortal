/**
 * Created by Andre on 19.05.2016.
 */
var mongoose    = require('../lib/mongoose'),
    Schema = mongoose.Schema;

var CustomerSchema = new Schema({
    LastName:{
        type: String,
        required: true
    },
    FirstName:{
        type: String,
        required:true
    },
    Gender:{
        type: String,
        required:true
    },
    Address:{
        type: String,
        required:true
    },
    Phone:{
        type: String,
        required:true
    },
    BirthDate:{
        type: Date,
        required:true
    },
    Email:{
        type: String,
        required:true
    },
    RegistrationDate:{
        type: Date,
        default: Date.now
    },
    UpdatedDate:{
        type: Date,
        default: Date.now
    },
    UserToken: {        //connection with users table
        type: String
    }
},{
    versionKey: false   //If you don't need version_key
});

module.exports = mongoose.model('Customer', CustomerSchema);
