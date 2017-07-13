var questions = [{
    question: 'What does HTML stand for?',
    answer: 'hyper text markup language',
    points: 100
  },
  {
    question: 'What is the capital of Georgia',
    answer: 'atlanta',
    points: 100

  },
  {
    question: 'Which celebrity is known for their loud, colorful, one-liners?',
    answer: 'samuel l. jackson',
    points: 100

  },
  {
    question: 'What is the baby\'s name on Family Guy? ',
    answer: 'stewie',
    points: 100

  },
  {
    question: 'Why do this project?',
    answer: 'boredom',
    points: 100

  }

];



var playerScore = 0;

for (i = 0; i < questions.length; i++) {
  var tile = document.createElement('tiles');
  tile.className = 'tiles';
  tile.innerHTML = questions[i].points;
  tile.setAttribute("question", questions[i].question);
  tile.setAttribute("answer", questions[i].answer);
  tile.setAttribute("points", questions[i].points);
  document.body.appendChild(tile);
}


function resetScore() {
  playerScore = 0;
  updatePlayerScore();
}

function winLose(playerScore) {
  if (playerScore >= 500) {
    alert("You Win!");
    resetScore();
  }
}


function updatePlayerScore() {
  $('#playerScore').text('Score:  ' + playerScore.toString());
}



$('.tiles').click(function () {
  var userInput = prompt(this.getAttribute("question"));
  var anyCase = userInput.toLowerCase();
  var points = this.getAttribute("points");
  if (anyCase === this.getAttribute("answer")) {
    alert('correct');
    playerScore += parseInt(points);
    updatePlayerScore();
  } else {
    alert('wrong');
    playerScore -= this.getAttribute("points");
    updatePlayerScore();
  }
  winLose(playerScore);
});
