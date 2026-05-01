function updateClock() {
  const now = new Date();
 
  const timeEl = document.getElementById("clock-time");
  const dateEl = document.getElementById("clock-date");
 
  if (timeEl) {
    timeEl.textContent = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }
 
  if (dateEl) {
    dateEl.textContent = now.toLocaleDateString([], {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
}
 
updateClock();
setInterval(updateClock, 1000);
 
