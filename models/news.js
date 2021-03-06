var db = require('../db');
var ObjectID = require('mongodb').ObjectID;

exports.all = function(cb){
  db.get().collection('news').find().sort({createdAt: -1}).toArray(function(err, docs){
    cb(err, docs);
  })
}

exports.findById = function(id, cb){
  db.get().collection('news').findOne({ _id : ObjectID(id)}, function(err, doc){
    cb(err, doc);
  })
}

exports.create = function(article, cb){
  db.get().collection('news').insert(article, function(err, result){
    cb(err, result);
  })
}

exports.update = function(id, newData, cb){
  db.get().collection('news').updateOne(
    { _id : ObjectID(id)},
    newData,
    function(err, result){
      cb(err, result);
    })
}

exports.delete = function(id, cb){
  db.get().collection('news').deleteOne(
    { _id : ObjectID(id)},
    function(err, result){
      cb(err, result);
    })
}
