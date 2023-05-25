var timerId = null;
var quantitySkulls = null
var level_game_all = null

function startGame(levelGame) {	
	var secondTime = determineGameLevel(levelGame)
	quantitySkulls = 30;

	document.getElementById('stopwatch').innerHTML = secondTime;
	document.getElementById('wholeSkulls').innerHTML = quantitySkulls;
	document.getElementById('burstSkulls').innerHTML = 0;

	createSkulls(quantitySkulls);
	countTime(secondTime + 1);
}

function selectNivel() {   
	var levelGame = document.getElementById('level_game').value;	
	startGame(levelGame)
}

function restartGameBad() {
	var levelGame = document.getElementById('level_gameBad').value;
	clean()
	startGame(levelGame)
}

function restartGame() {
	var levelGame = document.getElementById('level_gameRestart').value;
	clean()
	startGame(levelGame)
}

function restartGameSuccess() {
	var levelGame = document.getElementById('level_gameSuccess').value;
	clean()
	startGame(levelGame)
}

function determineGameLevel(levelGame) {
	if (levelGame == 1)
		return 120;

	if (levelGame == 2)
		return 60;

	if (levelGame == 3)
		return 5;
}

function countTime(second) {

	second = second - 1;
	if (second == -1) {
		badMessage('fim de jogo voce nao conseguiu estourar todos os baloes a tempo');
		return false
	}

	document.getElementById('stopwatch').innerHTML = second;

	timerId = setTimeout("countTime(" + second + ")", 1000)
}

function createSkulls(qtde_skulls) {
	for (var i = 1; i <= qtde_skulls; i++) {
		var skulls = document.createElement("img");
		skulls.src = 'imagens/caveira_azul.png';
		skulls.style.margin = '1px'
		skulls.style.width='60px';
		skulls.style.height='60px';
		skulls.id = 'b' + i;
		skulls.onclick = function () {
			if (timerId != null)
				burstSkulls(this)
		};

		document.getElementById('scenario').appendChild(skulls);
	}
}

function burstSkulls(skulls) {
	var id_skulls = skulls.id;
	document.getElementById(id_skulls).setAttribute("onclick", "")
	document.getElementById(id_skulls).src = 'imagens/caveira_rosa.png'

	changeScore(-1)
}

function changeScore(acao) {
	var wholeSkulls = document.getElementById('wholeSkulls').innerHTML;
	var burstSkulls = document.getElementById('burstSkulls').innerHTML;

	wholeSkulls = parseInt(wholeSkulls)
	burstSkulls = parseInt(burstSkulls)

	wholeSkulls = wholeSkulls + acao;//(regra de sinal + - = -)
	burstSkulls = burstSkulls - acao;//(regra de sinal - - = +)

	document.getElementById('wholeSkulls').innerHTML = wholeSkulls;
	document.getElementById('burstSkulls').innerHTML = burstSkulls;

	gameSituation(wholeSkulls);

}

function gameSituation(wholeSkulls) {
	if (wholeSkulls == 0 && timerId !== null) {
		successfulMessage('Parabéns, voce conseguiu estourar todos os baloes a tempo');
	}
}

function badMessage(msg) {
	stopTimer()
	document.getElementById('showBadMessage').click();
}

function successfulMessage(msg) {
	stopTimer()
	document.getElementById('showSuccesfulMessage').click();
}

function clean() {
	for(var i = 1;i <= 30;i++){
		 document.getElementById('b' + i).remove()
	}	
}

function stopTimer(){
	clearTimeout(timerId);
	timerId = null
}

//https://www.devmedia.com.br/forum/como-fazer-um-botao-acionar-outro-em-javascript/572271