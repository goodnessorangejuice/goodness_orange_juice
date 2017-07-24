var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url= "mongodb://visitor:visitor@ds111123.mlab.com:11123/goodness_orange_juice"

//var url = "mongodb://visitors:visitors@ds147872.mlab.com:47872/goodness_orange_juice";

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log("we Eventually got Here");
    res.render("index");
});

router.post("/insert", function (req, res, next) {
    var item = {
        email: req.query.email
    };
    mongoClient.connect(url, function (err, db) {
        assert.equal(err, null);
        console.log("connected successfully to the server");

        var collection = db.collection('email');

        collection.insertOne(item, function (err, result) {
            assert.equal(err, null);
            console.log("item Inserted");
            db.close();
        });
    });

    res.redirect('/');
});

router.post('/stockist_application', function (req, res, next) {
    //   console.log(req);
    var item = {
        name: req.query.name,
        email: req.query.email,
        BusinessAddress: req.query.BusinessAddress,
        phoneNumber: req.query.phoneNumber,
        feedBack: req.query.feedBack
    };
    mongoClient.connect(url, function (err, db) {
        assert.equal(err, null);
        console.log("connected successfully to the server");

        var collection = db.collection('stockist');

        collection.insertOne(item, function (err, result) {
            assert.equal(err, null);
            console.log("item Inserted");
            db.close();
        });
    });

    res.redirect('/');
});

module.exports = router;
