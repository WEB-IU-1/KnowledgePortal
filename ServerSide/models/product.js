var mongoose    = require('../lib/mongoose'),
    Schema = mongoose.Schema;

var productSchema = new Schema({
        name:{
            type: String,
        },
        image:{
            type: String
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
        teacher_id:{
            type: String
        },
        school_id:{
            type: String
        },
        cost:{
            type: Number
        },
        professional_level:{
            type: String
        },
        age_category_from:{
            type: Number
        },
        age_category_up:{
            type: Number
        },
        seats_count:{
            type: Number
        },
        busy_seats_count:{
            type: Number,
            default: 0
        },
        views:{
            type: Number,
            default: 0
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