const textField0 = document.getElementById("text0");
const textField1 = document.getElementById("text1");

const increaseScoreButton = document.getElementById("button0")
const decreaseScoreButton = document.getElementById("button1")


let score = 0;

increaseScoreButton.addEventListener("click", () => {
increaseScoreByOne();

});
decreaseScoreButton.addEventListener("click", () => {
  decreaseScoreByOne();
});

//textField0.innerHTML = showStylizedScore(786);
//Ger kontenten till HTML och gör det synligt

//function showScore(inputNumber) {
 // return inputNumber * 100;
//}

//function showStylizedScore(scoreInput) {
  //return "Your score is: " + scoreInput * 100
//}


function increaseScoreByOne() {
 score++;
 updateScoreText(score);
}

function decreaseScoreByOne() {
  score--;
  updateScoreText(score);
}

//View
function updateScoreText(newText) {
  textField0.innerHTML = "Score" + ": " + newText;
 }
 function updateStatusText(newText)  {

 }


