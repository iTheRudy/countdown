var circle = document.querySelector('.circle-2');
var display = document.querySelector('.display');
var add10sec = document.getElementById('btn');
var skip = document.getElementById('skip');
var loop = setInterval(update,1000);
var sec = 30;
var remSec = sec;
var currSec = 0;
var running = false;
var displayMin = 0;
var displaySec = 0;
update();
skip.onclick = function(){
    clearInterval(loop);
    running = false;
    circle.style.strokeDashoffset = 630;
    sec = 0;
    remSec = 0;
    currSec = 0;
    display.innerHTML='00 : 00';
}
add10sec.onclick = function(){
    increment();
};
function increment(){
    sec = remSec+10;
    currSec=0;
    remSec=sec;
    if(!running){
        running = true;
        setInterval(update,1000);
    }
}
function update(){
    if(remSec<=0){
        circle.style.strokeDashoffset=630;
        running=false;
        remSec = 0;
        sec = 0;
        clearInterval(loop);
    }
    running = true;
    displaySec = remSec%60;
    displayMin = Math.floor(remSec/60);
    if(displayMin<10)
        displayMin = '0'+displayMin;
    if(displaySec<10)
        displaySec = '0'+displaySec;
    display.innerHTML=displayMin+' : '+displaySec;
    var progress = (currSec/sec);
    currSec+=1;
    remSec-=1;
    progress = 630*progress;
    circle.style.strokeDashoffset=progress;
}