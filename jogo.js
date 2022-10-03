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

	document.getElementById('cronometro').innerHTML = tempo_segundos;
}