/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded",function(){

    var counter = 0;
    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');
    var button3 = document.getElementById('button3');
    var spanArea = document.querySelector('p span');
    button1.addEventListener('click',function(){
        counter=counter+1;
        spanArea.innerText = counter; 
    })
    
     button2.addEventListener('click',function(){
        counter=counter+1;
        spanArea.innerText = counter; 
    })

     button3.addEventListener('click',function(){
        counter=counter+1;
        spanArea.innerText = counter; 
    })
})