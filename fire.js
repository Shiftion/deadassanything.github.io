let time = 0;
let intervalId;
let startTime;

const timeElement = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const watermark = document.getElementById("watermark");

timeElement.textContent = "00:00";

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);
watermark.addEventListener("click", () => {
  window.open("https://sites.google.com/view/deadasstime/home");
});

function start() {
  if (!startTime) {
    startTime = new Date();
  }
  if (!intervalId) {
    intervalId = setInterval(() => {
      time += 10;
      const seconds = Math.floor(time / 600);
      const milliseconds = (time % 600) / 10;
      timeElement.textContent = `${seconds}:${milliseconds.toString().padStart(2, "0")}`;
    }, 10);
  }
}

function stop() {
  clearInterval(intervalId);
  intervalId = null;
}

function reset() {
  time = 0;
  timeElement.textContent = "00:00";
  clearInterval(intervalId);
  intervalId = null;
  startTime = null;
}