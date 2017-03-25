/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function(){
    var winHeight = document.getElementById('windowHeight');
    var winWidth = document.getElementById('windowWidth');
    window.addEventListener('resize', function(event) {
      winHeight.innerHTML = this.innerWidth;
      winWidth.innerHTML = this.innerHeight;
    })
    
    
    
    
    
    
    
});