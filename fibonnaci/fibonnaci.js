function getfibonnaci() {
	cleanStars();
	let position = parseInt(document.getElementById('position').value);
	let final;
	let fibonnaci = [ 0, 1 ];
	if (position == 1 || position == 2) {
		final = fibonnaci[position - 1];
	} else {
		for (var i = 2; i < position; i++) {
			fibonnaci[i] = fibonnaci[i - 2] + fibonnaci[i - 1];
			final = fibonnaci[fibonnaci.length - 1];
		}
	}
	createStar(final);
}

function cleanStars() {
	let space = document.getElementById('space');
	space.innerHTML = '';
}

function createStar(numStars) {
	for (var i = 0; i < numStars; i++) {
		var star = document.createElement('i');
		star.className = 'fa rating-star fa-star';
    var top =  Math.floor(Math.random()*(300-(Math.random()*100) + 1)+200);
    var left = Math.floor(Math.random()*((Math.random()*10)-200 + 1)+200);
    star.style.top = `${top}px`
    star.style.left = `${left}px`
		document.getElementById('space').appendChild(star);
	}
}
