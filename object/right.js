var d = {
	x: canvas.height / 2 ,
	y: canvas.height / 2 - 60,
	altura: 30,
	largura: 30,
	score: 0,
	speed: 2.2,
	cor: "white"
};

function moveDireita() {
	if(12 in teclas && d.y >= 0)
		d.y -= d.speed;
	else if(40 in teclas && d.y + d.altura <= canvas.height)
		d.y += d.speed;

	if(34 in teclas && d.x >= 0) {
		d.x += d.speed;
	} else if (35 in teclas && d.x + d.largura <= canvas.width) {
		d.x -= d.speed;
	}

	if(d.x < 0) {
		d.x = 0;
	}
	else if(d.x + d.largura > canvas.width) {
		d.x = canvas.width-d.largura;
	}
};