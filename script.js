// declare variables

var score, turnScore;

// create functions

// event handlers

// click button to start new game
// click button to fight
// click button to save

document.querySelector('.btn-fight').addEventListener('click', function() {
	if (gamePlaying) {
		var hero1 = Math.floor(Math.random() * 2) + 1;		// generates a random number (either zero or one)
		var hero2 = Math.floor(Math.random() * 2) + 1;

		document.getElementById('pic-1').style.display = 'block';
		document.getElementById('pic-2').style.display = 'block';

		document.getElementById('pic-1').src = 'images/hero-' + hero1 + '.jpg';		//2. display the result
		document.getElementById('pic-2').src = 'images/hero-' + hero2 + '.jpg';		

//3. Update the players turn score IF the number was NOT a 0 ...

			if (hero1 !== 7 && hero2 !== 7) {

			if (hero1 !== 0 && hero2 !== 0) {		// ... or 7 ...

				if (hero1 !== 8 && hero2 !== 8) {		// ... or 8 ...
					turnScore += hero1 + hero2;
					document.querySelector('#current-' + activePlayer).textContent = turnScore;
				}
				else {
					scores[activePlayer] = 0;		//loses complete score
					document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
					nextPlayer();
				}
			}
				else {
					roundScore = 0;
					document.querySelector('#current-' + activePlayer).textContent = roundScore;
				}
		}
		else {
			nextPlayer();
		}
	}

});

document.querySelector('.btn-save').addEventListener('click', function() {

	if (gamePlaying) {
			//add current score to global score
			score[activePlayer] += turnScore;

			//update the UI
			document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

		// check if player won the game
		if (scores[activePlayer] >= winningScore) {
			document.querySelector('#name-' + activePlayer).textContent = 'Winner';
			
			document.getElementById('dice-1').style.display = 'none';
			document.getElementById('dice-2').style.display = 'none';

			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
			nextPlayer();
		}
	}
	
});




document.querySelector('.btn-new').addEventListener('click', newGame);