window.onload = function()
{
    alert("Let's play! Think of a rock, a paper, or scissors");


document.getElementById('playButton').addEventListener('click', randomNumber);
}


function randomNumber(e){


var computerAnswer = Math.random();
console.log(computerAnswer);
switch (computerAnswer) {
   
   case computerAnswer <= 0.33:
        alert("Rock");
        break;
  
    case computerAnswer > 0.33 && computerAnswer <= .66:
        alert("Paper");
        break;
   default:
        alert("Scissors");
            }

}



