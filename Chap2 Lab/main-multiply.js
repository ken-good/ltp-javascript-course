window.onload = function()



{
    document.getElementById('multiplyButton').addEventListener('click', multiplyNumbers);
}



function multiplyNumbers(e)

{
    var answer = "";
    answer += document.getElementById('inputOne').value * document.getElementById('inputTwo').value;
    
    alert(answer)
}



