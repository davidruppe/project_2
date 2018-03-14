// declare variables

var score, turnScore;

// create functions

// event handlers

// click button to start new game
// click button to fight
// click button to save

document.querySelector('.btn-fight').addEventListener('click', function() {
	var hero1 = Math.floor(Math.random() * 2) + 1;		// generates a random number (either zero or one)
	var hero2 = Math.floor(Math.random() * 2) + 1;

	document.getElementById('pic-1').style.display = 'block';
	document.getElementById('pic-2').style.display = 'block';

	document.getElementById('pic-1').src = 'images/hero-' + hero1 + '.jpg';		//2. display the result
	document.getElementById('pic-2').src = 'images/hero-' + hero2 + '.jpg';		
}
//3. Update the round score IF the number was NOT a 0 ...

// next player

document.querySelector('.btn-save').addEventListener('click', function() {



document.querySelector('.btn-new').addEventListener('click', newGame);