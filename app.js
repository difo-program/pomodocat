const bells = new Audio("./sounds/bell.wav");
const startBtn = document.querySelector(".btn-start");
const pauseBtn = document.querySelector(".btn-pause");
const resetBtn = document.querySelector(".btn-reset");

let myInterval;
let state = true;
let statePause = true;
let stateReset = true;

const minuteDiv = document.querySelector(".minutes");
const secondDiv = document.querySelector(".seconds");

let minutesDefault = "25";
let secondsDefault = "00";

minuteDiv.textContent = minutesDefault;
secondDiv.textContent = secondsDefault;

const sessionAmount = Number.parseInt(minuteDiv.textContent);
let totalSeconds = sessionAmount * 60;

const appTimer = () => {

  if (state) {
    state = false;
  
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
  }
  console.log("Pausado");


}

pauseBtn.addEventListener("click", appPause);

// Reset Button



const appReset = () =>{
  if (stateReset){
    state = true;

    clearInterval(myInterval);

    minuteDiv.textContent = minutesDefault
    secondDiv.textContent = secondsDefault

    totalSeconds = sessionAmount * 60;

  }

}

resetBtn.addEventListener("click", appReset);











