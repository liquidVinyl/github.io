
function timeKeeper (){
  var rawDate = new Date();
  var dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  var day = rawDate.getDay();
  var hours = rawDate.getHours();
  var minutes = rawDate.getMinutes();
  var seconds = rawDate.getSeconds();


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

  $("#clock").html(clock);
}

$(document).ready(function(){
   setInterval('timeKeeper()', 1000);
});


//testing
var rawDate = new Date();
var dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var day = rawDate.getDay();
var hours = rawDate.getHours();
var minutes = rawDate.getMinutes();
var seconds = rawDate.getSeconds();

console.log(dayList);

console.log(day);

console.log(hours);

console.log(minutes);

console.log(seconds);


//$( "body" ).replaceWith( "<body></body>");
//document.getElementById('mydiv').innerHTML = '<span class="prego">Something</span>';




//Sample Output : Today is : Friday.
//Current time is : 4 PM : 50 : 22
