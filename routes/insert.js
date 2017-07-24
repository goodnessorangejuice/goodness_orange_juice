var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/test';


//router.post("/",function(req,res,next){
//  console.log("HERE!!");
//  console.log("Hello");
//
//res.redirect('/');
//});

module.exports = router;
