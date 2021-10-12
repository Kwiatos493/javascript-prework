{
	function playGame(playerInput) {

		let randomNumber = Math.floor(Math.random() * 3 + 1);
		const computerMove = getMoveName(randomNumber);

		console.log('Gracz wpisał: ' + playerInput);

		const playerMove = getMoveName(playerInput);

		if (computerMove == 'kamień' && playerMove == 'papier') {
			printMessage('Ty wygrywasz!');
		} else if (computerMove == 'papier' && playerMove == 'kamień') {
			printMessage('Przegrywasz!');
		} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
			printMessage('Ty wygrywasz!');
		} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
			printMessage('Przegrywasz!');
		} else if (computerMove == 'nożyce' && playerMove == 'papier') {
			printMessage('Przegrywasz!');
		} else if (computerMove == 'papier' && playerMove == 'nożyce') {
			printMessage('Ty wygrywasz!');
		} else if (computerMove == 'kamień' && playerMove == 'kamień') {
			printMessage('Remis');
		} else if (computerMove == 'papier' && playerMove == 'papier') {
			printMessage('Remis');
		} else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
			printMessage('Remis');
		} else {
			printMessage('Nieznany ruch');
		}
	}

	let stoneEl = document.getElementById('play-rock');
	let paperEl = document.getElementById('play-paper');
	let scissorsEl = document.getElementById('play-scissors');

	stoneEl.addEventListener('click', function () {
		playGame('1');
	});
	paperEl.addEventListener('click', function () {
		playGame('2');
	});
	scissorsEl.addEventListener('click', function () {
		playGame('3');
	});
}