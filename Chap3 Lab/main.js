window.onload = function()
{
    alert("Let's play! Think of a rock, a paper, or scissors");


document.getElementById('playButton').addEventListener('click', randomNumber);
}


function randomNumber(e)

{

var computerAnswer = Math.random();

console.log(computerAnswer);

if (computerAnswer <= 0.33)
   {
       alert("Rock!");
    }
   
else if (computerAnswer > 0.33 && computerAnswer <= .66)
   {
       alert("Paper!");
    }

else {
   alert("Scissors")
    }
}
    