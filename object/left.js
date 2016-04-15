var e = {
	x: canvas.height / 2 ,
	y: canvas.height / 2 - 60,
	altura: 30,
	largura: 30,
	score: 0,
	speed: 1,
	cor: "white"
};

function moveEsquerda() {
	if(87 in teclas && e.y >= 0)
		e.y -= e.speed;
	else if(83 in teclas && e.y + e.altura <= canvas.height)
		e.y += e.speed;

	if(68 in teclas && e.x >= 0) {
		e.x += e.speed;
	} else if (65 in teclas && e.x + e.largura <= canvas.width) {
		e.x -= e.speed;
	}

	if(e.x < 0) {
		e.x = 0;
	}
	else if(e.x + e.largura > canvas.width) {
		e.x = canvas.width-e.largura;
	}
};