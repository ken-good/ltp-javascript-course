window.onload = function() {

var randomBox1= document.getElementById('eventBox1');
var randomBox2= document.getElementById('eventBox2');
var randomBox3= document.getElementById('eventBox3');

    
randomBox2.onmouseover = function(e) {
    alert('You hovered over the red box!');
    console.log(e);
    }


window.onkeypress = function(e) {
    //alert('You pressed a key!');
    alert('You pressed the "' + e.key + '" key')
    console.log(e);
    }

randomBox1.onclick = function(e) {
    alert('X=' + e.clientX + ' and Y=' + e.clientY)
    console.log(e);
    }


randomBox3.onclick = function(e) {
    alert('Time Stamp =' + e.timeStamp + ' and Type of event = ' + e.type)
    console.log(e);
    }

        
}