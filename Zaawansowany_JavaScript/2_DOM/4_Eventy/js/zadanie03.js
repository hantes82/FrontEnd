/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded",function(){
    
    var buttonFirst = document.getElementById('button1');
    var buttonSecond = document.getElementById('button2');
    var buttonThird = document.getElementById('button3');
    
    var counter1 = 0;
    var counter2 = 0;
    var counter3 = 0;
    buttonFirst.addEventListener('click', function (event) {
    counter1 = counter1+1;
    var span = document.querySelector('#button1 ~ p span');
    span.innerText = counter1;
    })
        
    
    buttonSecond.addEventListener('click', function (event) {
    counter2 = counter2+1;
    var span = document.querySelector('#button2 ~ p span');
    span.innerText = counter2;
    })
    
    
    buttonThird.addEventListener('click', function (event) {
    counter3 = counter3+1;
    var span = document.querySelector('#button3 ~ p span');
    span.innerText = counter3;    
    })
    
 
    
})