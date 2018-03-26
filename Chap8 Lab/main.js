window.onload = function()
{
    var arr = [4, 5, 6, 7, 8, 7, 3, 7, 7, 3, 3, 3, 7]
    var mostFrequent = 1;
    var notFrequent = 0;
    var item;
    
    for( var i = 0; i < arr.length; i++)
        {
            for (var j = i; j < arr.length; j++){
                if (arr[i] == arr[j])
                
                notFrequent++;
                
                if (mostFrequent < notFrequent) {
                    mostFrequent = notFrequent;
                    item = arr[i];
                }
                    
            }
        
        notFrequent = 0;
        
        }
    alert(item + " appears " + mostFrequent + " times");
}



      