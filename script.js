const timeElement = document.getElementById("timeDisplay");

function updateTime() {
  // Use Date.now() for milliseconds timestamp
  timeElement.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000);
