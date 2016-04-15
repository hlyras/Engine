var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

var teclas = {};
var lvl = 0;

document.addEventListener("keydown", function(e) {
	teclas[e.keyCode] = true;
}, false);

document.addEventListener("keyup", function(e) {
	delete teclas[e.keyCode];
	//alert(e.keyCode)
}, false);