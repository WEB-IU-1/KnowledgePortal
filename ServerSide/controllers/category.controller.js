/* The API controller
 Exports 3 methods:
 * read - Returns a list of Categories
 * update
 * destroy
 * create - Creates a new Category
 **optinal
 *  * find - Displays a thread and its posts
*/

var Category    = require('models/category');

exports.create = function(req,res){
  new Category({
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
      active: req.body.active,
      parent_id: req.body.parent_id
  })
      .save(function(err){
      //optional callback
        if(err)
            res.send(err);

        res.json({message:'category added'})
    });
};


exports.read = function(req, res) {
    Category.find(function(err, threads) {
        res.send(threads);
    });
};

// first locates a thread by title, then locates the replies by thread ID.
/*
exports.findId = (function(req, res) {
    Thread.findOne({title: req.params.title}, function(error, thread) {
        var posts = Post.find({thread: thread._id}, function(error, posts) {
            res.send([{thread: thread, posts: posts}]);
        });
    })
});*/