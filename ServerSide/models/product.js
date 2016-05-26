var mongoose    = require('../lib/mongoose'),
    Schema = mongoose.Schema;

var productSchema = new Schema({
        name:{
            type: String,
            required: true
        },
        start:{
            type: Date,
            required: true,
            default: Date.now
        },
        end:{
            type: Date,
            required: true,
            default: Date.now
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
        product_types:{
            type: mongoose.Schema.Types.Mixed,
            default: {}
        },
        parent_id:{
            type: String,
            default:''
        },
        teacher:{
            type: String,
            default:''
        },
        seats_count:{
            type: Number,
            default:0
        },
        assigned_user_id:{
            type: String,
            default:''
        },
        location:{
            type: String,
            default:''
        }
}, {
    versionKey: false   //If you don't need version_key
});

module.exports = mongoose.model('Product',productSchema);