//Basic server requirements (Express)
var express = require('express');
var app = express();
app.use(express.static('public'));

//Other Node/npm dependencies and Express middleware
var fs = require('fs');
var _ = require('lodash');
var bodyParser = require('body-parser');

//Database dependencies
var Mongo = require('mongodb');
var MongoClient = Mongo.MongoClient;
var ObjectId = Mongo.ObjectID;
// var dburl = 'mongodb://localhost:27017/testdb';

var mongoose = require('mongoose');
var mongoUser = fs.readFileSync('secrets/.mongoUser', 'utf8');
var mongoPW = fs.readFileSync('secrets/.mongoPW', 'utf8');
//connect to modulus.io Mongo database
mongoose.connect('mongodb://' + mongoUser + ':'+ mongoPW + '@apollo.modulusmongo.net:27017/y5tosOxi');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function (cb) {
//   console.log("database connection open");


//   var userSchema = mongoose.Schema({
//       username: String,
//       password: String
//   });

//   var cardSchema = mongoose.Schema({
//       name: String,
//       date: Date,
//       description: String,
//       people: String,
//       links: String,
//       followup: String,
//       other: String
//   });

//   var User = mongoose.model('User', userSchema);

//   var me = new User({username: 'glosch', password: 'password'});

//   me.save(function (err, me) {
//     if (err) return console.error(err);
    
//   });

// });

var eventsController = require('./server/controllers/eventsController.js');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

app.get('/users', function(req,res) {
  MongoClient.connect(dburl, function(err,db) {
    if (err) return res.send('dberr: ',err);
    db.collection('users').find().toArray(function(err,users) {
      if (err) return res.send(err);
      res.send(users);
    });
  });
});

app.listen(3000);
console.log("listening on port 3000");