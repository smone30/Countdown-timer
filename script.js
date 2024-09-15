// Set the target dates and times for both countdowns
const birthdayDate = new Date("December 17, 2024 00:00:00").getTime();
const christmasDate = new Date("December 25, 2024 00:00:00").getTime();

// Function to update countdown
function updateCountdown(targetDate, elementPrefix) {
  const now = new Date().getTime();
  const timeDifference = targetDate - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Update HTML elements for the specific countdown
  document.getElementById(elementPrefix + "Days").textContent = days;
  document.getElementById(elementPrefix + "Hours").textContent = hours;
  document.getElementById(elementPrefix + "Minutes").textContent = minutes;
  document.getElementById(elementPrefix + "Seconds").textContent = seconds;

  // Check if the countdown has expired
  if (timeDifference < 0) {
    clearInterval(countdownInterval);
    document.getElementById(elementPrefix + "Timer").innerHTML = "Countdown expired";
  }
}

// Update both countdowns every second
const countdownInterval = setInterval(() => {
  updateCountdown(birthdayDate, "birthday");
  updateCountdown(christmasDate, "christmas");
}, 1000);
