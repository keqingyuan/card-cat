var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/db';

MongoClient.connect(url, function(err, db){
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
})
