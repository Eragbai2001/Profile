const timeElement = document.getElementById("timeDisplay");

function updateTime() {
  // Display a human-readable locale timestamp so tests can validate content
  try {
    const now = new Date();
    // e.g. "2025-10-20 14:23:11"
    timeElement.textContent = now.toLocaleString();
  } catch (e) {
    // Fallback to epoch milliseconds
    timeElement.textContent = Date.now();
  }
}

updateTime();
setInterval(updateTime, 1000);
