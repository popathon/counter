var date = new Date(2015, 2, 28, 0,0,0,0);
var today = new Date();
var dif = date.getTime() - today.getTime();
var timeLeft = Math.abs(dif/1000)/60;

var clock = $('.your-clock').FlipClock({
  countdown: true
});
clock.setTime(timeLeft);
clock.start();
