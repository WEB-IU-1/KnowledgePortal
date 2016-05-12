var path     = require('path'),
    async    = require('async'),
    mongoose = require('./lib/mongoose');


async.series([
    open,
    dropDatabase,
    requireModels,
    createUsers,
    close
],function(err,results){
    console.log(arguments);
    mongoose.disconnect();
});

function requireModels(callback){
    require('./models/category');

    async.each(Object.keys(mongoose.models),
    function(modelName,callback){
        mongoose.models[modelName].ensureIndexes(callback);
    },callback)
}

function open(callback){
    mongoose.connection.on('open',callback);
    console.log("#Connection opened.")
}

function dropDatabase(callback){
    var db = mongoose.connection.db;
    db.dropDatabase(callback);
}

function createUsers(callback){
    User     = require('./models/category').User;

    var users = [
        [{
            "category_id":1,
            "name":"Искусство",
            "parent_id":null,
            "created_date":"2016-04-23T18:25:43.511Z",
            "updated_date":"2016-04-23T18:25:43.511Z",
            "active": true
        },
            {
                "category_id":2,
                "name":"Живопись",
                "parent_id":1,
                "created_date":"2016-04-23T18:25:43.511Z",
                "updated_date":"2016-04-23T18:25:43.511Z",
                "active": true
            },
            {
                "category_id":3,
                "name":"Архитектура",
                "parent_id":1,
                "created_date":"2016-04-23T18:25:43.511Z",
                "updated_date":"2016-04-23T18:25:43.511Z",
                "active": true
            },
            {
                "category_id":4,
                "name":"История искусства",
                "parent_id":1,
                "created_date":"2016-04-23T18:25:43.511Z",
                "updated_date":"2016-04-23T18:25:43.511Z",
                "active": true
            },
            {
                "category_id":5,
                "name":"Кулинария",
                "parent_id":null,
                "created_date":"2016-04-23T18:25:43.511Z",
                "updated_date":"2016-04-23T18:25:43.511Z",
                "active": true
            },
            {
                "category_id":6,
                "name":"Общее",
                "parent_id":5,
                "created_date":"2016-04-23T18:25:43.511Z",
                "updated_date":"2016-04-23T18:25:43.511Z",
                "active": true
            },
            {
                "category_id":7,
                "name":"Выпечка",
                "parent_id":5,
                "created_date":"2016-04-23T18:25:43.511Z",
                "updated_date":"2016-04-23T18:25:43.511Z",
                "active": true
            },
            {
                "category_id":8,
                "name":"Десерты",
                "parent_id":5,
                "created_date":"2016-05-2T18:25:43.511Z",
                "updated_date":"2016-05-2T18:25:43.511Z",
                "active": true
            },
            {
                "category_id":9,
                "name":"Вино",
                "parent_id":5,
                "created_date":"2016-04-23T18:25:43.511Z",
                "updated_date":"2016-04-23T18:25:43.511Z",
                "active": true
            },
            {
                "category_id":10,
                "name":"Йога",
                "parent_id":null,
                "created_date":"2012-04-23T18:25:43.511Z",
                "updated_date":"2016-04-23T18:25:43.511Z",
                "active": true
            },
            {
                "category_id":11,
                "name":"Танцы",
                "parent_id":null,
                "created_date":"2015-10-21T13:28:06.419Z",
                "updated_date":"2016-04-23T18:25:43.511Z",
                "active": true
            }]
    ];
    async.each(users,function(userData,callback){
        var user = new User(userData);
        user.save(callback);
    },callback);
}

function close(callback){
    mongoose.disconnect(callback);
    console.log("#Connection closed.")
}




