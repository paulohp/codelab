var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, { 'Content-Type': 'text/html' });
	if(req.url === '/'){
		res.write('<html><body><h1>Hello DevFest!!!</h1>');
		res.write('<h3>Sejam bem vindos e aproveitem o coffeebreak</h3>');
		res.write('</body></html>');
		res.end();
	}else if(req.url === '/cafe'){
		res.write('<html><body><h1>Coffee Break!!</h1></body></html>')
		res.end();
	}
});

server.listen(3000, function(){
	console.log('Funciona!!!');
});
