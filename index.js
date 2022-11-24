function random() {
  var rngdiceone = Math.floor(Math.random() * 6) + 1;
  var rngdicetwo = Math.floor(Math.random() * 6) + 1;

  var diceimageone = 'images/dice' + rngdiceone + '.png';
  var diceimagetwo = 'images/dice' + rngdicetwo + '.png';

  var player1 = document.querySelectorAll('img')[0];
  player1.setAttribute('src', diceimageone);
  var player2 = document.querySelectorAll('img')[1];
  player2.setAttribute('src', diceimagetwo);

  if (rngdiceone > rngdicetwo) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
  } else if (rngdiceone < rngdicetwo) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

document.querySelector('body').addEventListener('click', function(event) {
  random(this.innerHTML);
});

window.addEventListener('load', function(event) {
  random(this.innerHTML);
});
