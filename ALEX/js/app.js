const textField0 = document.getElementById("text0");
const textField1 = document.getElementById("text1");

let score = 0;

//textField0.innerHTML = showStylizedScore(786);
//Ger kontenten till HTML och gör det synligt

//function showScore(inputNumber) {
 // return inputNumber * 100;
//}

//function showStylizedScore(scoreInput) {
  //return "Your score is: " + scoreInput * 100
//}

increaseScoreByOne()

function increaseScoreByOne() {
 score++;
 updateScoreText(score);
}

//View
function updateScoreText(newText) {
  textField0.innerHTML = newText;
 }
 function updateStatusText(newText)  {

 }


