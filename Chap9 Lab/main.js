window.onload = function()
{
    var sentence = "ken is learning javascript.";
    
        function capWord(str) 
        {
        return str.charAt(0).toUpperCase() +
        str.slice(1);
        }
    
    alert(capWord(sentence));
}