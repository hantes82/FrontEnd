/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function(){
    var mainList = document.getElementsByClassName('list');
   
    for (var i = 0; i < mainList.length; i++) {
        mainList[i].addEventListener ('mouseover', function(event) {
        var listGet = this.children;
        for (var j = 0; j < listGet.length; j++){
            listGet[j].style.backgroundColor = 'green';
        }
        this.firstElementChild.style.backgroundColor = 'red';
        this.lastElementChild.style.backgroundColor = 'blue';       
            
        })
    }
  
})