function getfactorial() {
	cleanTacos();
	let factorial = 1;
	num = parseInt(document.getElementById('numFactorial').value);
	for (var i = 1; i <= num; i++) {
		factorial = factorial * i;
	}
	createTaco(factorial);
}

function cleanTacos() {
	let plato = document.getElementById('plato');
	plato.innerHTML = '';
}

function createTaco(numeroDeTacos) {
	for (var i = 0; i < numeroDeTacos; i++) {
		var taco = document.createElement('p');
		taco.className = 'taco';
		taco.innerHTML = ':taco:';
		document.getElementById('plato').appendChild(taco);
	}
}
