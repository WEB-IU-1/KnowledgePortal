var express     = require('express'),
    router      = express.Router(),
    Bear        = require('../../models/bear');

//with bears collection

    // create a category (accessed at POST http://localhost:1337/api/bears)
router.post(function(req,res){
        var bear = new Bear();
        bear.name=req.body.name;

        bear.save(function(err){
            if(err) res.send(err);

            res.json({message:'bear created'})
        });
    });

    // get all the bears (accessed at GET http://localhost:1337/api/bears)
router.get(function(req, res) {
        Bear.find(function(err, bears) {
            if (err)
                res.send(err);

            res.json(bears);
        });
    });

    router.get('/all', function (req, res) {
        res.json({message:"all bears"});
    });

/*
router.route('/bears/:bear_id')
    // get the bear with that id (accessed at GET http://localhost:1337/bears/:bear_id)
    .get(function(req, res) {
        Bear.findById(req.params.bear_id, function(err, bear) {
            if (err)
                res.send(err);
            res.json(bear);
        });
    })
    // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
    .put(function(req, res) {
        // use our bear model to find the bear we want
        Bear.findById(req.params.bear_id, function(err, bear) {

            if (err)
                res.send(err);

            bear.name = req.body.name;  // update the bears info

            // save the bear
            bear.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Bear updated!' });
            });

        });
    })
    // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
    .delete(function(req, res) {
        Bear.remove({
            _id: req.params.bear_id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });*/


module.exports = router;
