module.exports = function (app) {
    app.use('/api/signup', require('./routes/signup'));
    app.use('/api/thread',require('./routes/thread'));
    app.use('/api/category', require('./routes/category'));
    //app.use('/my-new-route/', require('./routes/my-new-route));
};