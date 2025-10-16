const timeElement = document.getElementById("timeDisplay");

function updateTime() {
  timeElement.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000);
