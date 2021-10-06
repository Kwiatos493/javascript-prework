{
function playGame(playerInput){

let randomNumber = Math.floor(Math.random() * 3 + 1);
const computerMove = getMoveName(randomNumber);

/*
if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2){
    computerMove = 'papier';
}
else if(randomNumber == 3){
    computerMove = 'nożyce';
}
*/

/* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); */

saySomething();

function saySomething(){
console.log('Gracz wpisał: ' + playerInput);
}

const playerMove =  getMoveName(playerInput);


/*
if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
  playerMove = 'papier';
}
else if (playerInput == '3'){
  playerMove = 'nożyce';
}
*/


if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
else if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Przegrywasz!');
  }  
else if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  }
else if ( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Przegrywasz!');
  }
else if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Przegrywasz!');
  }
else if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  }  
else if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis');
  }
else if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis');
  }  
else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis');
  }

  

printMessage('Twój ruch to: ' + playerMove);
}

let kamień = document.getElementById('play-rock');
kamień.classList.addEventListener('click');
const playGame = function(){ ('1'); };
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2');
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('3');
  });
}
