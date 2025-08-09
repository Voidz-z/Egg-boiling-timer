const timer = document.querySelector("#timer");
const button = document.querySelector("button")

let myVar = setInterval(myTimer ,1000);
function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

function start () {
  timer.innerText = "This is where the timer is"
  document.getElementById("demo").innerHTML = d.toLocaleTimeString() 

}

