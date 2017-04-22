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
        createdAt: new Date('2017-02-27T00:00:00'),
        author: 'Trush Kostya',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam ',
        tags: [
            "Экономика"
        ]
  };
  News.create(article, function(err, result){
    if(err){
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(article);
  })
}

exports.update = function(req, res){
  News.update(req.params.id,
    { title : req.body.title,
    img: '1.png',
    summary: 'ANREW REYNOLDS VS STREET ON THE AMERICA',
    createdAt: new Date('2017-02-27T00:00:00'),
    author: 'Trush Kostya',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam ',
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
