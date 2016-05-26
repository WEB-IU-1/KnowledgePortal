var path        = require('path'),
    crypto      = require('crypto');

var mongoose    = require('../lib/mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
    username:{
        type: String,
        unique: true,
        required: true
    },
    hashedPassword:{
        type: String,
        required: true
    },
    salt:{
        type: String,
        required: true
    },
    created:{
        type: Date,
        default: Date.now
    },
    LastName: {
        type: String,
        required: true
    },
    FirstName: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        default: '+7'
    },
    Email: {
        type: String,
        required: true
    },
    Status: {
        type: Number,
        default: 1
    },
    Role: {
        RoleId: {
            type: Number,
            default: 1
        },
        RoleName: {
            type: String,
            default: "Менеджер"
        }
    },
    PartnerLink: {
        type:String,
        default: "/"
    }
});

userSchema.set("toJSON", { getters: true , virtuals: true });

userSchema.set("toObject", { getters: true , virtuals: true });

userSchema.methods.encryptPassword=function(password){
  return crypto.createHmac('sha1',this.salt).update(password).digest('hex');
};

userSchema.virtual('password')
.set(function(password){
    this._plainPassword=password;
    this.salt=Math.random()+'';
    this.hashedPassword=this.encryptPassword(password);
})
.get(function(){
    return this._plainPassword;
});

userSchema.methods.checkPassword=function(password){
  return this.encryptPassword(password)===this.hashedPassword;
};

module.exports = mongoose.model('User',userSchema);