/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function() {
    

    function changeColor (element) {
        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        element.style.backgroundColor = randomColor;
    
}
    var arrayButton = document.getElementsByClassName('button');
    for (var i = 0; i < arrayButton.length; i++) {
        arrayButton[i].addEventListener('click', function() {
            changeColor(this.parentElement);
}) 
        
    }



})