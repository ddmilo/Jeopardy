

var questionsAnswers = [{
    question: 'What does html stand for?',
    answer : 'Hyper Text Markup Language'
}];

var playerScore = 0;


function whenClicked(){
    var userInput = prompt(questionsAnswers[0].question);
    if (userInput === questionsAnswers[0].answer){
        alert('correct');
        playerScore += 100;
        updateCashBet();
    };
}
   
function updateCashBet() {
  $('#playerScore').text('Score:  ' + playerScore.toString());
}


console.log(questionsAnswers[0].answer);


$('.test').click(function(){
    whenClicked();
});