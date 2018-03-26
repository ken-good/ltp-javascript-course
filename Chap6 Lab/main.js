window.onload = function() {

var randomBox1= document.getElementById('eventBox1');
var randomBox2= document.getElementById('eventBox2');


    
randomBox2.onmouseover = function(e) {
    alert('You hovered over the red box!');
    console.log(e);
    }


window.onkeypress = function(e) {
    alert('You pressed a key!');
    console.log(e);
    }

randomBox1.onclick = function(e) {
    alert('X=' + e.clientX + ' and Y=' + e.clientY)
    console.log(e);
    }
        
}