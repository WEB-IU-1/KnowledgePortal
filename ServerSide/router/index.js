module.exports = function (app) {
    app.use('/api/signup', require('./routes/signup'));
    app.use('/api/thread',require('./routes/thread'));
    app.use('/api/category', require('./routes/category'));
    app.use('/api/customer', require('./routes/customer'));
    app.use('/api/user', require('./routes/user'));
    app.use('/api/product', require('./routes/product'));
    //app.use('/my-new-route/', require('./routes/my-new-route));
};