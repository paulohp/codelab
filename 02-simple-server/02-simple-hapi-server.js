var Hapi = require("hapi");

var server = new Hapi.Server();

server.connection({
  port: Number(process.argv[2] || 8080),
  host: "localhost"
});

server.views({
  engines: {
    html: require("ejs")
  },
  relativeTo: __dirname,
  path: "views"
});

server.route({
  method: "GET",
  path: "/",
  handler: function(request, reply) {
    reply.view("index");
  }
});

server.start();