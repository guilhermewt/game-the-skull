var timerId = null // variavel que armazena a chamada da funcao timeout

function iniciarJogo(){
	// pegar o que veio na url ex. ?1
	var url = window.location.search;
	
	var nivel_jogo = url.replace("?","")
	alert(nivel_jogo)

	var tempo_segundos = 0;
	if(nivel_jogo == 1){ // 1 facil -> 120segundos
		tempo_segundos = 120
	}

	if(nivel_jogo == 2){ // 2 normal -> 60segundos
		tempo_segundos = 60;
	}

	if(nivel_jogo == 3){ // 3 dificil -> 30segundos
		tempo_segundos = 30;
	}
	//inserindo segundos no span
	document.getElementById('cronometro').innerHTML = tempo_segundos;

	//quantidade de baloes
	var qtde_baloes = 20;
	cria_baloes(qtde_baloes);

	//imprimir qtde baloes inteiros
	document.getElementById('baloes_inteiros').innerHTML = qtde_baloes;
	document.getElementById('baloes_estourados').innerHTML = 0;

	contagem_tempo(tempo_segundos + 1);
}

function contagem_tempo(segundos){

	segundos = segundos - 1;
	if(segundos == -1){
		clearTimeout(timerId) //para a execucao do settimeout
		gameOver();
		return false
	}

	document.getElementById('cronometro').innerHTML = segundos;

	timerId =  setTimeout("contagem_tempo("+segundos+")",1000) //executar a funcao a cadas milisegundo
}

function gameOver(){
	alert('fim de jogo voce nao conseguiu estourar todos os baloes a tempo')
}

function cria_baloes(qtde_baloes){
	for(var i = 1; i <= qtde_baloes; i++){
		var balao = document.createElement("img");
		balao.src = 'imagens/balao_azul_pequeno.png';
		balao.style.margin = '10px';
		balao.id = 'b'+ i
		balao.onclick=function(){ estourar(this); }

		document.getElementById('cenario').appendChild(balao);
	}
}

function estourar(e){

	var id_balao = e.id;
	document.getElementById(id_balao).src = 'imagens/balao_azul_pequeno_estourado.png'

}