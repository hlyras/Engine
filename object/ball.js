var b = {
	x: 0,
	y: 0,
	largura: 30,
	altura: 30,
	speed: 0.2
}

var bola = 0;
var pl1 = -1;
var pl2 = -1;

var locBall = function() {
	if(bola == 0) {
		b.y = parseInt(Math.floor(570 * Math.random()));
		b.x = parseInt(Math.floor(570 * Math.random()));
		bola = 1;
	}
}

var destroy = function() {
	if(e.y <= b.y + b.altura && e.y + e.altura >= b.y && e.x + e.largura >= b.x && e.x <= b.x + b.largura) {
		b.y = parseInt(Math.floor(500 * Math.random()));
		b.x = parseInt(Math.floor(500 * Math.random()));
		pl1++;
	}

	if(d.y <= b.y + b.altura && d.y + d.altura >= b.y && d.x + d.largura >= b.x && d.x <= b.x + b.largura) {
		b.y = parseInt(Math.floor(500 * Math.random()));
		b.x = parseInt(Math.floor(500 * Math.random()));
		pl2++;
	}
}