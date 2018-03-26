window.onload = function()
   {
    document.getElementById('btnSub').addEventListener('click', runSubtract)
    };
                                                            
    function runSubtract()
    {
        var numA = document.getElementById('numOne').value
        var numB = document.getElementById('numTwo').value
        var numAns 
        numAns = numA - numB 
        console.log(numAns)
    };