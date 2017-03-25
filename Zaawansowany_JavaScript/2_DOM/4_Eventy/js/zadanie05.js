/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded",function(){
    
    var divColor =  document.querySelectorAll('div');
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    for (var i = 0; i < divColor.length; i++) {
        divColor[i].addEventListener('click', function() {
            this.style.backgroundColor = randomColor;
        })
    }
    
})