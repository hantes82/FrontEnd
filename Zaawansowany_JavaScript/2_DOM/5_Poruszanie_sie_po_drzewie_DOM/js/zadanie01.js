/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function() { 
    var elemLinks = document.querySelectorAll('a');
    for (var i = 0; i < elemLinks.length; i++) {
        elemLinks[i].addEventListener ('click', function(event) {
           var nextElem = this.nextElementSibling;
            nextElem.classList.toggle ('hidden');
            
        })
    }
})