var questions = [{
    question: 'What does HTML stand for?' ,
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
  var tile= $('<tiles></tiles>')
    .addClass('tiles')
    .html(questions[i].points)
    .attr("question", questions[i].question)
    .attr("answer", questions[i].answer)
    .attr("points", questions[i].points)
    .attr("data-toggle", 'modal')
    .attr("data-target", '#testModal');

  $('body').append(tile);
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
// var $playerInput = $( "#target" ).submit(function() {
//   var pInput = $('#playerForm').val(); 
// });


//When I click on tile, it opens up its modal with corresponding data
$('.tiles').click(function(){
  $( "#target" ).submit(function(event) {
  var event = $('#playerForm').val();
    console.log($(this).attr("answer"));
});
   $('.modal-body').html($(this).attr("question"));
   console.log($(this).val());
})  

// compare $(this).attr("answer");
  

// function checkAnswer(){

// }
//On .submit check the answer by comparing .val of textfield with 



//When I submit the form within the modal, it takes the value and places it in a variable
// compare variable against answer of tile to check if right or wrong


// $('.tiles').on("click", function () {
//   var input = $playerInput;
//   alert(input);
//   // $('.modal-header').text('Question');
//   $('.modal-body').html($('.tiles').attr("question"));
//   // var userInput = prompt(this.getAttribute("question"));
//   // var anyCase = userInput.toLowerCase();
//   // var points = this.getAttribute("points");
//   // if (anyCase === this.getAttribute("answer")) {
//   //   alert('correct');
//   //   playerScore += parseInt(points);
//   //   updatePlayerScore();
//   // } else {
//   //   alert('wrong');
//   //   playerScore -= this.getAttribute("points");
//   //   updatePlayerScore();
//   // }
//   // winLose(playerScore);
// });
