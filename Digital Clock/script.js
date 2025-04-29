function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let timeString = `${hours}:${minutes}:${seconds}`;
    let date = new Date();

    let n = date.toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
  });
  
  console.log(n);

    document.getElementById("clock").textContent = timeString;
    }
    // Update the clock every second
    setInterval(updateClock, 1000);
    // Initialize clock immediately
    updateClock();