var express    = require('express');
var app        = express();
var routes = require('./public/routes/index.js');
var path = require('path');
var port = process.env.PORT || 8080;
var pug = require("pug");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
    
routes(app);

app.listen(port, function() {
    console.log('App listening on port ' + port);
});

app.get('/', function(req, res) {;
  res.render("index");
});