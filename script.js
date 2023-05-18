// Selecting HTML elements
const outputSeconds = document.getElementById("seconds");
const outputMilliseconds = document.getElementById("milliseconds");
const outputminutes = document.getElementById("minutes");
const outputhours = document.getElementById("hours");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let second = 0;
let millisecond = 0;
let hour = 0;
let minute = 0;
let interval 

// Adding start function
//Adding Click Event to the start button
startBtn.addEventListener("click", function start(){
    interval = setInterval(setTimer, 10);
})
function setTimer(){
    millisecond+=1;
    if (millisecond<=9){
        outputMilliseconds.innerHTML = "0" + millisecond;
    }
    if (millisecond>9){
        outputMilliseconds.innerHTML = millisecond;
    }
    if (millisecond>=100){
        second+=1;
        outputSeconds.innerHTML = "0" + second;
        millisecond = 0;
        outputMilliseconds.innerHTML = "0" + millisecond;
    }
    if (second>9){
        outputSeconds.innerHTML = second;
    }
    if (second>60){
        minute +=1;
        outputminutes.innerHTML = "0" + minute;
        second = 0; 
        outputSeconds.innerHTML = "0" + second;
    }
    if (minute>9){
        outputminutes.innerHTML = minute;
    }
    if (minute>60){
        hour+=1;
        outputhours.innerHTML = "0"+ hour;
        minute = 0;
        outputminutes.innerHTML = "0" + minute;
    }
    if (hour>9){
        outputhours.innerHTML = hour;
    }
}

//Adding stop function
//Adding Click Event to the stop button
stopBtn.addEventListener("click", function stop(){
    clearInterval(interval);
})

//Adding reset function
//Adding Click Event to the reset button
resetBtn.addEventListener("click", function reset(){
    clearInterval(interval);
    second = 0;
    millisecond = 0;
    hour = 0;
    minute = 0;
    outputSeconds.innerHTML = "0" + second;
    outputMilliseconds.innerHTML = "0" + millisecond;
    outputminutes.innerHTML = "0" + minute;
    outputhours.innerHTML = "0" + hour;
})