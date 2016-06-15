var mongoose    = require('../lib/mongoose'),
    Schema = mongoose.Schema;
var managerSchema = new Schema({
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
        default: "#"
    }
}, {
    versionKey: false
});
module.exports = mongoose.model('Manager',managerSchema);