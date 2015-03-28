var Hapi = require("hapi");
var Datastore = require('nedb');
var db = new Datastore({ filename: './db/db.json', autoload: true });
var server = new Hapi.Server();

server.connection({
  port: Number(process.argv[2] || 8080),
  host: "localhost"
});

server.route({
  method: "GET",
  path: "/",
  handler: function(request, reply) {
    db.find({}, function(err, data){
      if (!err) {
        reply(data);
      }
    });
  }
});

server.route({
  method: "POST",
  path: "/",
  handler: function(request, reply) {
    var data = request.payload;
    db.insert(data, function(err, data){
      if (!err) {
        reply(data);
      }
    });
  }
});

server.start();