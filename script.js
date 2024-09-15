// Set target dates for the countdowns
const birthdayTargetDate = new Date("December 17, 2024 00:00:00").getTime();
const christmasTargetDate = new Date("December 25, 2024 00:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate time differences
  const birthdayTimeDifference = birthdayTargetDate - now;
  const christmasTimeDifference = christmasTargetDate - now;

  // Function to update a countdown timer
  function updateTimer(timerId, targetDate, timeDifference) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById(`${timerId}Days`).textContent = days;
    document.getElementById(`${timerId}Hours`).textContent = hours;
    document.getElementById(`${timerId}Minutes`).textContent = minutes;
    document.getElementById(`${timerId}Seconds`).textContent = seconds;

    // Check if the countdown has expired
    if (timeDifference < 0) {
      clearInterval(countdownInterval);
      document.getElementById(timerId).innerHTML = "Countdown expired";
    }
  }

  // Update both countdowns
  updateTimer('birthday', birthdayTargetDate, birthdayTimeDifference);
  updateTimer('christmas', christmasTargetDate, christmasTimeDifference);

}, 1000);
