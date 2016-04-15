function engine() {
	if(pl1 < 0 && pl2 < 0) {
		newgame();
	}

	if(pl1 < 10 && pl2 < 10 && pl1 >= 0 && pl2 >= 0) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		locBall();
		destroy();
		moveEsquerda();
		moveDireita();

		ctx.beginPath();
		ctx.rect(200, 0, 5, 100);
		ctx.rect(400, 0, 5, 100);
		ctx.rect(200, 100, 205, 5);
		ctx.rect(200, 100, 205, 5);
		ctx.rect(0, 298, 600, 5);
		ctx.rect(200, 500, 5, 100);
		ctx.rect(400, 500, 5, 100);
		ctx.rect(200, 500, 205, 5);
		ctx.fillStyle = "white";
		ctx.fill();

		ctx.fillStyle = "white";

		ctx.font = "25px Arial bold";
		ctx.fillText(" Player 1 "+pl1, 80, 20);

		ctx.font = "25px Arial bold";
		ctx.fillText(" Player 2 "+pl2, 410, 20);

		ctx.beginPath();
		ctx.rect(e.x, e.y, e.largura, e.altura);
		ctx.fillStyle = "black";
		ctx.shadowBlur=15;
		ctx.shadowColor="white";
		ctx.fill();

		ctx.beginPath();
		ctx.rect(d.x, d.y, d.largura, d.altura);
		ctx.fillStyle = "#00FFFF";
		ctx.shadowBlur=15;
		ctx.shadowColor="pink";
		ctx.fill();

		ctx.beginPath();
		ctx.rect(b.x, b.y, b.largura, b.altura);
		ctx.fillStyle = "white";
		ctx.shadowBlur=15;
		ctx.shadowColor="pink";
		ctx.fill();
	}
	if(pl1 == 10 || pl2 == 10) {
		winner();
	}
};

function winner() {
	if(pl1 == 10) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = "white";

		ctx.font = "70px Arial bold";
		ctx.fillText(" Player 1 Win", 50, 250);
		ctx.font = "20px Arial bold";
		ctx.fillText("press enter to restart", 200, 460);

		if(13 in teclas) {
			pl1 = 0;
			pl2 = 0;
		}
	}
	if(pl2 == 10) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = "white";

		ctx.font = "70px Arial bold";
		ctx.fillText(" Player 2 Win", 50, 250);
		ctx.font = "20px Arial bold";
		ctx.fillText("press enter to restart", 200, 460);

		if(13 in teclas) {
			pl1 = 0;
			pl2 = 0;
		}
	}
}

function newgame() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = "white"

	ctx.font = "40px Arial bold"
	ctx.fillText("Start game", 200, 200);
	ctx.fillText("press enter", 200, 400);

	if(13 in teclas) {
		pl1 = 0;
		pl2 = 0;
	}
}