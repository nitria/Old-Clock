//SET THE TIME//
var date, hour, mins, secs;

function clock() {
  date = new Date();
  secs = date.getSeconds();
  mins = date.getMinutes();
  hour = date.getHours();

  hoursHandRotate = hour * 30 + mins * (360 / 720);
  minutesHandRotate = mins * 6 + secs * (360 / 3600);
  secondsHandRotate = secs * 6;

  var secondsHand = document.getElementById("secondsHand");
  var minutesHand = document.getElementById("minutesHand");
  var hoursHand = document.getElementById("hoursHand");

  hoursHand.style.transform = "rotate(" + hoursHandRotate + "deg)";
  minutesHand.style.transform = "rotate(" + minutesHandRotate + "deg)";
  secondsHand.style.transform = "rotate(" + secondsHandRotate + "deg)";
}

//SET THE BELL HIT EVERY HOUR & PLAY AS MANY TIMES IS THE CURRENT HOUR//
var bellhits = 0;
var bell;
setInterval(function () {
  bell = new Audio("bell.mp3");
  if (mins == 0 && bellhits < hour) {
    bellhits++;
    bell.play();
  } else {
    bell.pause();
  }
}, 1000);

clock();

setInterval(clock, 1000);
