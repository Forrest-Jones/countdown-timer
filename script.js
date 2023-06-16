var timerElement = document.getElementById('timer');
var countdownInterval;

function startTimer() {
  var duration = parseInt(document.getElementById('duration').value);

  if (duration > 0) {
    clearInterval(countdownInterval);

    var startTime = Date.now();
    var endTime = startTime + duration * 1000; // convert seconds to milliseconds

    countdownInterval = setInterval(function() {
      var remainingTime = Math.max(0, endTime - Date.now());
      var seconds = Math.floor(remainingTime / 1000);

      timerElement.textContent = 'Time Remaining: ' + seconds + 's';

      if (remainingTime === 0) {
        clearInterval(countdownInterval);
        timerElement.textContent = 'Time Up!';
      }
    }, 1000); // update every second
  }
}
