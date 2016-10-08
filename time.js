function timeKeeper (){
  var rawDate1 = new Date();
  var dayList1 = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  var day1 = rawDate1.getDay();
  var hours1 = rawDate1.getHours();
  var minutes1 = rawDate1.getMinutes();
  var seconds1 = rawDate1.getSeconds();

  if(hours1 === 0){
    var stdTime1 = 12;
  }

else if(hours1>12){
    var stdTime1 = hours1-12;
}
else {
  stdTime1 = hours1;
};


if (minutes1 < 10){
  var addZeroToMinutes1 = "0" + minutes1;
}
else{
  addZeroToMinutes1 = minutes1;
};


if (seconds1<10){
  var addZeroToSeconds1 = "0" + seconds1;
}
else{
  addZeroToSeconds1 = seconds1;
};


if(hours1>12){
  var ampm1= "PM";
}
else{
  ampm1 = "AM";
};


var clock1 = "Home Time is: " + dayList1[day1] + " " + stdTime1 + " : " + addZeroToMinutes1 + " : " + addZeroToSeconds1 + " " + ampm1;

$(document).ready(function(){
  $("#clockh1").html(clock1);
});
}
$(document).ready(function(){
   setInterval('timeKeeper()', 1000);
});



//testing
var rawDate1 = new Date();
var dayList1 = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var day1 = rawDate1.getDay();
var hours1 = rawDate1.getHours();
var minutes1 = rawDate1.getMinutes();
var seconds1 = rawDate1.getSeconds();

console.log(dayList1);

console.log(day1);

console.log(hours1);

console.log(minutes1);

console.log(seconds1);
