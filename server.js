var express    = require('express');
var app        = express();
var routes = require('./public/routes/index.js');
var path = require('path');
var port = process.env.PORT || 8080;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.static(__dirname + '/public'));
    
routes(app);

app.listen(port, function() {
    console.log('App listening on port ' + port);
});

app.get('/', function(req, res) {
  var fileName = path.join(__dirname, 'index.html');
  res.sendFile(fileName, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Server update:', fileName);
    }
  });
});