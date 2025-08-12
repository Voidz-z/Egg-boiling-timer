document.addEventListener("DOMContentLoaded", () => {

  const timer = document.querySelector("#timer");
  const clock = document.querySelector("#clock")
  const startButton = document.querySelector("#startButton")
  const runnyButton = document.querySelector("#runnyButton")
  const pauseButton = document.querySelector("#pauseButton")
  const clearButton = document.querySelector("#clearButton")
  
  
  /*
  
  setInterval(() => {
    const d = new Date();
    clock.innerText = d.toLocaleTimeString();
  }, 1000);
  
  */


  let countdownInterval;
  let remaining
  let isPaused = false;

  function startEggTimer(seconds) {
    clearInterval(countdownInterval);
    remaining = seconds;

    updateTimerDisplay(remaining);

    countdownInterval = setInterval(() => {
      remaining--;
      updateTimerDisplay(remaining);

      if (remaining <= 0) {
        clearInterval(countdownInterval);
        timer.innerText = "Time's up!";
        remaining = 0;
      }
    }, 1000);
  }


  function updateTimerDisplay(seconds) {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    timer.innerText = `${mins}:${secs}`;

  }

  startButton.addEventListener("click", () => {
    startEggTimer(5);
  })

  runnyButton.addEventListener("click", () => {
    startEggTimer(360);
  })


  pauseButton.addEventListener("click", () => {
    if (isPaused == false && remaining > 0) {
      clearInterval(countdownInterval);
      isPaused = true
      pauseButton.innerHTML = '<i class="fas fa-play"></i>';
      pauseButton.setAttribute('title', "Resume");

    }
    else if (isPaused == true && remaining > 0) {
      startEggTimer(remaining);
      isPaused = false
      pauseButton.innerHTML = '<i class="fas fa-pause"></i>';
      pauseButton.setAttribute('title', "Pause");
    }


  })

  clearButton.addEventListener("click", () => {
    clearInterval(countdownInterval);
    remaining = 0;
    timer.innerText = "00:00"
    //clearButton.innerHTML = '<i class="fas fa-rotate-right"></i>'
    isPaused = false
  })


})