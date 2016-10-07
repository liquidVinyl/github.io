
var rawDate = new Date();
  console.log(rawDate);
var dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log(dayList);
var day = rawDate.getDay();
  console.log(day);
var hours = rawDate.getHours();
  console.log(hours);
var minutes = rawDate.getMinutes();
  console.log(minutes);
var seconds = rawDate.getSeconds();
  console.log(seconds);


if(hours>12){
    var stdTime = hours-12;
}
else {
  stdTime = hours;
};


if (minutes < 10){
  var addZeroToMinutes = "0" + minutes;
}
else{
  addZeroToMinutes = minutes;
};


if (seconds<10){
  var addZeroToSeconds = "0" + seconds;
}
else{
  addZeroToSeconds = seconds;
};


if(hours>12){
  var ampm= "PM";
}
else{
  ampm = "AM";
};


var clock = "Today is : " + dayList[day] + ": "+ "Current time is : " + stdTime + " : " + addZeroToMinutes + " : " + addZeroToSeconds + " " + ampm;
  console.log(clock)

$(document).ready(function(){
  $("body").append(clock);
})







//document.getElementById('mydiv').innerHTML = '<span class="prego">Something</span>';




//Sample Output : Today is : Friday.
//Current time is : 4 PM : 50 : 22
