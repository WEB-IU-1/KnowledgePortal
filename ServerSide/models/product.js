var mongoose    = require('../lib/mongoose'),
    Schema = mongoose.Schema;

var productSchema = new Schema({
        name:{
            type: String,
        },
        start:{
            type: Date,
            default: Date.now
        },
        end:{
            type: Date,
            default: Date.now
        },
        startTimezone:{
            type: String
        },
        endTimezone:{
            type: String
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
        type:{
            type: String
        },
        recurrenceId:{
            type: String
        },
        recurrenceRule:{
            type: String
        },
        recurrenceException:{
            type: String
        },
        teacher:{
            type: String
        },
        seats_count:{
            type: Number
        },
        assigned_user_id:{
            type: String
        },
        location:{
            type: String
        }
}, {
    versionKey: false   //If you don't need version_key
});

module.exports = mongoose.model('Product',productSchema);