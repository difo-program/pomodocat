const bells = new Audio("./sounds/bell.wav");
const startBtn = document.querySelector(".btn-start");
const pauseBtn = document.querySelector(".btn-pause");
const resetBtn = document.querySelector(".btn-reset");

let gifActive = false;
let gifBreak = true;

let myInterval;
let state = true;
let statePause = true;
let stateReset = true;

let pomodoro = true;
const pomodoroBtn = document.querySelector(".btn-menu-timer");
let shortBreak = true;
const shortBreakBtn = document.querySelector(".btn-menu-short");
let longBreak = true;
const longBreakBtn = document.querySelector(".btn-menu-long");

let pomoCat = document.querySelector(".image");

const minuteDiv = document.querySelector(".minutes");
const secondDiv = document.querySelector(".seconds");

let minutesDefault = "25";
let secondsDefault = "00";

minuteDiv.textContent = minutesDefault;
secondDiv.textContent = secondsDefault;

const sessionAmount = Number.parseInt(minuteDiv.textContent);
let totalSeconds = sessionAmount * 60;


//Timer

const appTimer = () => {

  if (state) {
    state = false;

    if(gifBreak == false){
      pomoCat.src = "./assets/pomocat-break.gif";

    } else if(gifActive == false){
      pomoCat.src = "./assets/pomocat-active.gif";

    } else{
      pomoCat.src = "./assets/pomocat-pause.png";
    }
  
    const updateSeconds = () => {

        totalSeconds--;

        let minutesLeft = Math.floor(totalSeconds / 60);
        let secondsLeft = totalSeconds % 60;
      

        if (secondsLeft < 10) {
            secondDiv.textContent = "0" + secondsLeft;
        } else {
            secondDiv.textContent = secondsLeft;
        }
        minuteDiv.textContent = `${minutesLeft}`;

        if (minutesLeft === 0 && secondsLeft === 0) {
            bells.play();
            clearInterval(myInterval);
        }

    };
    myInterval = setInterval(updateSeconds, 1000);

  } else {
    alert("Session has already started.");
  }
  
};

startBtn.addEventListener("click", appTimer);




// Pause Button

const appPause = () =>{
    if (statePause){
      state = true;
      
      clearInterval(myInterval);

      pomoCat.src = "./assets/pomocat-pause.png"
  }
  console.log("Pausado");


}

pauseBtn.addEventListener("click", appPause);

// Reset Button

const appReset = () =>{
  if (stateReset){
    state = true;

    clearInterval(myInterval);

    minuteDiv.textContent = minutesDefault;
    secondDiv.textContent = secondsDefault;

    totalSeconds = Number.parseInt(minuteDiv.textContent) * 60;
    pomoCat.src = "./assets/pomocat-pause.png"
    
  }

}

resetBtn.addEventListener("click", appReset);

//Pomodoro

const pomodoroTimer = () =>{
  if(pomodoro){
    state = true;

    clearInterval(myInterval);

    minutesDefault = "25";
    secondsDefault = "00";

    minuteDiv.textContent = minutesDefault;
    secondDiv.textContent = secondsDefault;

    totalSeconds=sessionAmount * 60;

    pomoCat.src = "./assets/pomocat-pause.png"

    gifActive = false;
    gifBreak = true;

  }

}

pomodoroBtn.addEventListener("click", pomodoroTimer);


//Short Break

const shortBreakTimer = () =>{
  if(shortBreak){
    state=true;

    clearInterval(myInterval);

    minutesDefault = "5";
    secondsDefault = "00";

    minuteDiv.textContent = minutesDefault;
    secondDiv.textContent = secondsDefault;

    const sessionShortBreakAmount = Number.parseInt(minuteDiv.textContent);
    totalSeconds = sessionShortBreakAmount * 60;

    pomoCat.src = "./assets/pomocat-pause.png"
    
    gifBreak = false;
    gifActive = true;

  } 

}

shortBreakBtn.addEventListener("click", shortBreakTimer);

//Long Break

const longBreakTimer = () =>{
  if(longBreak){
    state=true;

    clearInterval(myInterval);

    minutesDefault = "15";
    secondsDefault = "00";

    minuteDiv.textContent = minutesDefault;
    secondDiv.textContent = secondsDefault;

    const sessionLongBreakAmount = Number.parseInt(minuteDiv.textContent);
    totalSeconds = sessionLongBreakAmount * 60;

    pomoCat.src = "./assets/pomocat-pause.png"

    gifBreak = false;
    gifActive = true;

  } 

}

longBreakBtn.addEventListener("click", longBreakTimer);









