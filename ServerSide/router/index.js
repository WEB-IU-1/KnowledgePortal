module.exports = function (app) {
    app.use('/api/signup', require('./routes/signup'));
    app.use('/api/thread',require('./routes/thread'));
    app.use('/api/category', require('./routes/category'));
    app.use('/api/customer', require('./routes/customer'));

};