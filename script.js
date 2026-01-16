const startIntervalBtn = document.getElementById("startInterval");
const intervalOutput = document.getElementById("intervalOutput");
startIntervalBtn.onclick = () => {
  let count = 0;
  const intervalId = setInterval(() => {
    count++;
    intervalOutput.textContent = "Повідомлення №" + count;
    if (count === 5) {
      clearInterval(intervalId);
      intervalOutput.textContent += " (зупинено)";
    }
  }, 1000);
};
const box = document.getElementById("box");
let size = 50;
let position = 0;
setInterval(() => {
  size += 2;
  position += 5;
  box.style.width = size + "px";
  box.style.height = size + "px";
  box.style.left = position + "px";
}, 500);
const clickBtn = document.getElementById("clickBtn");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
let score = 0;
let time = 10;
clickBtn.onclick = () => {
  score++;
  scoreEl.textContent = score;
};
const gameInterval = setInterval(() => {
  time--;
  timeEl.textContent = time;
  if (time === 0) {
    clearInterval(gameInterval);
    clickBtn.disabled = true;
    alert("Гра завершена! Очки: " + score);
  }
}, 1000);
const secondsInput = document.getElementById("seconds");
const startTimeoutBtn = document.getElementById("startTimeout");
startTimeoutBtn.onclick = () => {
  const seconds = Number(secondsInput.value);
  if (seconds > 0) {
    setTimeout(() => {
      alert("Час вийшов!");
    }, seconds * 1000);
  }
};
