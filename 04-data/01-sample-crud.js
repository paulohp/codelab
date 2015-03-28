var Hapi = require('hapi');
var Datastore = require('nedb');
var db = new Datastore({ filename: './db/db.json', autoload: true });

var server = new Hapi.Server();

server.connection({
  port: Number(process.argv[2] || 8080),
  host: 'localhost'
});

server.views({
  engines: {
    html: require('ejs')
  },
  relativeTo: __dirname,
  path: 'views'
});

server.route({
  method: 'GET',
  path: '/',
  handler: function(request, reply) {
    reply.view('index');
  }
});

server.route({
  method: 'GET',
  path: '/list',
  handler: function(request, reply) {
    db.find({}, function(err, data){
      if (!err) {
        reply.view('list', { data: data });
      }
    });
  }
});

server.route({
  method: 'GET',
  path: '/post/{id}',
  handler: function(request, reply) {
    var id = request.params.id;
    db.findOne({ _id: id }, function (err, data) {
      if (!err) {
        reply.view('show', { data: data });
      }
    });
  }
});

server.route({
  method: 'POST',
  path: '/post/create',
  handler: function(request, reply) {
    var data = request.payload;
    db.insert(data, function (err, newDoc) {   // Callback is optional
      if (!err) {
        reply.redirect('/list')
      }
    });
  }
});

server.start();