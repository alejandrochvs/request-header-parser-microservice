var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var port = process.env.PORT || 8080;

app.listen(port, function(){
  console.log("Listening on port: " + port);
});

app.get('/', function(req, res) {
  var fileName = path.join(__dirname, 'index.html');
  res.sendFile(fileName, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });
});

app.use(express.static(__dirname + '/public'));