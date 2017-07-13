

var questions = [{
    question: 'What does html stand for?',
    answer : 'hyper text markup language',
    points: 100
},
    {
    question: 'What does CDN stand for?',
    answer : 'cdn',
    points: 100
    
},
    {
    question: 'What does html stand for?',
    answer : 'Hyper Text Markup Language',
    points: 100
    
},
    {
    question: 'What does html stand for?',
    answer : 'Hyper Text Markup Language',
    points: 100
    
},
    {
    question: 'What does html stand for?',
    answer : 'Hyper Text Markup Language',
    points: 100
    
}

];



var playerScore = 0;

for(i=0; i < questions.length; i++){
    var tile = document.createElement('tiles');
    tile.className = 'tiles';
    tile.innerHTML = questions[i].points;
    tile.setAttribute("question", questions[i].question);
	tile.setAttribute("answer", questions[i].answer);
	tile.setAttribute("points", questions[i].points);
    document.body.appendChild(tile);
}






// function whenClicked(){
//     var userInput = prompt(this.getAttribute("question")).toLowerCase;
//     if (userInput === questions.answer){
//         alert('correct');
//         playerScore += questions.points;
//         updateCashBet();
//     }
//     else {
//         alert('wrong');
//         playerScore -= questions.points;
//         updateCashBet();
//     }
// }
   
function updateCashBet() {
  $('#playerScore').text('Score:  ' + playerScore.toString());
}


// console.log(questionsAnswers[0].answer);


$('.tiles').click(function(){
     var userInput = prompt(this.getAttribute("question"));
     var points = this.getAttribute("points");
     if (userInput === this.getAttribute("answer")){
        alert('correct');
        playerScore += parseInt(points);
        updateCashBet();
    }
    else {
        alert('wrong');
        playerScore -= this.getAttribute("points");
        updateCashBet();
    }
});