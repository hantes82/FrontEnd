/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded",function(){
    
    var divCount = document.querySelector('div');
    divCount.addEventListener('mousemove', function (event) {
        //event.getBoundingClientRect()
        var PosLocalX = event.screenX;
        var PosLocalY = event.screenY;
        var obj = divCount.getBoundingClientRect();
        var PosGlobalX = PosLocalX - obj.x;
        var PosGlobalY = PosLocalY - obj.y;
        document.getElementById('globalX').innerText = PosLocalX;
        document.getElementById('globalY').innerText = PosLocalY;
        document.getElementById('localX').innerText = PosGlobalX;
        document.getElementById('localY').innerText = PosGlobalY;
    })
    


})