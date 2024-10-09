// var span = document.querySelector("span");
// const stopButton = document.getElementById("stop");
// const startButton = document.getElementById("start");
// const resetButton = document.getElementById("reset");

// let intervalId;  // To store the interval ID
// let hours = 0, minutes = 0, seconds = 0;
// let isRunning = false; // To prevent multiple intervals from starting

// function updateDisplay() {
//     // Format the time to always show two digits
//     span.innerHTML = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
// }

// function stopwatch() {
//     if (isRunning) return; // Prevent multiple intervals from starting
//     isRunning = true;

//     intervalId = setInterval(() => {
//         seconds += 1;

//         if (seconds === 60) {
//             seconds = 0;
//             minutes += 1;
//         }

//         if (minutes === 60) {
//             minutes = 0;
//             hours += 1;
//         }

//         updateDisplay();
//     }, 3); // Run every second
// }

// function myStopFunction() {
//     clearInterval(intervalId); // Stop the interval
//     isRunning = false; // Allow restarting
// }

// function resetStopwatch() {
//     clearInterval(intervalId); // Stop the interval
//     isRunning = false; // Allow restarting
//     hours = 0;
//     minutes = 0;
//     seconds = 0;
//     updateDisplay(); // Reset the display to 00:00:00
// }

// // Event listeners for buttons
// stopButton.addEventListener("click", myStopFunction);
// startButton.addEventListener("click", stopwatch);
// resetButton.addEventListener("click", resetStopwatch);


let [seconds,minutes,hours]=[0,0,0]
let displayTime=document.getElementById("displayTime")
let timer=null;

function stopWatch(){
    seconds+=1
        if(seconds==60){
            seconds=0;
            minutes+=1
                if(minutes==60){
                    minutes=0;
                    hours+=1
        }
    }

    // To shows the time with 0 infront of all, like: 01
    let h=hours < 10 ? "0" + hours : hours;
    let m=minutes < 10 ? "0" + minutes : minutes;
    let s=seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML=h+":"+m+":"+s;
}

// It starts the watch
function watchStart(){
    if(timer!==null){
        clearInterval(timer);
    }

    timer=setInterval(stopWatch, 1000);
}

// It stop the watch
function watchStop(){
    clearInterval(timer)
}

// It reset the timer
function watchReset() {
    clearInterval(timer);  // Stop the interval
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTime.innerHTML = "00:00:00";  // Reset the display
}