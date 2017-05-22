var News = require('../models/news');

exports.all = function(req, res){
  News.all(function(err, docs){
    if(err){
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  })
}

exports.findById = function(req, res){
  News.findById(req.params.id, function(err, doc){
      if(err){
        console.log(err);
        return res.sendStatus(500);
      }
      res.send(doc);
  })
}

exports.create = function(req, res){
  var article = {
        title: req.body.title,
        img: '1.png',
        summary: 'ANREW REYNOLDS VS STREET ON THE AMERICA',
        createdAt: Date(),
        author: req.body.author,
        content: req.body.content,
        tags: [
            "Экономика"
        ]
  };
  News.create(article, function(err, result){
    if(err){
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  })
}

exports.update = function(req, res){
  News.update(req.params.id,
    { title : req.body.title,
    img: '1.png',
    summary: 'ANREW REYNOLDS VS STREET ON THE AMERICA',
    createdAt: Date(),
    author: req.body.author,
    content: req.body.content,
    tags: [
        "Экономика"
    ]
  }, function(err, result){
      if(err){
        console.log(err);
        return res.sendStatus(500);
      }
      res.sendStatus(200);
  })
}

exports.delete = function(req, res){
  News.delete(req.params.id, function(err, result){
    if(err){
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  })
}
