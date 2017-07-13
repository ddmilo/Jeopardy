

var questions = [{
    question: 'What does html stand for?',
    answer : 'Hyper Text Markup Language',
    points: 500
},
    {
    question: 'What does html stand for?',
    answer : 'Hyper Text Markup Language',
    points: 500
    
}];

var playerScore = 0;

for(i=0; i < questions.length; i++){
    var tile = document.createElement('tiles');
    tile.className = 'tiles';
    tile.innerHTML = questions[i].points;
    document.body.appendChild(tile);
}






// function whenClicked(){
//     var userInput = prompt(questionsAnswers[0].question).toLowerCase;
//     if (userInput === questionsAnswers[0].answer){
//         alert('correct');
//         playerScore += questionsAnswers[0].points;
//         updateCashBet();
//     }
//     else {
//         alert('wrong');
//         playerScore -= questionsAnswers[0].points;
//         updateCashBet();
//     }
// }
   
// function updateCashBet() {
//   $('#playerScore').text('Score:  ' + playerScore.toString());
// }


// console.log(questionsAnswers[0].answer);


// $('.test').click(function(){
//     whenClicked();
// });