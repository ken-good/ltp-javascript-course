window.onload = function() 
{
document.getElementById('confirmButton').addEventListener('click', runConfirm)
}

function runConfirm() 

{
var message;
if (confirm("Press a button!") == true)
{
message = "You pressed OK!";
} else {
message = "You pressed Cancel!";
}
document.getElementById("text").innerHTML = message;
}