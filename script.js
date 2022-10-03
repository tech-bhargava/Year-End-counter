let daysElement = document.getElementById('days');
let hoursElement = document.getElementById('hours');
let minutesElement = document.getElementById('minutes');
let secondsElement = document.getElementById('seconds');
let endDate = new Date('December 31 2022 23:59:59');

setInterval(countStatus, 1000);

function countStatus() {
  let currentDate = new Date();
  let countDown = endDate - currentDate;
  let days = Math.floor(countDown / 1000 / 60 / 60 / 24);
  let hours = Math.floor(countDown / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(countDown / 1000 / 60) % 60;
  let seconds = Math.floor(countDown / 1000) % 60;
  daysElement.innerHTML = days < 10 ? '0' + days : days;
  hoursElement.innerHTML = hours < 10 ? '0' + hours : hours;
  minutesElement.innerHTML = minutes < 10 ? '0' + minutes : minutes;
  secondsElement.innerHTML = seconds < 10 ? '0' + seconds : seconds;
  if (seconds == 00) {
    secondsElement.style.color = 'white';
  } else {
    secondsElement.style.color = 'red';
  }
}
countStatus();
