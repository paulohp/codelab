var uniq = require('uniq');
var $ 	 = require('jquery');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];
$('#work').html(data);
console.log(uniq(data));