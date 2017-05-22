var express = require('express');
var bodyParser = require('body-parser');
var ObjectID = require('mongodb').ObjectID;
var db = require('./db');
var newsController = require('./controllers/news');

var app = express();

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function(req, res){
  res.send("LIZA");
})

app.get('/news', newsController.all);

app.get('/news/:id', newsController.findById);

app.post('/news', newsController.create);

app.put('/news/:id', newsController.update);

app.delete('/news/:id', newsController.delete);

db.connect('mongodb://localhost:27017/test', function(err){
  if(err){
    return console.log(err);
  }
  app.listen(3062, function(){
    console.log('API is started');
  })
})
