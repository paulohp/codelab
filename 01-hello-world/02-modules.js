var circle = require('./circle');
var square = require('./square');

console.log( 'The area of a circle of radius 4 is ' + circle.area(4));

var mySquare = square(2);
console.log('The area of my square is ' + mySquare.area());