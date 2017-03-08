module.exports = function(app) {
  app.route('/whoami')
    .get(function(req, res) {;
     var reponse = {
         'ipaddress': req.headers['x-forwarded-for'],
         'language': req.headers["accept-language"].split(',')[0],
         'software': req.headers['user-agent'].split(') ')[0].split(' (')[1]
     };
     res.send(reponse);
    });
}; 