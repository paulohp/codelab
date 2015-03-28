var fs = require('fs');

//Ler arquivo
fs.readFile('02-simple-server.js', function(err, content){
	console.log('Lendo.. ', err, content);
});

//Gravar arquivo
fs.writeFile('/tmp/codelab.txt', 'Amo Voces!', function(err, content){
	console.log('Gravando.. ', err, content);
});

//Renomear arquivo
fs.rename('/tmp/codelab.txt', '/tmp/codelab-node.js', function(err, content){
	console.log('Renomeando.. ', err, content);
});